"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const AppointmentSchema = z.object({
    fullName: z.string().min(2, "Lütfen tam adınızı giriniz"),
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
    procedureId: z.string().optional(),
    message: z.string().optional(),
    preferredDate: z.string().optional(),
});

export async function createAppointmentRequest(data: z.infer<typeof AppointmentSchema>) {
    try {
        const validatedData = AppointmentSchema.parse(data);

        await prisma.appointmentRequest.create({
            data: {
                fullName: validatedData.fullName,
                email: validatedData.email,
                phone: validatedData.phone,
                procedureId: validatedData.procedureId || null,
                message: validatedData.message || null,
                preferredDate: validatedData.preferredDate ? new Date(validatedData.preferredDate) : null,
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
