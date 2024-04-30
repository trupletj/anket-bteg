"use server";
import * as z from "zod";
import { signOut } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
