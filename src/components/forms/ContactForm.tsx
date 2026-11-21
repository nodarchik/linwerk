"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL, useFieldErrors, value } from "@/components/forms/useFieldErrors";
import { useModal } from "@/components/Modal";
import { TOPICS } from "@/lib/contact";

const text = (form: HTMLFormElement, name: string) => {
  const el = form.elements.namedItem(name);
  return el instanceof HTMLTextAreaElement ? el.value : value(form, name);
};

const RULES = {
  name: (form: HTMLFormElement) => (text(form, "name").trim() ? "" : "Enter your name."),
  email: (form: HTMLFormElement) => {
    const v = text(form, "email").trim();
    if (!v) return "Enter your email address.";
    return EMAIL.test(v) ? "" : "Enter an email address like name@company.com.";
  },
  topic: (form: HTMLFormElement) => (text(form, "topic") ? "" : "Select a topic."),
  message: (form: HTMLFormElement) =>
    text(form, "message").trim() ? "" : "Tell us a little about what you need.",
};
type FieldName = keyof typeof RULES;

const FAILED = {
  busy: "We are getting a lot of messages right now. Please try again in an hour or write to info@linwerk.com.",
  other: "Your message was not sent. Please try again or write to info@linwerk.com.",
};

/**
 * Contact. A valid form goes to /api/contact (saved for the admin panel and emailed to the team); once it is
 * accepted the form empties itself and gives way to the "Message sent" dialog.
 */
export function ContactForm() {
  const { open, opens } = useModal();
  const { errors, field, recheck, validate } = useFieldErrors(RULES, opens);
  const box = (name: FieldName) => (errors[name] ? "rq-f is-bad" : "rq-f");
  const topicRef = useRef<HTMLSelectElement>(null);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState("");

  // /contact?type=project and ?type=consultation arrive with the topic already chosen
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type && type in TOPICS && topicRef.current) topicRef.current.value = type;
  }, []);

  return (
    <form
      className="rq-form"
      noValidate
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const first = validate(form);
        if (first) {
          (form.elements.namedItem(first) as HTMLElement).focus();
          return;
        }
        if (sending) return;
        setSending(true);
        setFailed("");
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(form))),
          });
          if (!res.ok) throw new Error(String(res.status));
          form.reset();
          open();
        } catch (err) {
          setFailed(err instanceof Error && err.message === "429" ? FAILED.busy : FAILED.other);
        } finally {
          setSending(false);
        }
      }}
    >
      <label className={box("name")}>
        Name
        <input
          autoComplete="name"
          placeholder="Enter your name"
          required
          {...field("name")}
          onInput={recheck("name")}
        />
        <span className="rq-msg" id="m-name">
          {errors.name}
        </span>
      </label>{" "}
      <label className={box("email")}>
        Email
        <input
          type="email"
          autoComplete="email"
          placeholder="Enter your work email"
          required
          {...field("email")}
          onInput={recheck("email")}
        />
        <span className="rq-msg" id="m-email">
          {errors.email}
        </span>
      </label>{" "}
      <label className={box("topic")}>
        Topic
        <select
          required
          defaultValue=""
          ref={topicRef}
          {...field("topic")}
          onChange={recheck("topic")}
        >
          <option value="" disabled>
            Select a topic
          </option>
          {Object.entries(TOPICS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <span className="rq-msg" id="m-topic">
          {errors.topic}
        </span>
      </label>{" "}
      <label className={box("message")}>
        Message
        <textarea
          rows={5}
          placeholder="Tell us what you are building and where you need help"
          required
          {...field("message")}
          onInput={recheck("message")}
        />
        <span className="rq-msg" id="m-message">
          {errors.message}
        </span>
      </label>{" "}
      {/* a trap for bots: people neither see nor reach it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        hidden
      />
      <p className="rq-fail" role="alert">
        {failed}
      </p>
      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
