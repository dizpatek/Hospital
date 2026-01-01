import { prisma } from "@/lib/prisma";
import { ProcedureForm } from "@/components/admin/procedures/procedure-form";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function EditProcedurePage({ params }: PageProps) {
    const { id } = await params;

    const [procedure, categories] = await Promise.all([
        prisma.procedure.findUnique({ where: { id } }),
        prisma.treatmentCategory.findMany({ orderBy: { name: "asc" } }),
    ]);

    if (!procedure) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit Procedure</h2>
                <p className="text-muted-foreground">
                    Update procedure details and status.
                </p>
            </div>
            <div className="max-w-2xl">
                <ProcedureForm procedure={procedure} categories={categories} />
            </div>
        </div>
    );
}
