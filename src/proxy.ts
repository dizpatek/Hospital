import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export default async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect admin routes
    if (pathname.startsWith("/admin")) {
        const token = request.cookies.get("auth-token")?.value;

        if (!token) {
            return NextResponse.redirect(new URL("/auth/login", request.url));
        }

        try {
            // Verify JWT
            const { payload } = await jwtVerify(token, JWT_SECRET);

            // Check if user has admin or editor role
            if (payload.role !== "ADMIN" && payload.role !== "EDITOR") {
                return NextResponse.redirect(new URL("/auth/login", request.url));
            }

            return NextResponse.next();
        } catch (error) {
            // Invalid token, redirect to login
            const response = NextResponse.redirect(new URL("/auth/login", request.url));
            response.cookies.delete("auth-token");
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
