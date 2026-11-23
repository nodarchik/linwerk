import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "lw_admin";
const DAYS = 7;

const password = () => process.env.ADMIN_PASSWORD ?? "";
export const hasPassword = () => password().length > 0;

const same = (a: string, b: string) =>
  timingSafeEqual(createHash("sha256").update(a).digest(), createHash("sha256").update(b).digest());

// The session is its expiry time signed with the password: changing the password signs everyone out.
const sign = (exp: string) =>
  createHmac("sha256", password()).update(`lw-admin.${exp}`).digest("hex");

export function passwordMatches(given: string) {
  return hasPassword() && same(given, password());
}

export async function signIn() {
  const exp = String(Date.now() + DAYS * 86_400_000);
  (await cookies()).set(COOKIE, `${exp}.${sign(exp)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: DAYS * 86_400,
  });
}

export async function signOut() {
  (await cookies()).set(COOKIE, "", { path: "/admin", maxAge: 0 });
}

export async function isSignedIn() {
  if (!hasPassword()) return false;
  const [exp, mac] = ((await cookies()).get(COOKIE)?.value ?? "").split(".");
  return Boolean(exp && mac) && Number(exp) > Date.now() && same(mac, sign(exp));
}
