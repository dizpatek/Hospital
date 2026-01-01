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
        const appointment = await prisma.appointmentRequest.findUnique({
            where: { id },
        });

        if (!appointment) {
            return NextResponse.json(
                { success: false, message: "Randevu bulunamadı" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: appointment });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Randevu alınamadı" },
            { status: 500 }
        );
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        const { id } = await params;
        const { isContacted } = await req.json();

        const appointment = await prisma.appointmentRequest.update({
            where: { id },
            data: { isContacted },
        });

        return NextResponse.json({
            success: true,
            message: "Randevu durumu güncellendi",
            data: appointment,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Randevu güncellenemedi: " + error.message },
            { status: 500 }
        );
    }
}