import { prisma } from "@/lib/prisma";
import { ProcedureForm } from "@/components/admin/procedures/procedure-form";

export default async function NewProcedurePage() {
    const categories = await prisma.treatmentCategory.findMany({
        orderBy: { name: "asc" },
    });

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">New Procedure</h2>
                <p className="text-muted-foreground">
                    Create a new medical procedure entry.
                </p>
            </div>
            <div className="max-w-2xl">
                <ProcedureForm categories={categories} />
            </div>
        </div>
    );
}
