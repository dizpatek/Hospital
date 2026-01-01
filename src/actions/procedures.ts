"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { z } from "zod";

const procedureSchema = z.object({
    name: z.string().min(1, "Name is required"),
    slug: z.string().min(1, "Slug is required"),
    icon: z.string().min(1, "Icon is required"),
    summary: z.string().min(1, "Summary is required"),
    why: z.string().optional(),
    how: z.string().optional(),
    sideEffects: z.string().optional(),
    faq: z.string().optional(),
    treatmentCategoryId: z.string().min(1, "Treatment Category is required"),
    status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
});

export type ProcedureFormState = {
    errors?: {
        name?: string[];
        slug?: string[];
        icon?: string[];
        summary?: string[];
        why?: string[];
        how?: string[];
        sideEffects?: string[];
        faq?: string[];
        treatmentCategoryId?: string[];
        status?: string[];
        seoTitle?: string[];
        seoDesc?: string[];
        _form?: string[];
    };
    message?: string;
};

export async function createProcedure(
    prevState: ProcedureFormState,
    formData: FormData
): Promise<ProcedureFormState> {
    const validatedFields = procedureSchema.safeParse({
        name: formData.get("name"),
        slug: formData.get("slug"),
        icon: formData.get("icon"),
        summary: formData.get("summary"),
        why: formData.get("why"),
        how: formData.get("how"),
        sideEffects: formData.get("sideEffects"),
        faq: formData.get("faq"),
        treatmentCategoryId: formData.get("treatmentCategoryId"),
        status: formData.get("status"),
        seoTitle: formData.get("seoTitle"),
        seoDesc: formData.get("seoDesc"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Procedure.",
        };
    }

    const { name, slug, icon, summary, why, how, sideEffects, faq, treatmentCategoryId, status, seoTitle, seoDesc } = validatedFields.data;

    try {
        await prisma.procedure.create({
            data: {
                name,
                slug,
                icon,
                summary,
                why,
                how,
                sideEffects,
                faq: faq ? JSON.parse(faq) : undefined,
                treatmentCategoryId,
                status,
                seoTitle,
                seoDesc,
            },
        });
    } catch (error) {
        console.error(error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return {
                    message: 'A procedure with this slug already exists.',
                };
            }
        }
        return {
            message: "Database Error: Failed to Create Procedure.",
        };
    }

    revalidatePath("/admin/procedures");
    return {
        message: "Procedure created successfully",
    };
}

export async function updateProcedure(
    id: string,
    prevState: ProcedureFormState,
    formData: FormData
): Promise<ProcedureFormState> {
    const validatedFields = procedureSchema.safeParse({
        name: formData.get("name"),
        slug: formData.get("slug"),
        icon: formData.get("icon"),
        summary: formData.get("summary"),
        why: formData.get("why"),
        how: formData.get("how"),
        sideEffects: formData.get("sideEffects"),
        faq: formData.get("faq"),
        treatmentCategoryId: formData.get("treatmentCategoryId"),
        status: formData.get("status"),
        seoTitle: formData.get("seoTitle"),
        seoDesc: formData.get("seoDesc"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Update Procedure.",
        };
    }

    const { name, slug, icon, summary, why, how, sideEffects, faq, treatmentCategoryId, status, seoTitle, seoDesc } = validatedFields.data;

    try {
        await prisma.procedure.update({
            where: { id },
            data: {
                name,
                slug,
                icon,
                summary,
                why,
                how,
                sideEffects,
                faq: faq ? JSON.parse(faq) : undefined,
                treatmentCategoryId,
                status,
                seoTitle,
                seoDesc,
            },
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return {
                    message: 'A procedure with this slug already exists.',
                };
            }
        }
        return {
            message: "Database Error: Failed to Update Procedure.",
        };
    }

    revalidatePath("/admin/procedures");
    revalidatePath(`/admin/procedures/${id}`);

    return {
        message: "Procedure updated successfully",
    };
}

export async function deleteProcedure(id: string) {
    try {
        await prisma.procedure.delete({
            where: { id },
        });
        revalidatePath("/admin/procedures");
        return { message: "Deleted Procedure." };
    } catch (error) {
        return { message: "Database Error: Failed to Delete Procedure." };
    }
}

