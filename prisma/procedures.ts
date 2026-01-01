'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const prisma = new PrismaClient()

// Zod Şeması (Form Validasyonu için)
export const procedureSchema = z.object({
    title: z.string().min(2, "Başlık en az 2 karakter olmalıdır."),
    slug: z.string().min(2, "URL (Slug) en az 2 karakter olmalıdır.").regex(/^[a-z0-9-]+$/, "Sadece küçük harf, rakam ve tire kullanılabilir."),
    icon: z.string().min(1, "Bir ikon ismi giriniz (örn: Zap)."),
    summary: z.string().min(10, "Özet en az 10 karakter olmalıdır."),
    content: z.string().min(20, "İçerik detaylı olmalıdır."),
    imageUrl: z.string().url("Geçerli bir görsel URL'si giriniz.").optional().or(z.literal('')),
})

export async function createProcedure(data: z.infer<typeof procedureSchema>) {
    try {
        // Validasyon
        const validated = procedureSchema.parse(data)

        // Veritabanına Kayıt
        await prisma.procedure.create({
            data: validated
        })

        revalidatePath('/admin/procedures') // Admin listesini yenile
        revalidatePath('/procedures')       // Müşteri listesini yenile
        return { success: true }
    } catch (error) {
        return { success: false, error: 'İşlem oluşturulurken bir hata oluştu.' }
    }
}