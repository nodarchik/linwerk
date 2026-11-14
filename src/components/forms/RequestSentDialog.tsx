"use client";

import { useEffect } from "react";
import { closeOnDismiss, useModal } from "@/components/Modal";

/** The "Request sent" dialog shell; its picture and copy are server-rendered children. Each opening replays the
    picture's drawing (the .play class). */
export function RequestSentDialog({ children }: { children: React.ReactNode }) {
  const { dialogRef, opens } = useModal();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !opens) return;
    dialog.classList.remove("play");
    void dialog.offsetWidth;
    dialog.classList.add("play");
  }, [dialogRef, opens]);

  return (
    <dialog
      className="rq-ok"
      id="rq-ok"
      aria-labelledby="rq-ok-t"
      aria-describedby="rq-ok-d"
      ref={dialogRef}
      onClick={closeOnDismiss}
      onClose={(e) => e.currentTarget.classList.remove("play")}
    >
      {children}
    </dialog>
  );
}
