import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        const [procCount, blogCount, catCount, requests] = await Promise.all([
            prisma.procedure.count(),
            prisma.blogPost.count(),
            prisma.treatmentCategory.count(),
            prisma.appointmentRequest.findMany({
                take: 5,
                orderBy: { createdAt: "desc" }
            })
        ]);

        const stats = {
            procedures: procCount,
            blogs: blogCount,
            categories: catCount,
            appointments: requests.length
        };

        return NextResponse.json({
            success: true,
            stats,
            requests
        });
    } catch (error: any) {
        console.error("Dashboard API error:", error);
        return NextResponse.json(
            { success: false, message: "Dashboard verisi alınamadı" },
            { status: 500 }
        );
    }
}