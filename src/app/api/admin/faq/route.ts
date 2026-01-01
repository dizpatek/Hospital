import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET() {
    try {
        const faqs = await prisma.fAQ.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ success: true, data: faqs });
    } catch (error: any) {
        console.error("Get FAQs error:", error);
        return NextResponse.json(
            { success: false, message: "SSS alınamadı" },
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

        const faq = await prisma.fAQ.create({
            data: {
                question: data.question,
                answer: data.answer,
                isGlobal: data.isGlobal ?? true,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Soru eklendi",
            data: faq,
        });
    } catch (error: any) {
        console.error("Create FAQ error:", error);
        return NextResponse.json(
            { success: false, message: "Soru eklenemedi: " + error.message },
            { status: 500 }
        );
    }
}
