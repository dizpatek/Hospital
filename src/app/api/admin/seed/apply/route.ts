import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export async function POST(req: Request) {
    try {
        // Verify authentication
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        const { confirm } = await req.json();

        if (!confirm) {
            return NextResponse.json({ success: false, message: "Confirmation required" }, { status: 400 });
        }

        // Get seed data
        const settings = await prisma.siteSettings.findFirst();
        if (settings === null || settings.seedData === null) {
            return NextResponse.json({ success: false, message: "No seed data found" }, { status: 400 });
        }

        const seedData = JSON.parse(settings.seedData);

        let stats = { created: 0, updated: 0 };

        // Apply seed data in transaction
        await prisma.$transaction(async (tx) => {
            // Clear existing data if needed (optional, based on confirm level)
            // For now, we'll upsert

            // Expertise Areas
            for (const area of seedData.expertiseAreas || []) {
                const existingArea = await tx.expertiseArea.upsert({
                    where: { slug: area.areaSlug },
                    update: { name: area.areaSlug },
                    create: { name: area.areaSlug, slug: area.areaSlug }
                });

                // Categories
                for (const cat of area.categories || []) {
                    const existingCat = await tx.treatmentCategory.upsert({
                        where: { slug: cat.slug },
                        update: { name: cat.name, expertiseAreaId: existingArea.id },
                        create: { name: cat.name, slug: cat.slug, expertiseAreaId: existingArea.id }
                    });

                    // Procedures
                    for (const method of cat.methods || []) {
                        const data = {
                            name: method.name,
                            icon: method.icon,
                            summary: method.summary,
                            why: method.why,
                            how: method.how,
                            sideEffects: method.sideEffects,
                            faq: JSON.stringify(method.faqs || []),
                            status: "PUBLISHED",
                            treatmentCategoryId: existingCat.id,
                            seoTitle: `${method.name} - Detaylı Bilgi`,
                            seoDesc: method.summary,
                            imageUrl: method.image,
                            method: method.methodType
                        };

                        await tx.procedure.upsert({
                            where: { slug: method.slug },
                            update: data,
                            create: { ...data, slug: method.slug }
                        });
                        stats.updated++;
                    }
                }
            }

            // Blog Categories
            for (const cat of seedData.blogCategories || []) {
                await tx.category.upsert({
                    where: { slug: cat.slug },
                    update: { name: cat.name },
                    create: { name: cat.name, slug: cat.slug }
                });
                stats.updated++;
            }

            // Blog Posts
            for (const post of seedData.blogPosts || []) {
                const cat = await tx.category.findUnique({ where: { slug: post.categorySlug } });
                if (cat) {
                    await tx.blogPost.upsert({
                        where: { slug: post.slug },
                        update: {
                            title: post.title,
                            excerpt: post.excerpt,
                            content: post.content,
                            coverImage: post.coverImage,
                            status: post.status,
                            categoryId: cat.id
                        },
                        create: {
                            title: post.title,
                            slug: post.slug,
                            excerpt: post.excerpt,
                            content: post.content,
                            coverImage: post.coverImage,
                            status: post.status,
                            categoryId: cat.id
                        }
                    });
                    stats.updated++;
                }
            }

            // Global FAQs
            for (const faq of seedData.globalFaqs || []) {
                await tx.fAQ.upsert({
                    where: { id: `global-${faq.question.length}` },
                    update: { question: faq.question, answer: faq.answer, isGlobal: true },
                    create: { question: faq.question, answer: faq.answer, isGlobal: true }
                });
                stats.updated++;
            }
        });

        return NextResponse.json({
            success: true,
            message: "Seed data applied successfully",
            stats
        });
    } catch (error: any) {
        console.error("Apply seed error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to apply seed data" },
            { status: 500 }
        );
    }
}