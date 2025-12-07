import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Hardcoded credentials
        const VALID_EMAIL = "demo@example.com";
        const VALID_PASSWORD = "password123#A";

        // Check if credentials match
        if (
          credentials?.email === VALID_EMAIL &&
          credentials?.password === VALID_PASSWORD
        ) {
          // Return fake user data with token
          return {
            id: "fake-user-id-12345",
            user: {
              _id: "fake-user-id-12345",
              email: VALID_EMAIL,
              name: "Demo User",
            },
            token: "fake-jwt-token-abcdefghijklmnopqrstuvwxyz123456789",
          };
        }

        // If credentials don't match, throw error
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;
      session.token = token.token;
      return session;
    },
  },
};
