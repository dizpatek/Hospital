'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const prisma = new PrismaClient()

// Zod Şeması (Form Validasyonu için)
export const procedureSchema = z.object({
    name: z.string().min(2, "Name is required"),
    slug: z.string().min(2, "Slug is required").regex(/^[a-z0-9-]+$/, "Only lowercase letters, numbers and dashes allowed"),
    icon: z.string().min(1, "Icon is required"),
    summary: z.string().min(10, "Summary is required"),
    why: z.string().optional(),
    how: z.string().optional(),
    sideEffects: z.string().optional(),
    faq: z.string().optional(),
    treatmentCategoryId: z.string().min(1, "Treatment Category is required"),
    status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
})

export async function createProcedure(data: z.infer<typeof procedureSchema>) {
    try {
        // Validasyon
        const validated = procedureSchema.parse(data)

        // Veritabanına Kayıt
        await prisma.procedure.create({
            data: {
                name: validated.name,
                slug: validated.slug,
                icon: validated.icon,
                summary: validated.summary,
                why: validated.why,
                how: validated.how,
                sideEffects: validated.sideEffects,
                faq: validated.faq ? JSON.parse(validated.faq) : undefined,
                treatmentCategoryId: validated.treatmentCategoryId,
                status: validated.status,
                seoTitle: validated.seoTitle,
                seoDesc: validated.seoDesc,
            }
        })

        revalidatePath('/admin/procedures') // Admin listesini yenile
        revalidatePath('/procedures')       // Müşteri listesini yenile
        return { success: true }
    } catch (error) {
        return { success: false, error: 'İşlem oluşturulurken bir hata oluştu.' }
    }
}