"use server";

import * as z from "zod";
import prisma from "@/lib/prisma";
import { RegisterSchema } from "@/lib/schemas";
import { hashPassword } from "@/utils/password";
import { getUserByEmail } from "@/lib/prisma/users";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await hashPassword(password);

  const exixtingUser = await getUserByEmail(email);

  if (exixtingUser) {
    return {
      error: "User already exists",
    };
  }
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
  return { success: "Email sent" };

  //TODO Send email to user with verification link
};
