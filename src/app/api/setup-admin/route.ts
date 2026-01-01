import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";

export async function GET() {
    try {
        const email = "admin@meddoc.com";
        const password = "adminpassword123";

        // Check if admin already exists
        const existingAdmin = await prisma.user.findUnique({
            where: { email },
        });

        if (existingAdmin) {
            // If exists but maybe wrong password, update it properly
            const hashedPassword = await bcrypt.hash(password, 12);
            await prisma.user.update({
                where: { email },
                data: {
                    password: hashedPassword,
                    role: "ADMIN" as Role, // Force role update
                }
            });

            return NextResponse.json({
                message: "Admin user already exists. Password and Role reset to defaults.",
                email,
                password,
                status: "Updated"
            });
        }

        // Create new admin
        const hashedPassword = await bcrypt.hash(password, 12);

        const newAdmin = await prisma.user.create({
            data: {
                email,
                name: "Admin User",
                password: hashedPassword,
                role: "ADMIN" as Role,
            },
        });

        return NextResponse.json({
            message: "Admin user created successfully!",
            email,
            password,
            status: "Created",
            id: newAdmin.id
        });

    } catch (error: any) {
        console.error("Setup Admin Error:", error);
        return NextResponse.json({
            error: "Failed to create admin user",
            details: error.message
        }, { status: 500 });
    }
}
