import { EMAIL, TOPICS, type Topic } from "@/lib/contact";
import { sendContactEmail } from "@/lib/server/mail";
import { addMessage, markEmailed, recentCount } from "@/lib/server/messages";

const MAX_PER_HOUR = 40;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** The contact form: the message is saved for the admin panel, then emailed to the team. */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }
  // a field people never see; only a bot fills it, and it is told all went well
  if (str(body.website, 200)) return Response.json({ ok: true });

  const name = str(body.name, 200);
  const email = str(body.email, 320);
  const topic = str(body.topic, 40);
  const message = str(body.message, 10_000);
  if (!name || !EMAIL.test(email) || !(topic in TOPICS) || !message)
    return Response.json({ error: "invalid" }, { status: 400 });

  let id: number;
  try {
    if ((await recentCount()) >= MAX_PER_HOUR)
      return Response.json({ error: "busy" }, { status: 429 });
    id = await addMessage({ name, email, topic, message });
  } catch (err) {
    console.error("contact: the message was not saved", err);
    return Response.json({ error: "server" }, { status: 500 });
  }

  // saved is sent: the panel has the message even when the email does not go out, and marks it
  try {
    await sendContactEmail({ name, email, topic, message }, TOPICS[topic as Topic]);
    await markEmailed(id);
  } catch (err) {
    console.error(`contact: message ${id} was saved but not emailed`, err);
  }
  return Response.json({ ok: true });
}
