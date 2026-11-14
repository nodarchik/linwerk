import { useRef, useState } from "react";

type Rules<N extends string> = Record<N, (form: HTMLFormElement) => string>;
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Field validation for an uncontrolled form. Errors show on submit (the first wrong field takes focus), then each
 * field re-checks as it changes, and when it is left once it has been shown wrong or has something in it.
 * A rule returns the message to show, or "" when the field is fine.
 *
 * `epoch` identifies a showing of the form: when it changes (a dialog is opened again) the errors start clean
 * while the typed values stay.
 */
export function useFieldErrors<N extends string>(rules: Rules<N>, epoch = 0) {
  type Errors = Partial<Record<N, string>>;
  const [state, setState] = useState<{ epoch: number; errors: Errors }>({
    epoch,
    errors: {},
  });
  const errors: Errors = state.epoch === epoch ? state.errors : {};
  // which fields have been checked at least once in this epoch; only touched in event handlers
  const seenRef = useRef({ epoch, names: new Set<N>() });
  const seen = () => {
    if (seenRef.current.epoch !== epoch) seenRef.current = { epoch, names: new Set() };
    return seenRef.current.names;
  };

  const check = (name: N, form: HTMLFormElement) => {
    const message = rules[name](form);
    setState((prev) => {
      const current: Errors = prev.epoch === epoch ? prev.errors : {};
      return current[name] === message ? prev : { epoch, errors: { ...current, [name]: message } };
    });
    return !message;
  };

  /** Handler for a control's input (or change) event: re-checks a field that has already been checked. */
  const recheck = (name: N) => (e: React.SyntheticEvent<Control>) => {
    const { form } = e.currentTarget;
    if (form && seen().has(name)) check(name, form);
  };

  /** Props shared by every validated control. */
  const field = (name: N) => ({
    name,
    "aria-describedby": `m-${name}`,
    "aria-invalid": errors[name] === undefined ? undefined : errors[name] !== "",
    onBlur: (e: React.FocusEvent<Control>) => {
      const el = e.currentTarget;
      const filled = el.type !== "file" && el.value.trim() !== "";
      if (el.form && (seen().has(name) || filled)) {
        seen().add(name);
        check(name, el.form);
      }
    },
  });

  /** Checks every field; returns the name of the first wrong one, if any. */
  const validate = (form: HTMLFormElement): N | null => {
    let first: N | null = null;
    for (const name of Object.keys(rules) as N[]) {
      seen().add(name);
      if (!check(name, form) && !first) first = name;
    }
    return first;
  };

  return { errors, field, recheck, validate };
}

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function value(form: HTMLFormElement, name: string): string {
  const el = form.elements.namedItem(name);
  return el instanceof HTMLInputElement || el instanceof HTMLSelectElement ? el.value : "";
}
