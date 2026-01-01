import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

// Force NEXTAUTH_URL in production to fix Vercel deployment issue
if (process.env.NODE_ENV === "production") {
    process.env.NEXTAUTH_URL = "https://hospital-two-rouge.vercel.app";
}

export { handler as GET, handler as POST };
