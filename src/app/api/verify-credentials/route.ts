import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
        }

        // 1. Check DB Connection
        try {
            await prisma.$queryRaw`SELECT 1`;
        } catch (dbError: any) {
            return NextResponse.json({ success: false, message: "Database Connection Failed: " + dbError.message }, { status: 500 });
        }

        // 2. Find User
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({ success: false, message: "User not found in DB" }, { status: 404 });
        }

        // 3. Check Password
        if (!user.password) {
            return NextResponse.json({ success: false, message: "User has no password set" }, { status: 400 });
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json({ success: false, message: "Invalid Password" }, { status: 401 });
        }

        return NextResponse.json({
            success: true,
            message: "Credentials Validated Successfully via Direct DB Check",
            user: { id: user.id, email: user.email, role: user.role }
        });

    } catch (error: any) {
        return NextResponse.json({ success: false, message: "Server Error: " + error.message }, { status: 500 });
    }
}
