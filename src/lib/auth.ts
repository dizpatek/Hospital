import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// Import the Role type from the types file
import type { Role } from "../types/next-auth";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    debug: true, // Enable debug messages in console
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("Authorize called with:", credentials?.email);

                if (!credentials?.email || !credentials?.password) {
                    console.log("Missing credentials");
                    return null;
                }

                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email,
                        },
                    });

                    if (!user) {
                        console.log("User not found");
                        return null;
                    }

                    if (!user.password) {
                        console.log("User password not set");
                        return null;
                    }

                    const isPasswordValid = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!isPasswordValid) {
                        console.log("Invalid password");
                        return null;
                    }

                    console.log("User authenticated successfully:", user.id);
                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        role: user.role,
                    };
                } catch (error) {
                    console.error("Authorize error:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            console.log("Session callback:", token.id);
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as Role;
            }
            return session;
        },
        async jwt({ token, user }) {
            console.log("JWT callback:", user ? "User present" : "No user");
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
    },
    cookies: {
        sessionToken: {
            name: `${process.env.NODE_ENV === "production" ? "__Secure-" : ""}next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: process.env.NODE_ENV === "production",
            },
        },
    },
};
