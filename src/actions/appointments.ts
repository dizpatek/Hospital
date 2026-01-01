"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const AppointmentSchema = z.object({
    name: z.string().min(2, "Lütfen adınızı giriniz"),
    phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
    message: z.string().optional(),
});

export async function createAppointmentRequest(data: z.infer<typeof AppointmentSchema>) {
    try {
        const validatedData = AppointmentSchema.parse(data);

        await prisma.appointmentRequest.create({
            data: {
                name: validatedData.name,
                phone: validatedData.phone,
                message: validatedData.message || null,
            },
        });

        return { success: true, message: "Randevu talebiniz başarıyla alınmıştır. En kısa sürede size dönüş yapacağız." };
    } catch (error) {
        console.error("Appointment Request Error:", error);
        if (error instanceof z.ZodError) {
            return { success: false, message: error.issues[0].message };
        }
        return { success: false, message: "Bir hata oluştu. Lütfen tekrar deneyiniz." };
    }
}
