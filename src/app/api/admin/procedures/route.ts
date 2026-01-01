import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET() {
    try {
        const procedures = await prisma.procedure.findMany({
            include: {
                treatmentCategory: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ success: true, data: procedures });
    } catch (error: any) {
        console.error("Get procedures error:", error);
        return NextResponse.json(
            { success: false, message: "Prosedürler alınamadı" },
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

        // Create procedure
        const procedure = await prisma.procedure.create({
            data: {
                name: data.name,
                slug: data.slug,
                icon: data.icon,
                summary: data.summary,
                why: data.why,
                how: data.how,
                method: data.method,
                sideEffects: data.sideEffects,
                faq: data.faq,
                imageUrl: data.imageUrl,
                seoTitle: data.seoTitle,
                seoDesc: data.seoDesc,
                status: data.status || "DRAFT",
                treatmentCategoryId: data.treatmentCategoryId || null,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Prosedür oluşturuldu",
            data: procedure,
        });
    } catch (error: any) {
        console.error("Create procedure error:", error);
        return NextResponse.json(
            { success: false, message: "Prosedür oluşturulamadı: " + error.message },
            { status: 500 }
        );
    }
}
