"use server";
import * as z from "zod";
import { signIn } from "@/auth";
import { JobSchema, LoginSchema } from "@/lib/schemas";
import { error } from "console";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { createJob } from "@/lib/prisma/jobs";

export const createJobForm = async (values: z.infer<typeof JobSchema>) => {
  try {
    await createJob(values);
  } catch (error) {
    throw error;
  }
};
