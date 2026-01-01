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

const procedureSchema = z.object({
    name: z.string().min(1, "Prosedür adı gerekli"),
    slug: z.string().min(1, "Slug gerekli"),
    icon: z.string().min(1, "İkon gerekli"),
    summary: z.string().min(1, "Özet gerekli"),
    why: z.string().optional(),
    how: z.string().optional(),
    method: z.string().optional(),
    sideEffects: z.string().optional(),
    faq: z.string().optional(),
    treatmentCategoryId: z.string().optional(),
    imageUrl: z.string().url("Geçerli bir URL girin").optional().or(z.literal("")),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
    status: z.string().default("DRAFT"),
});

export default function NewProcedurePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<any[]>([]);

    const form = useForm({
        resolver: zodResolver(procedureSchema),
        defaultValues: {
            status: "DRAFT",
            icon: "Stethoscope",
        },
    });

    useEffect(() => {
        // Fetch categories
        fetch("/api/admin/categories")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setCategories(data.data);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    const onSubmit = async (data: z.infer<typeof procedureSchema>) => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/procedures", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Prosedür oluşturuldu");
                router.push("/admin/procedures");
            } else {
                toast.error(result.message || "Prosedür oluşturulamadı");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    // Auto-generate slug from name
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
                <Link href="/admin/procedures">
                    <Button variant="outline" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-4xl font-black text-white mb-2">Yeni Prosedür Ekle</h1>
                    <p className="text-zinc-400">Yeni bir tedavi prosedürü oluşturun</p>
                </div>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle>Temel Bilgiler</CardTitle>
                        <CardDescription>Prosedürün temel bilgilerini girin</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Prosedür Adı *</Label>
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
                            <div className="space-y-2">
                                <Label htmlFor="icon">İkon *</Label>
                                <Input id="icon" {...form.register("icon")} placeholder="Stethoscope" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="treatmentCategoryId">Kategori</Label>
                                <Select onValueChange={(value) => form.setValue("treatmentCategoryId", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Kategori seçin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((cat) => (
                                            <SelectItem key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="imageUrl">Görsel URL</Label>
                            <Input id="imageUrl" type="url" {...form.register("imageUrl")} placeholder="https://..." />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="summary">Özet *</Label>
                            <Input id="summary" {...form.register("summary")} />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle>Detaylı Bilgiler</CardTitle>
                        <CardDescription>Prosedür hakkında detaylı açıklamalar</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="why">Neden Yapılır?</Label>
                            <textarea
                                id="why"
                                {...form.register("why")}
                                className="w-full min-h-[100px] rounded-md border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white"
                                placeholder="Bu prosedürün yapılma nedenleri..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="how">Nasıl Yapılır?</Label>
                            <textarea
                                id="how"
                                {...form.register("how")}
                                className="w-full min-h-[100px] rounded-md border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white"
                                placeholder="Prosedürün yapılış şekli..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="method">Yöntem</Label>
                            <textarea
                                id="method"
                                {...form.register("method")}
                                className="w-full min-h-[100px] rounded-md border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white"
                                placeholder="Kullanılan yöntem ve teknikler..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sideEffects">Yan Etkiler</Label>
                            <textarea
                                id="sideEffects"
                                {...form.register("sideEffects")}
                                className="w-full min-h-[100px] rounded-md border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white"
                                placeholder="Olası yan etkiler..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="faq">Sıkça Sorulan Sorular</Label>
                            <textarea
                                id="faq"
                                {...form.register("faq")}
                                className="w-full min-h-[100px] rounded-md border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white"
                                placeholder="SSS (JSON formatında)..."
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle>SEO Ayarları</CardTitle>
                        <CardDescription>Arama motoru optimizasyonu</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="seoTitle">SEO Başlık</Label>
                            <Input id="seoTitle" {...form.register("seoTitle")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="seoDesc">SEO Açıklama</Label>
                            <Input id="seoDesc" {...form.register("seoDesc")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="status">Durum</Label>
                            <Select
                                defaultValue="DRAFT"
                                onValueChange={(value) => form.setValue("status", value)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="DRAFT">Taslak</SelectItem>
                                    <SelectItem value="PUBLISHED">Yayında</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex gap-4">
                    <Button type="submit" disabled={loading}>
                        {loading ? "Kaydediliyor..." : "Prosedür Oluştur"}
                    </Button>
                    <Link href="/admin/procedures">
                        <Button type="button" variant="outline">
                            İptal
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
