"use server";

import { db } from "@/lib/db"; // <-- This imports the link we just made
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function loginAction(formData: FormData) {
  const user_id = formData.get("user_id") as string;
  const password = formData.get("password") as string;

  // Now 'db.query' actually goes to your real database!
  const result = await db.query("SELECT * FROM users WHERE user_id = $1", [user_id]);

  if (result.rows.length === 0) {
    return { error: "User not found" };
  }

  const user = result.rows[0];
  const isMatch = await bcrypt.compare(password, user.password_hash);

  if (!isMatch) return { error: "Wrong password" };

  // Automatic redirect based on the SQL 'role' column
  redirect(`/dashboard/${user.role}`);
}