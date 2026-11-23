import "server-only";
import { Pool } from "pg";

/** A contact-form message as the admin panel shows it. */
export interface Message {
  id: number;
  name: string;
  email: string;
  topic: string;
  message: string;
  createdAt: Date;
  read: boolean;
  /** Whether the notification email went out. */
  emailed: boolean;
}

export type NewMessage = Pick<Message, "name" | "email" | "topic" | "message">;

let pool: Pool | undefined;
let ready: Promise<unknown> | undefined;

/** The database, with the table made on first use. Throws when DATABASE_URL is not set. */
async function db(): Promise<Pool> {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  pool ??= new Pool({ connectionString: url, max: 3 });
  ready ??= pool
    .query(
      `create table if not exists contact_messages (
        id bigint generated always as identity primary key,
        name text not null,
        email text not null,
        topic text not null,
        message text not null,
        created_at timestamptz not null default now(),
        read boolean not null default false,
        emailed boolean not null default false
      )`,
    )
    .catch((err) => {
      ready = undefined; // try again on the next request
      throw err;
    });
  await ready;
  return pool;
}

export const hasDatabase = () => Boolean(process.env.DATABASE_URL);

export async function addMessage(m: NewMessage): Promise<number> {
  const { rows } = await (
    await db()
  ).query(
    "insert into contact_messages (name, email, topic, message) values ($1, $2, $3, $4) returning id",
    [m.name, m.email, m.topic, m.message],
  );
  return Number(rows[0].id);
}

/** How many messages arrived in the last hour: the form's flood limit. */
export async function recentCount(): Promise<number> {
  const { rows } = await (
    await db()
  ).query(
    "select count(*)::int as n from contact_messages where created_at > now() - interval '1 hour'",
  );
  return rows[0].n;
}

export async function markEmailed(id: number) {
  await (await db()).query("update contact_messages set emailed = true where id = $1", [id]);
}

export async function listMessages(): Promise<Message[]> {
  const { rows } = await (
    await db()
  ).query(
    `select id, name, email, topic, message, created_at, read, emailed
     from contact_messages order by created_at desc limit 500`,
  );
  return rows.map((r) => ({
    id: Number(r.id),
    name: r.name,
    email: r.email,
    topic: r.topic,
    message: r.message,
    createdAt: r.created_at,
    read: r.read,
    emailed: r.emailed,
  }));
}

export async function setRead(id: number, read: boolean) {
  await (await db()).query("update contact_messages set read = $2 where id = $1", [id, read]);
}

export async function deleteMessage(id: number) {
  await (await db()).query("delete from contact_messages where id = $1", [id]);
}
