import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = NextResponse.json({
            success: true,
            message: "Çıkış yapıldı",
        });

        // Delete the auth token cookie
        response.cookies.delete("auth-token");

        return response;
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Bir hata oluştu" },
            { status: 500 }
        );
    }
}
