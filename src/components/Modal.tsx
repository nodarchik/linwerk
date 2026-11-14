"use client";

import { createContext, use, useCallback, useMemo, useRef, useState } from "react";

interface ModalContextValue {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  /** How many times the dialog has been opened; a new number means a fresh opening. */
  opens: number;
  open(): void;
  close(): void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

/** Shares one native <dialog> between the server-rendered page and the client parts that open and close it. */
export function ModalProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [opens, setOpens] = useState(0);
  const open = useCallback(() => {
    setOpens((n) => n + 1);
    dialogRef.current?.showModal();
  }, []);
  const close = useCallback(() => dialogRef.current?.close(), []);
  const value = useMemo(() => ({ dialogRef, opens, open, close }), [opens, open, close]);
  return <ModalContext value={value}>{children}</ModalContext>;
}

export function useModal(): ModalContextValue {
  const value = use(ModalContext);
  if (!value) throw new Error("useModal must be used inside <ModalProvider>");
  return value;
}

/** A click on the shade (the dialog itself) or on anything marked data-close shuts the dialog. */
export function closeOnDismiss(e: React.MouseEvent<HTMLDialogElement>) {
  const target = e.target as Element;
  if (target === e.currentTarget || target.closest("[data-close]")) e.currentTarget.close();
}

/** A button that opens the page's dialog. */
export function ModalTrigger(props: Omit<React.ComponentProps<"button">, "type" | "onClick">) {
  const { open } = useModal();
  return <button type="button" onClick={open} {...props} />;
}
