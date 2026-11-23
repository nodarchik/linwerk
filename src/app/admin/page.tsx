import type { Metadata } from "next";
import { PageScope } from "@/components/layout/PageScope";
import { TOPICS } from "@/lib/contact";
import { hasPassword, isSignedIn } from "@/lib/server/admin-auth";
import { hasDatabase, listMessages, type Message } from "@/lib/server/messages";
import { login, logout, markRead, remove } from "./actions";
import css from "./admin.module.css";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const WHEN = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Tbilisi",
});

/** The admin panel: the messages from the contact form, newest first, behind one password. */
export default async function AdminPage({ searchParams }: PageProps<"/admin">) {
  const signedIn = await isSignedIn();
  return (
    <>
      <PageScope page="request" />
      <main>
        <section className="svc-sec rq-page" aria-labelledby="adm-title">
          <div className="wrap">
            {signedIn ? <Inbox /> : <SignIn wrong={"wrong" in (await searchParams)} />}
          </div>
        </section>
      </main>
    </>
  );
}

function SignIn({ wrong }: { wrong: boolean }) {
  return (
    <div className={css.login}>
      <h1 id="adm-title">Admin</h1>
      <div className="rq-card">
        {hasPassword() ? (
          <form className="rq-form" action={login}>
            <label className={wrong ? "rq-f is-bad" : "rq-f"}>
              Password
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                autoFocus
                aria-describedby="m-password"
                aria-invalid={wrong || undefined}
              />
              <span className="rq-msg" id="m-password">
                {wrong ? "Wrong password." : ""}
              </span>
            </label>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        ) : (
          <p className={css.note}>
            The panel is off: set the ADMIN_PASSWORD environment variable and redeploy.
          </p>
        )}
      </div>
    </div>
  );
}

async function Inbox() {
  let messages: Message[] = [];
  let failed = "";
  if (!hasDatabase()) failed = "No database: set the DATABASE_URL environment variable.";
  else
    try {
      messages = await listMessages();
    } catch (err) {
      console.error("admin: the messages could not be read", err);
      failed = "The messages could not be read from the database.";
    }
  const unread = messages.filter((m) => !m.read).length;

  return (
    <>
      <header className={css.head}>
        <div>
          <h1 id="adm-title">Messages</h1>
          <p className={css.count}>
            {messages.length} in all, {unread} unread
          </p>
        </div>
        <form action={logout}>
          <button type="submit" className="btn btn-ghost">
            Sign out
          </button>
        </form>
      </header>
      {failed ? (
        <p className={css.note}>{failed}</p>
      ) : messages.length === 0 ? (
        <p className={css.note}>No messages yet.</p>
      ) : (
        <ul className={css.list}>
          {messages.map((m) => (
            <li key={m.id} className={m.read ? css.item : `${css.item} ${css.unread}`}>
              <div className={css.meta}>
                <b>{m.name}</b>
                <a href={`mailto:${m.email}`}>{m.email}</a>
                <span className={css.topic}>
                  {TOPICS[m.topic as keyof typeof TOPICS] ?? m.topic}
                </span>
                <time dateTime={m.createdAt.toISOString()}>{WHEN.format(m.createdAt)}</time>
              </div>
              <p className={css.text}>{m.message}</p>
              {!m.emailed && <p className={css.warn}>The notification email was not sent.</p>}
              <div className={css.acts}>
                <form action={markRead}>
                  <input type="hidden" name="id" value={m.id} />
                  <input type="hidden" name="read" value={m.read ? "0" : "1"} />
                  <button type="submit">{m.read ? "Mark unread" : "Mark read"}</button>
                </form>
                <form action={remove}>
                  <input type="hidden" name="id" value={m.id} />
                  <button type="submit" className={css.del}>
                    Delete
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
