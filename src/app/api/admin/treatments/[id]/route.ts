import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const treatment = await prisma.treatmentCategory.findUnique({
            where: { id: params.id },
            include: { expertiseArea: true },
        });

        if (!treatment) {
            return NextResponse.json(
                { success: false, message: "Tedavi bulunamadı" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: treatment });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Tedavi alınamadı" },
            { status: 500 }
        );
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        const data = await req.json();

        const treatment = await prisma.treatmentCategory.update({
            where: { id: params.id },
            data: {
                name: data.name,
                slug: data.slug,
                description: data.description,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Tedavi güncellendi",
            data: treatment,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Tedavi güncellenemedi: " + error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        await prisma.treatmentCategory.delete({
            where: { id: params.id },
        });

        return NextResponse.json({
            success: true,
            message: "Tedavi silindi",
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Tedavi silinemedi: " + error.message },
            { status: 500 }
        );
    }
}
