"use client";

import { useEffect, useRef } from "react";
import { EMAIL, useFieldErrors, value } from "@/components/forms/useFieldErrors";
import { useModal } from "@/components/Modal";

/** The topics, keyed by the ?type= value the site's links carry. */
const TOPICS = {
  project: "A project",
  consultation: "A consultation or audit",
  other: "Something else",
};

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

/** Contact. No server yet: a valid form empties itself and gives way to the "Message sent" dialog. */
export function ContactForm() {
  const { open, opens } = useModal();
  const { errors, field, recheck, validate } = useFieldErrors(RULES, opens);
  const box = (name: FieldName) => (errors[name] ? "rq-f is-bad" : "rq-f");
  const topicRef = useRef<HTMLSelectElement>(null);

  // /contact?type=project and ?type=consultation arrive with the topic already chosen
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type && type in TOPICS && topicRef.current) topicRef.current.value = type;
  }, []);

  return (
    <form
      className="rq-form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const first = validate(form);
        if (first) {
          (form.elements.namedItem(first) as HTMLElement).focus();
          return;
        }
        form.reset();
        open();
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
      <button type="submit" className="btn btn-primary">
        Send message
      </button>
    </form>
  );
}
