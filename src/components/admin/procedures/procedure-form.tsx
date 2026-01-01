"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createProcedure, updateProcedure, ProcedureFormState } from "@/actions/procedures";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Procedure, TreatmentCategory } from "@prisma/client";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Define a proper type for the action function
type ActionFunction = (prevState: ProcedureFormState, formData: FormData) => Promise<ProcedureFormState>;

interface ProcedureFormProps {
    procedure?: Procedure;
    categories: TreatmentCategory[];
}

function SubmitButton({ isEditing }: { isEditing: boolean }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Saving..." : isEditing ? "Update Procedure" : "Create Procedure"}
        </Button>
    );
}

export function ProcedureForm({ procedure, categories }: ProcedureFormProps) {
    const router = useRouter();

    // Wrap updateProcedure to match the signature required by useFormState
    const updateAction: ActionFunction = (state, formData) =>
        updateProcedure(procedure!.id, state, formData);

    const initialADtate: ProcedureFormState = { message: "", errors: {} };

    const [state, dispatch] = useFormState<ProcedureFormState, FormData>(
        procedure ? updateAction : createProcedure,
        initialADtate
    );

    useEffect(() => {
        if (state.message) {
            if (state.message.includes("success")) {
                toast.success(state.message);
                // Optionally redirect based on logic, but server action revalidates
                if (!procedure) {
                    // Reset form or redirect to list
                    router.push("/admin/procedures");
                }
            } else {
                toast.error(state.message);
            }
        }
    }, [state, procedure, router]);

    return (
        <form action={dispatch} className="space-y-8">
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            defaultValue={procedure?.name}
                            placeholder="e.g. Prostate Surgery"
                            required
                        />
                        {state.errors?.name && (
                            <p className="text-sm text-red-500">{state.errors.name}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                            id="slug"
                            name="slug"
                            defaultValue={procedure?.slug}
                            placeholder="e.g. prostate-surgery"
                            required
                        />
                        {state.errors?.slug && (
                            <p className="text-sm text-red-500">{state.errors.slug}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="treatmentCategoryId">Treatment Category</Label>
                    <Select name="treatmentCategoryId" defaultValue={procedure?.treatmentCategoryId || ""}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id}>
                                    {cat.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {state.errors?.treatmentCategoryId && (
                        <p className="text-sm text-red-500">{state.errors.treatmentCategoryId}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="summary">Summary</Label>
                    <Textarea
                        id="summary"
                        name="summary"
                        defaultValue={procedure?.summary || ""}
                        placeholder="Brief summary of the procedure..."
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="icon">Icon</Label>
                    <Input
                        id="icon"
                        name="icon"
                        defaultValue={procedure?.icon || ""}
                        placeholder="e.g. Zap"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="why">Why</Label>
                    <Textarea
                        id="why"
                        name="why"
                        defaultValue={procedure?.why || ""}
                        placeholder="Why this procedure..."
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="how">How</Label>
                    <Textarea
                        id="how"
                        name="how"
                        defaultValue={procedure?.how || ""}
                        placeholder="How the procedure works..."
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="sideEffects">Side Effects</Label>
                    <Textarea
                        id="sideEffects"
                        name="sideEffects"
                        defaultValue={procedure?.sideEffects || ""}
                        placeholder="Potential side effects..."
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="faq">FAQ (JSON format)</Label>
                    <Textarea
                        id="faq"
                        name="faq"
                        defaultValue={procedure?.faq || ""}
                        placeholder='{"question": "answer"}'
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="seoTitle">SEO Title</Label>
                    <Input
                        id="seoTitle"
                        name="seoTitle"
                        defaultValue={procedure?.seoTitle || ""}
                        placeholder="SEO Title"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="seoDesc">SEO Description</Label>
                    <Textarea
                        id="seoDesc"
                        name="seoDesc"
                        defaultValue={procedure?.seoDesc || ""}
                        placeholder="SEO Description"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select name="status" defaultValue={procedure?.status || "DRAFT"}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="DRAFT">Draft</SelectItem>
                            <SelectItem value="PUBLISHED">Published</SelectItem>
                            <SelectItem value="ARCHIVED">Archived</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex justify-end">
                <SubmitButton isEditing={!!procedure} />
            </div>
        </form>
    );
}
