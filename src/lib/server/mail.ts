import "server-only";
import type { NewMessage } from "@/lib/server/messages";

/** Who is told about a new contact message; CONTACT_TO (comma-separated) replaces the list. */
const TO = ["nodaritchikadze@linwerk.com", "temur.rekhviashvili@linwerk.com"];
/** The sender must be on a domain verified in Resend. */
const FROM = "Linwerk website <website@linwerk.com>";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`).replace(/\r?\n/g, "<br>");

/** Emails a contact message through Resend; a reply goes to the person who wrote it. Throws when it is not sent. */
export async function sendContactEmail(m: NewMessage, topicLabel: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  const to = process.env.CONTACT_TO?.split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || FROM,
      to: to?.length ? to : TO,
      reply_to: m.email,
      subject: `Contact form: ${topicLabel} (${m.name})`,
      text: `Name: ${m.name}\nEmail: ${m.email}\nTopic: ${topicLabel}\n\n${m.message}\n`,
      html: `<p><b>Name:</b> ${esc(m.name)}<br><b>Email:</b> ${esc(m.email)}<br><b>Topic:</b> ${esc(topicLabel)}</p><p>${esc(m.message)}</p>`,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Resend answered ${res.status}: ${await res.text()}`);
}
