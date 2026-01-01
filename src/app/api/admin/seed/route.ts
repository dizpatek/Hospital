import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";
import { promises as fs } from 'fs';
import path from 'path';

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

// Helper to get default seed data
async function getDefaultSeedData() {
    try {
        const seedPath = path.join(process.cwd(), 'prisma', 'seed.js');
        const seedContent = await fs.readFile(seedPath, 'utf-8');

        // Extract the megaData from seed.js (simplified parsing)
        const megaDataMatch = seedContent.match(/const megaData = (\[[\s\S]*?\]);/);
        const blogCatsMatch = seedContent.match(/const blogCats = (\[[\s\S]*?\]);/);
        const blogPostsMatch = seedContent.match(/const blogPosts = (\[[\s\S]*?\]);/);
        const globalFaqsMatch = seedContent.match(/const globalFaqs = (\[[\s\S]*?\]);/);

        if (megaDataMatch && blogCatsMatch && blogPostsMatch && globalFaqsMatch) {
            const megaData = JSON.parse(megaDataMatch[1].replace(/\/\/.*$/gm, '').replace(/,(\s*[}\]])/g, '$1'));
            const blogCats = JSON.parse(blogCatsMatch[1]);
            const blogPosts = JSON.parse(blogPostsMatch[1]);
            const globalFaqs = JSON.parse(globalFaqsMatch[1]);

            return {
                expertiseAreas: megaData,
                blogCategories: blogCats,
                blogPosts: blogPosts,
                globalFaqs: globalFaqs
            };
        }
    } catch (error) {
        console.error('Failed to parse default seed:', error);
    }
    return null;
}

export async function GET() {
    try {
        // Verify authentication
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await jwtVerify(token, JWT_SECRET);

        // Get or create settings
        let settings = await prisma.siteSettings.findFirst();
        console.log('settings:', settings, 'has seedData:', settings && 'seedData' in settings);

        let seedData;
        if (settings?.seedData) {
            seedData = JSON.parse(settings.seedData);
        } else {
            seedData = await getDefaultSeedData();
            if (!seedData) {
                return NextResponse.json({ success: false, message: "Failed to load seed data" }, { status: 500 });
            }
        }

        return NextResponse.json({
            success: true,
            data: {
                seedData: JSON.stringify(seedData, null, 2),
                version: settings?.seedVersion || 1
            }
        });
    } catch (error: any) {
        console.error("Get seed error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to retrieve seed data" },
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

        const { seedData } = await req.json();

        // Validate JSON
        try {
            JSON.parse(seedData);
        } catch (e) {
            return NextResponse.json({ success: false, message: "Invalid JSON format" }, { status: 400 });
        }

        // Get or create settings
        let settings = await prisma.siteSettings.findFirst();

        if (!settings) {
            settings = await prisma.siteSettings.create({
                data: {
                    seedData,
                    seedVersion: 1,
                },
            });
        } else {
            settings = await prisma.siteSettings.update({
                where: { id: settings.id },
                data: {
                    seedData,
                    seedVersion: (settings.seedVersion || 1) + 1,
                },
            });
        }

        return NextResponse.json({
            success: true,
            message: "Seed data saved successfully",
            version: settings.seedVersion
        });
    } catch (error: any) {
        console.error("Save seed error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to save seed data" },
            { status: 500 }
        );
    }
}