import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function GET(req: Request) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        const { searchParams } = new URL(req.url);
        const query = searchParams.get('q');

        if (!query || query.length < 2) {
            return NextResponse.json({ success: true, results: [] });
        }

        // Search procedures
        const procedures = await prisma.procedure.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { summary: { contains: query, mode: 'insensitive' } },
                    { why: { contains: query, mode: 'insensitive' } },
                ],
                status: 'PUBLISHED'
            },
            select: {
                id: true,
                name: true,
                slug: true,
                summary: true,
                status: true,
            },
            take: 5
        });

        // Search blog posts
        const blogPosts = await prisma.blogPost.findMany({
            where: {
                OR: [
                    { title: { contains: query, mode: 'insensitive' } },
                    { excerpt: { contains: query, mode: 'insensitive' } },
                    { content: { contains: query, mode: 'insensitive' } },
                ],
                status: 'PUBLISHED'
            },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                status: true,
            },
            take: 5
        });

        const results = [
            ...procedures.map(p => ({ ...p, type: 'procedure', url: `/admin/procedures/${p.id}` })),
            ...blogPosts.map(b => ({ ...b, type: 'blog', url: `/admin/blog/${b.id}` }))
        ];

        return NextResponse.json({ success: true, results });
    } catch (error: any) {
        console.error("Search error:", error);
        return NextResponse.json(
            { success: false, message: "Arama hatası" },
            { status: 500 }
        );
    }
}