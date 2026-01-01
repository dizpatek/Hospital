import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const post = await prisma.blogPost.findUnique({
            where: { id },
            include: { category: true },
        });

        if (!post) {
            return NextResponse.json(
                { success: false, message: "Blog yazısı bulunamadı" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: post });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Blog yazısı alınamadı" },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        const data = await req.json();

        const post = await prisma.blogPost.update({
            where: { id },
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
            message: "Blog yazısı güncellendi",
            data: post,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Blog yazısı güncellenemedi: " + error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        await prisma.blogPost.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "Blog yazısı silindi",
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Blog yazısı silinemedi: " + error.message },
            { status: 500 }
        );
    }
}
