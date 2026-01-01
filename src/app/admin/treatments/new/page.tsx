"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const treatmentSchema = z.object({
    name: z.string().min(1, "Tedavi adı gerekli"),
    slug: z.string().min(1, "Slug gerekli"),
    description: z.string().optional(),
    expertiseAreaId: z.string().min(1, "Uzmanlık alanı gerekli"),
});

export default function NewTreatmentPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [expertiseAreas, setExpertiseAreas] = useState<any[]>([]);

    const form = useForm({
        resolver: zodResolver(treatmentSchema),
    });

    useEffect(() => {
        // Fetch expertise areas
        fetch("/api/admin/expertise-areas")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setExpertiseAreas(data.data);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    const onSubmit = async (data: z.infer<typeof treatmentSchema>) => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/treatments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Tedavi kategorisi oluşturuldu");
                router.push("/admin/treatments");
            } else {
                toast.error(result.message || "Tedavi oluşturulamadı");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        const slug = name
            .toLowerCase()
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        form.setValue("slug", slug);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/admin/treatments">
                    <Button variant="outline" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-4xl font-black text-white mb-2">Yeni Tedavi Kategorisi Ekle</h1>
                    <p className="text-zinc-400">Yeni bir tedavi kategorisi oluşturun</p>
                </div>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle>Tedavi Bilgileri</CardTitle>
                        <CardDescription>Tedavi kategorisinin bilgilerini girin</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Kategori Adı *</Label>
                                <Input
                                    id="name"
                                    {...form.register("name")}
                                    onChange={(e) => {
                                        form.register("name").onChange(e);
                                        handleNameChange(e);
                                    }}
                                />
                                {form.formState.errors.name && (
                                    <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="slug">Slug (URL) *</Label>
                                <Input id="slug" {...form.register("slug")} />
                                {form.formState.errors.slug && (
                                    <p className="text-sm text-red-500">{form.formState.errors.slug.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="expertiseAreaId">Uzmanlık Alanı *</Label>
                            <Select onValueChange={(value) => form.setValue("expertiseAreaId", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Uzmanlık alanı seçin" />
                                </SelectTrigger>
                                <SelectContent>
                                    {expertiseAreas.map((area) => (
                                        <SelectItem key={area.id} value={area.id}>
                                            {area.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {form.formState.errors.expertiseAreaId && (
                                <p className="text-sm text-red-500">{form.formState.errors.expertiseAreaId.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Açıklama</Label>
                            <textarea
                                id="description"
                                {...form.register("description")}
                                className="w-full min-h-[100px] rounded-md border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white"
                                placeholder="Tedavi kategorisi hakkında açıklama..."
                            />
                        </div>
                    </CardContent>
                </Card>

                <div className="flex gap-4">
                    <Button type="submit" disabled={loading}>
                        {loading ? "Kaydediliyor..." : "Kategori Oluştur"}
                    </Button>
                    <Link href="/admin/treatments">
                        <Button type="button" variant="outline">
                            İptal
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
