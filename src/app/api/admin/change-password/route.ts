import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

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

        const { payload } = await jwtVerify(token, JWT_SECRET);
        const userId = payload.userId as string;

        // Get request body
        const { currentPassword, newPassword } = await req.json();

        if (!currentPassword || !newPassword) {
            return NextResponse.json(
                { success: false, message: "Tüm alanları doldurun" },
                { status: 400 }
            );
        }

        // Get user
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user || !user.password) {
            return NextResponse.json(
                { success: false, message: "Kullanıcı bulunamadı" },
                { status: 404 }
            );
        }

        // Verify current password
        const isValid = await bcrypt.compare(currentPassword, user.password);

        if (!isValid) {
            return NextResponse.json(
                { success: false, message: "Mevcut şifre yanlış" },
                { status: 401 }
            );
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        // Update password
        await prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });

        return NextResponse.json({
            success: true,
            message: "Şifre başarıyla değiştirildi",
        });
    } catch (error: any) {
        console.error("Change password error:", error);
        return NextResponse.json(
            { success: false, message: "Bir hata oluştu" },
            { status: 500 }
        );
    }
}
