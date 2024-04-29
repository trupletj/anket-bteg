import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/lib/schemas";
import { getUserByEmail } from "@/lib/prisma/users";
import { hashPassword, comparePassword } from "@/utils/password";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await comparePassword(password, user.password);
          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
    Google,
  ],
};
