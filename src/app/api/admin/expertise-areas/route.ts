import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const areas = await prisma.expertiseArea.findMany({
            orderBy: {
                name: "asc",
            },
        });

        return NextResponse.json({ success: true, data: areas });
    } catch (error: any) {
        console.error("Get expertise areas error:", error);
        return NextResponse.json(
            { success: false, message: "Uzmanlık alanları alınamadı" },
            { status: 500 }
        );
    }
}
