"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const faqSchema = z.object({
    question: z.string().min(1, "Soru gerekli"),
    answer: z.string().min(1, "Cevap gerekli"),
    isGlobal: z.boolean().default(true),
});

export default function NewFAQPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isGlobal, setIsGlobal] = useState(true);

    const form = useForm({
        resolver: zodResolver(faqSchema),
        defaultValues: {
            isGlobal: true,
        },
    });

    const onSubmit = async (data: z.infer<typeof faqSchema>) => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/faq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Soru eklendi");
                router.push("/admin/faq");
            } else {
                toast.error(result.message || "Soru eklenemedi");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/admin/faq">
                    <Button variant="outline" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-4xl font-black text-white mb-2">Yeni Soru Ekle</h1>
                    <p className="text-zinc-400">Sıkça sorulan sorulara yeni bir soru ekleyin</p>
                </div>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle>Soru Bilgileri</CardTitle>
                        <CardDescription>Soru ve cevap bilgilerini girin</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="question">Soru *</Label>
                            <Input
                                id="question"
                                {...form.register("question")}
                                placeholder="Örn: Randevu nasıl alınır?"
                            />
                            {form.formState.errors.question && (
                                <p className="text-sm text-red-500">{form.formState.errors.question.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="answer">Cevap *</Label>
                            <textarea
                                id="answer"
                                {...form.register("answer")}
                                className="w-full min-h-[150px] rounded-md border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white"
                                placeholder="Sorunun detaylı cevabı..."
                            />
                            {form.formState.errors.answer && (
                                <p className="text-sm text-red-500">{form.formState.errors.answer.message}</p>
                            )}
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="isGlobal"
                                checked={isGlobal}
                                onChange={(e) => {
                                    setIsGlobal(e.target.checked);
                                    form.setValue("isGlobal", e.target.checked);
                                }}
                                className="w-4 h-4 rounded border-white/10 bg-zinc-800"
                            />
                            <Label htmlFor="isGlobal" className="cursor-pointer">
                                Genel FAQ (Site genelinde göster)
                            </Label>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex gap-4">
                    <Button type="submit" disabled={loading}>
                        {loading ? "Kaydediliyor..." : "Soru Ekle"}
                    </Button>
                    <Link href="/admin/faq">
                        <Button type="button" variant="outline">
                            İptal
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
