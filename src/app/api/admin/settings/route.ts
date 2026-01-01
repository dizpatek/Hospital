import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET() {
    try {
        // Get or create default settings
        let settings = await prisma.siteSettings.findFirst();

        if (!settings) {
            settings = await prisma.siteSettings.create({
                data: {
                    siteName: "MedDoc",
                    primaryColor: "#0ea5e9",
                    secondaryColor: "#8b5cf6",
                },
            });
        }

        return NextResponse.json({ success: true, data: settings });
    } catch (error: any) {
        console.error("Get settings error:", error);
        return NextResponse.json(
            { success: false, message: "Ayarlar alınamadı" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        // Verify authentication
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        // Get request body
        const data = await req.json();

        // Get or create settings
        let settings = await prisma.siteSettings.findFirst();

        if (!settings) {
            settings = await prisma.siteSettings.create({
                data: {
                    ...data,
                },
            });
        } else {
            settings = await prisma.siteSettings.update({
                where: { id: settings.id },
                data: {
                    ...data,
                },
            });
        }

        return NextResponse.json({
            success: true,
            message: "Ayarlar kaydedildi",
            data: settings,
        });
    } catch (error: any) {
        console.error("Save settings error:", error);
        return NextResponse.json(
            { success: false, message: "Ayarlar kaydedilemedi" },
            { status: 500 }
        );
    }
}
