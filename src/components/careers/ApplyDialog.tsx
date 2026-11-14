"use client";

import { useState } from "react";
import { EMAIL, useFieldErrors, value } from "@/components/forms/useFieldErrors";
import { closeOnDismiss, useModal } from "@/components/Modal";

const MB = 10 * 1024 * 1024;
const FILE_HINT = "PDF or DOC, up to 10 MB";
const LINK_HINT = "Enter a full link, like linkedin.com/in/your-name.";

// First name, last name, email and CV are required; phone and the link are optional but checked when filled.
const RULES = {
  first: (form: HTMLFormElement) => (value(form, "first").trim() ? "" : "Enter your first name."),
  last: (form: HTMLFormElement) => (value(form, "last").trim() ? "" : "Enter your last name."),
  email: (form: HTMLFormElement) => {
    const v = value(form, "email").trim();
    if (!v) return "Enter your email address.";
    return EMAIL.test(v) ? "" : "Enter an email address like name@example.com.";
  },
  phone: (form: HTMLFormElement) => {
    const v = value(form, "phone").trim();
    if (!v) return "";
    const digits = v.replace(/\D/g, "");
    return /^[+\d\s().-]+$/.test(v) && digits.length >= 7 && digits.length <= 15
      ? ""
      : "Enter a phone number of 7 to 15 digits.";
  },
  link: (form: HTMLFormElement) => {
    const v = value(form, "link").trim();
    if (!v) return "";
    try {
      const url = new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`);
      return /\.[a-z]{2,}$/i.test(url.hostname) ? "" : LINK_HINT;
    } catch {
      return LINK_HINT;
    }
  },
  cv: (form: HTMLFormElement) => {
    const file = (form.elements.namedItem("cv") as HTMLInputElement).files?.[0];
    if (!file) return "Attach your CV.";
    if (!/\.(pdf|docx?)$/i.test(file.name)) return "Attach a PDF or Word file.";
    return file.size > MB ? "Your CV must be 10 MB or smaller." : "";
  },
};
type FieldName = keyof typeof RULES;

/** The form itself. It is remounted (emptied) after a send; a new opening only clears the errors. */
function ApplyForm({ opening, onSent }: { opening: number; onSent: () => void }) {
  const { errors, field, recheck, validate } = useFieldErrors(RULES, opening);
  const [fileName, setFileName] = useState("");
  const box = (name: FieldName, extra = "") => `ap-f${extra}${errors[name] ? " is-bad" : ""}`;

  return (
    <form
      className="ap-form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const first = validate(form);
        if (first) (form.elements.namedItem(first) as HTMLElement).focus();
        else onSent(); // no server yet: a valid form gives way to the thanks
      }}
    >
      <label className={box("first")}>
        First name
        <input
          autoComplete="given-name"
          placeholder="Enter your first name"
          required
          {...field("first")}
          onInput={recheck("first")}
        />
        <span className="ap-msg" id="m-first">
          {errors.first}
        </span>
      </label>{" "}
      <label className={box("last")}>
        Last name
        <input
          autoComplete="family-name"
          placeholder="Enter your last name"
          required
          {...field("last")}
          onInput={recheck("last")}
        />
        <span className="ap-msg" id="m-last">
          {errors.last}
        </span>
      </label>{" "}
      <label className={box("email")}>
        Email
        <input
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          required
          {...field("email")}
          onInput={recheck("email")}
        />
        <span className="ap-msg" id="m-email">
          {errors.email}
        </span>
      </label>{" "}
      <label className={box("phone")}>
        Phone (optional)
        <input
          type="tel"
          autoComplete="tel"
          placeholder="Enter your phone number"
          {...field("phone")}
          onInput={recheck("phone")}
        />
        <span className="ap-msg" id="m-phone">
          {errors.phone}
        </span>
      </label>{" "}
      <label className={box("link", " full")}>
        LinkedIn or portfolio (optional)
        <input
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="Enter your LinkedIn or portfolio link"
          {...field("link")}
          onInput={recheck("link")}
        />
        <span className="ap-msg" id="m-link">
          {errors.link}
        </span>
      </label>
      <div className={box("cv", " full")}>
        CV
        <label className={fileName ? "ap-file has" : "ap-file"}>
          <span>{fileName || FILE_HINT}</span>
          <b>Upload</b>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            required
            {...field("cv")}
            onChange={(e) => {
              setFileName(e.currentTarget.files?.[0]?.name ?? "");
              recheck("cv")(e);
            }}
          />
        </label>
        <span className="ap-msg" id="m-cv">
          {errors.cv}
        </span>
      </div>
      <label className="ap-f full">
        Anything you’d like us to know (optional)
        <textarea name="note" placeholder="Enter anything else we should know" />
      </label>{" "}
      <label className="ap-ok full" style={{ gridColumn: "1/-1" }}>
        <input type="checkbox" name="keep" defaultChecked />
        Keep my application on file for 12 months for other roles.
      </label>
      <p className="ap-err" aria-live="polite" />
      <div className="ap-act">
        <button
          type="button"
          className="tlink"
          data-close=""
          style={{ border: "0", background: "none", cursor: "pointer" }}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Send application
        </button>
      </div>
    </form>
  );
}

/** Apply: the dialog opens from the role card's button; required fields are checked here, then it thanks. */
export function ApplyDialog({ roleTitle }: { roleTitle: string }) {
  const { dialogRef, opens } = useModal();
  // the opening the thanks belongs to (a new opening shows the form again), and how many applications were sent
  const [sentOn, setSentOn] = useState(-1);
  const [sends, setSends] = useState(0);
  const sent = sentOn === opens;

  return (
    <dialog
      className={sent ? "apply sent" : "apply"}
      id="apply"
      aria-labelledby="ap-title"
      data-lenis-prevent=""
      ref={dialogRef}
      onClick={closeOnDismiss}
    >
      <div className="ap-in">
        <div className="ap-head">
          <div>
            <h2 id="ap-title">Apply</h2>
            <p className="ap-role">{roleTitle}</p>
          </div>
          <button type="button" className="ap-x" aria-label="Close" data-close="">
            <svg className="ic" aria-hidden="true">
              <use href="#i-x" />
            </svg>
          </button>
        </div>
        <ApplyForm
          key={sends}
          opening={opens}
          onSent={() => {
            setSentOn(opens);
            setSends((n) => n + 1);
          }}
        />
        <div className="ap-done" role="status">
          <p>
            Thank you. Your application is in. We reply to every applicant within five business
            days.
          </p>
          <button type="button" className="btn btn-ghost" data-close="">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
