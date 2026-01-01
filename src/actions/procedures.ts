"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { z } from "zod";

export const procedureSchema = z.object({
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

// FormData type for server actions
// This should be the actual FormData object, not the parsed data
// The inferred type is for the parsed result
export type ProcedureFormData = z.infer<typeof procedureSchema>;

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
    formData: FormData | Record<string, any>
): Promise<ProcedureFormState> {
    // Helper function to get values from either FormData or regular object
    const getValue = (key: string): string | null => {
        if (formData instanceof FormData) {
            return formData.get(key) as string || null;
        }
        return (formData as Record<string, any>)[key] || null;
    };
    
    const validatedFields = procedureSchema.safeParse({
        name: getValue("name"),
        slug: getValue("slug"),
        icon: getValue("icon"),
        summary: getValue("summary"),
        why: getValue("why"),
        how: getValue("how"),
        sideEffects: getValue("sideEffects"),
        faq: getValue("faq"),
        treatmentCategoryId: getValue("treatmentCategoryId"),
        status: getValue("status"),
        seoTitle: getValue("seoTitle"),
        seoDesc: getValue("seoDesc"),
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
    formData: FormData | Record<string, any>
): Promise<ProcedureFormState> {
    // Helper function to get values from either FormData or regular object
    const getValue = (key: string): string | null => {
        if (formData instanceof FormData) {
            return formData.get(key) as string || null;
        }
        return (formData as Record<string, any>)[key] || null;
    };
    
    const validatedFields = procedureSchema.safeParse({
        name: getValue("name"),
        slug: getValue("slug"),
        icon: getValue("icon"),
        summary: getValue("summary"),
        why: getValue("why"),
        how: getValue("how"),
        sideEffects: getValue("sideEffects"),
        faq: getValue("faq"),
        treatmentCategoryId: getValue("treatmentCategoryId"),
        status: getValue("status"),
        seoTitle: getValue("seoTitle"),
        seoDesc: getValue("seoDesc"),
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

