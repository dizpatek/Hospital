import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const faq = await prisma.fAQ.findUnique({
            where: { id },
        });

        if (!faq) {
            return NextResponse.json(
                { success: false, message: "Soru bulunamadı" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: faq });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Soru alınamadı" },
            { status: 500 }
        );
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        const data = await req.json();

        const faq = await prisma.fAQ.update({
            where: { id },
            data: {
                question: data.question,
                answer: data.answer,
                isGlobal: data.isGlobal ?? true,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Soru güncellendi",
            data: faq,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Soru güncellenemedi: " + error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        await prisma.fAQ.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "Soru silindi",
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Soru silinemedi: " + error.message },
            { status: 500 }
        );
    }
}
