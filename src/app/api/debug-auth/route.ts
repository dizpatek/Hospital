import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const adminEmail = "admin@meddoc.com";

        // Check Database Connection
        let dbStatus = "Unknown";
        let userCount = 0;
        let adminExists = false;

        try {
            userCount = await prisma.user.count();
            const admin = await prisma.user.findUnique({
                where: { email: adminEmail },
            });
            adminExists = !!admin;
            dbStatus = "Connected";
        } catch (e: any) {
            dbStatus = `Connection Failed: ${e.message}`;
        }

        // Check Environment Variables
        const envStatus = {
            NEXTAUTH_URL: process.env.NEXTAUTH_URL || "Not Set",
            NEXTAUTH_SECRET_SET: !!process.env.NEXTAUTH_SECRET,
            NODE_ENV: process.env.NODE_ENV,
            DATABASE_URL_SET: !!process.env.DATABASE_URL,
        };

        return NextResponse.json({
            timestamp: new Date().toISOString(),
            environment: envStatus,
            database: {
                status: dbStatus,
                userCount,
                adminUser: {
                    email: adminEmail,
                    exists: adminExists,
                }
            },
            message: "Please delete this route after debugging!"
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
