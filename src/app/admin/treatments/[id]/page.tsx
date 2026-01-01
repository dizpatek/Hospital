"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Trash2, Edit, Plus } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const treatmentSchema = z.object({
    name: z.string().min(1, "Tedavi adı gerekli"),
    slug: z.string().min(1, "Slug gerekli"),
    description: z.string().optional(),
});

export default function EditTreatmentPage() {
    const router = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [procedures, setProcedures] = useState<any[]>([]);

    const form = useForm({
        resolver: zodResolver(treatmentSchema),
    });

    useEffect(() => {
        // Fetch treatment data and procedures
        fetch(`/api/admin/treatments/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    form.reset(data.data);
                    setProcedures(data.data.procedures || []);
                }
            })
            .catch((err) => console.error(err));
    }, [params.id]);

    const onSubmit = async (data: z.infer<typeof treatmentSchema>) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/treatments/${params.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Tedavi güncellendi");
                router.push("/admin/treatments");
            } else {
                toast.error(result.message || "Tedavi güncellenemedi");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Bu tedavi kategorisini silmek istediğinizden emin misiniz?")) return;

        setDeleting(true);
        try {
            const res = await fetch(`/api/admin/treatments/${params.id}`, {
                method: "DELETE",
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Tedavi silindi");
                router.push("/admin/treatments");
            } else {
                toast.error(result.message || "Tedavi silinemedi");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/treatments">
                        <Button variant="outline" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-4xl font-black text-white mb-2">Tedavi Düzenle</h1>
                        <p className="text-zinc-400">Tedavi kategorisini düzenleyin</p>
                    </div>
                </div>
                <Button
                    variant="destructive"
                    onClick={handleDelete}
                    disabled={deleting}
                >
                    <Trash2 className="h-4 w-4 mr-2" />
                    {deleting ? "Siliniyor..." : "Sil"}
                </Button>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle>Tedavi Bilgileri</CardTitle>
                        <CardDescription>Tedavi kategorisinin bilgilerini düzenleyin</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Kategori Adı *</Label>
                                <Input id="name" {...form.register("name")} />
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
                        {loading ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
                    </Button>
                    <Link href="/admin/treatments">
                        <Button type="button" variant="outline">
                            İptal
                        </Button>
                    </Link>
                </div>
            </form>

            {/* Associated Procedures Section */}
            <Card className="bg-zinc-900 border-white/5">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Bağlı Prosedürler</CardTitle>
                            <CardDescription>Bu tedavi kategorisine bağlı prosedürleri yönetin</CardDescription>
                        </div>
                        <Button asChild size="sm">
                            <Link href="/admin/procedures/new">
                                <Plus className="h-4 w-4 mr-2" />
                                Yeni Prosedür
                            </Link>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    {procedures.length === 0 ? (
                        <p className="text-zinc-500 text-center py-8">Bu kategoriye bağlı prosedür bulunmuyor.</p>
                    ) : (
                        <div className="space-y-4">
                            {procedures.map((procedure) => (
                                <div key={procedure.id} className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg border border-white/5">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white">{procedure.name}</h4>
                                        <p className="text-sm text-zinc-400">{procedure.summary}</p>
                                        <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${procedure.status === 'PUBLISHED'
                                                ? 'bg-green-500/10 text-green-500'
                                                : 'bg-yellow-500/10 text-yellow-500'
                                            }`}>
                                            {procedure.status === 'PUBLISHED' ? 'Yayında' : 'Taslak'}
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button asChild variant="outline" size="sm">
                                            <Link href={`/admin/procedures/${procedure.id}`}>
                                                <Edit className="h-4 w-4 mr-2" />
                                                Düzenle
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
