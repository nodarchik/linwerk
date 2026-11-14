"use client";

import { EMAIL, useFieldErrors, value } from "@/components/forms/useFieldErrors";
import { useModal } from "@/components/Modal";

const INDUSTRIES = [
  "Finance, banking & insurance",
  "Healthcare & life sciences",
  "Retail & e-commerce",
  "Manufacturing & industrial",
  "Logistics & supply chain",
  "Real estate & PropTech",
  "Education & EdTech",
  "Legal & professional services",
  "Travel & hospitality",
  "Media & entertainment",
  "Energy & utilities",
  "Telecom",
  "Public sector & GovTech",
  "Other",
];

const SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–1,000 employees",
  "More than 1,000 employees",
];

// Every field is required; the email must look like one.
const RULES = {
  company: (form: HTMLFormElement) =>
    value(form, "company").trim() ? "" : "Enter your company name.",
  industry: (form: HTMLFormElement) => (value(form, "industry") ? "" : "Select your industry."),
  size: (form: HTMLFormElement) => (value(form, "size") ? "" : "Select your company size."),
  email: (form: HTMLFormElement) => {
    const v = value(form, "email").trim();
    if (!v) return "Enter your email address.";
    return EMAIL.test(v) ? "" : "Enter an email address like name@company.com.";
  },
};
type FieldName = keyof typeof RULES;

/** Request engineers. No server yet: a valid form empties itself and gives way to the "Request sent" dialog. */
export function RequestForm() {
  const { open, opens } = useModal();
  // each send starts a new epoch, so the emptied form shows no errors
  const { errors, field, recheck, validate } = useFieldErrors(RULES, opens);
  const box = (name: FieldName) => (errors[name] ? "rq-f is-bad" : "rq-f");

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
      <label className={box("company")}>
        Company
        <input
          autoComplete="organization"
          placeholder="Enter your company name"
          required
          {...field("company")}
          onInput={recheck("company")}
        />
        <span className="rq-msg" id="m-company">
          {errors.company}
        </span>
      </label>{" "}
      <label className={box("industry")}>
        Industry
        <select required defaultValue="" {...field("industry")} onChange={recheck("industry")}>
          <option value="" disabled>
            Select your industry
          </option>
          {INDUSTRIES.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        <span className="rq-msg" id="m-industry">
          {errors.industry}
        </span>
      </label>{" "}
      <label className={box("size")}>
        Company size
        <select required defaultValue="" {...field("size")} onChange={recheck("size")}>
          <option value="" disabled>
            Select your company size
          </option>
          {SIZES.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        <span className="rq-msg" id="m-size">
          {errors.size}
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
