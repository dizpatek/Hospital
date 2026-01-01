import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET() {
    try {
        const categories = await prisma.treatmentCategory.findMany({
            include: {
                expertiseArea: true,
            },
            orderBy: {
                name: "asc",
            },
        });

        return NextResponse.json({ success: true, data: categories });
    } catch (error: any) {
        console.error("Get categories error:", error);
        return NextResponse.json(
            { success: false, message: "Kategoriler alınamadı" },
            { status: 500 }
        );
    }
}
