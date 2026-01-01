import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET() {
    try {
        const treatments = await prisma.treatmentCategory.findMany({
            include: {
                expertiseArea: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ success: true, data: treatments });
    } catch (error: any) {
        console.error("Get treatments error:", error);
        return NextResponse.json(
            { success: false, message: "Tedaviler alınamadı" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        const data = await req.json();

        const treatment = await prisma.treatmentCategory.create({
            data: {
                name: data.name,
                slug: data.slug,
                description: data.description,
                expertiseAreaId: data.expertiseAreaId,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Tedavi kategorisi oluşturuldu",
            data: treatment,
        });
    } catch (error: any) {
        console.error("Create treatment error:", error);
        return NextResponse.json(
            { success: false, message: "Tedavi oluşturulamadı: " + error.message },
            { status: 500 }
        );
    }
}
