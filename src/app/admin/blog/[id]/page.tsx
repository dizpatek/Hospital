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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Trash2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const blogSchema = z.object({
    title: z.string().min(1, "Başlık gerekli"),
    slug: z.string().min(1, "Slug gerekli"),
    excerpt: z.string().min(1, "Özet gerekli"),
    content: z.string().min(1, "İçerik gerekli"),
    coverImage: z.string().url("Geçerli bir URL girin").optional().or(z.literal("")),
    categoryId: z.string().min(1, "Kategori gerekli"),
    status: z.string().default("DRAFT"),
});

export default function EditBlogPostPage() {
    const router = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [categories, setCategories] = useState<any[]>([]);

    const form = useForm({
        resolver: zodResolver(blogSchema),
    });

    useEffect(() => {
        // Fetch categories
        fetch("/api/admin/blog-categories")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setCategories(data.data);
                }
            });

        // Fetch blog post
        fetch(`/api/admin/blog/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    form.reset(data.data);
                }
            })
            .catch((err) => console.error(err));
    }, [params.id]);

    const onSubmit = async (data: z.infer<typeof blogSchema>) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/blog/${params.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Blog yazısı güncellendi");
                router.push("/admin/blog");
            } else {
                toast.error(result.message || "Blog yazısı güncellenemedi");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Bu blog yazısını silmek istediğinizden emin misiniz?")) return;

        setDeleting(true);
        try {
            const res = await fetch(`/api/admin/blog/${params.id}`, {
                method: "DELETE",
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Blog yazısı silindi");
                router.push("/admin/blog");
            } else {
                toast.error(result.message || "Blog yazısı silinemedi");
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
                    <Link href="/admin/blog">
                        <Button variant="outline" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-4xl font-black text-white mb-2">Blog Yazısı Düzenle</h1>
                        <p className="text-zinc-400">Blog yazısını düzenleyin</p>
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
                        <CardTitle>Temel Bilgiler</CardTitle>
                        <CardDescription>Blog yazısının temel bilgilerini düzenleyin</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="title">Başlık *</Label>
                                <Input id="title" {...form.register("title")} />
                                {form.formState.errors.title && (
                                    <p className="text-sm text-red-500">{form.formState.errors.title.message}</p>
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
                            <Label htmlFor="categoryId">Kategori *</Label>
                            <Select onValueChange={(value) => form.setValue("categoryId", value)} defaultValue={form.watch("categoryId")}>
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
                        <div className="space-y-2">
                            <Label htmlFor="coverImage">Kapak Görseli URL</Label>
                            <Input id="coverImage" type="url" {...form.register("coverImage")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="excerpt">Özet *</Label>
                            <textarea
                                id="excerpt"
                                {...form.register("excerpt")}
                                className="w-full min-h-[80px] rounded-md border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white"
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle>İçerik</CardTitle>
                        <CardDescription>Blog yazısının tam içeriği</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="content">İçerik *</Label>
                            <textarea
                                id="content"
                                {...form.register("content")}
                                className="w-full min-h-[300px] rounded-md border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white font-mono"
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle>Yayın Ayarları</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="status">Durum</Label>
                            <Select onValueChange={(value) => form.setValue("status", value)} defaultValue={form.watch("status")}>
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
                        {loading ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
                    </Button>
                    <Link href="/admin/blog">
                        <Button type="button" variant="outline">
                            İptal
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
