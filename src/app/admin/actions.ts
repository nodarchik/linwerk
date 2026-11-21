"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isSignedIn, passwordMatches, signIn, signOut } from "@/lib/server/admin-auth";
import { deleteMessage, setRead } from "@/lib/server/messages";

export async function login(form: FormData) {
  if (!passwordMatches(String(form.get("password") ?? ""))) {
    await new Promise((r) => setTimeout(r, 800)); // slows guessing down
    redirect("/admin?wrong=1");
  }
  await signIn();
  redirect("/admin");
}

export async function logout() {
  await signOut();
  redirect("/admin");
}

// Every action checks the session itself: an action is a public endpoint.
async function messageId(form: FormData) {
  if (!(await isSignedIn())) redirect("/admin");
  const id = Number(form.get("id"));
  if (!Number.isSafeInteger(id)) throw new Error("Bad message id");
  return id;
}

export async function markRead(form: FormData) {
  await setRead(await messageId(form), form.get("read") === "1");
  revalidatePath("/admin");
}

export async function remove(form: FormData) {
  await deleteMessage(await messageId(form));
  revalidatePath("/admin");
}
