import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { getUserById, getUserByEmail } from "@/lib/prisma/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ account, user, profile }) {
      if (account?.provider === "google") {
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            image: profile.image,
          },
        });
      }
    },
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // if (account.provider === 'google' && profile.verified_email === true) {
      //   return true
      // }
      if (profile?.email) {
        const existingUser = await getUserByEmail(profile.email);
        if (!existingUser) {
          return false;
        }
        return true;
      }

      return false;
    },

    async session({ session, token, user }) {
      console.log("session", user);
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
          id: token.sub,
        },
      };
    },
    async jwt({ token }) {
      if (!token?.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
