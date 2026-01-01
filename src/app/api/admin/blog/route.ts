import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET() {
    try {
        const posts = await prisma.blogPost.findMany({
            include: {
                category: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ success: true, data: posts });
    } catch (error: any) {
        console.error("Get blog posts error:", error);
        return NextResponse.json(
            { success: false, message: "Blog yazıları alınamadı" },
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

        const post = await prisma.blogPost.create({
            data: {
                title: data.title,
                slug: data.slug,
                excerpt: data.excerpt,
                content: data.content,
                coverImage: data.coverImage || "",
                categoryId: data.categoryId,
                status: data.status || "DRAFT",
            },
        });

        return NextResponse.json({
            success: true,
            message: "Blog yazısı oluşturuldu",
            data: post,
        });
    } catch (error: any) {
        console.error("Create blog post error:", error);
        return NextResponse.json(
            { success: false, message: "Blog yazısı oluşturulamadı: " + error.message },
            { status: 500 }
        );
    }
}
