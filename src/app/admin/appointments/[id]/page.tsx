"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Clock, MessageSquare, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function AppointmentDetailPage() {
    const router = useRouter();
    const params = useParams();
    const [appointment, setAppointment] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`/api/admin/appointments/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setAppointment(data.data);
                }
            })
            .catch((err) => console.error(err));
    }, [params.id]);

    const handleStatusChange = async (isContacted: boolean) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/appointments/${params.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isContacted }),
            });

            const result = await res.json();

            if (result.success) {
                setAppointment({ ...appointment, isContacted });
                toast.success(isContacted ? "Randevu arandı olarak işaretlendi" : "Randevu bekliyor olarak işaretlendi");
            } else {
                toast.error(result.message || "Durum güncellenemedi");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    if (!appointment) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/appointments">
                        <Button variant="outline" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-4xl font-black text-white mb-2">Randevu Detayı</h1>
                        <p className="text-zinc-400">Randevu talebini görüntüleyin ve yönetin</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() => handleStatusChange(false)}
                        disabled={loading || !appointment.isContacted}
                        className="flex items-center gap-2"
                    >
                        <XCircle className="h-4 w-4" />
                        Bekliyor
                    </Button>
                    <Button
                        onClick={() => handleStatusChange(true)}
                        disabled={loading || appointment.isContacted}
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
                    >
                        <CheckCircle2 className="h-4 w-4" />
                        Arandı
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Phone className="h-5 w-5" />
                            İletişim Bilgileri
                        </CardTitle>
                        <CardDescription>Randevu talebinde bulunan kişinin bilgileri</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-bold text-zinc-400">Ad Soyad</label>
                            <p className="text-white font-bold text-lg">{appointment.name}</p>
                        </div>
                        <div>
                            <label className="text-sm font-bold text-zinc-400">Telefon</label>
                            <p className="text-white font-bold text-lg">{appointment.phone}</p>
                            <a
                                href={`tel:${appointment.phone}`}
                                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-bold mt-1"
                            >
                                <Phone className="h-3 w-3" />
                                Ara
                            </a>
                        </div>
                        <div>
                            <label className="text-sm font-bold text-zinc-400">Talep Tarihi</label>
                            <p className="text-white font-bold">
                                {new Date(appointment.createdAt).toLocaleDateString('tr-TR', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-white/5">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5" />
                            Talep Detayları
                        </CardTitle>
                        <CardDescription>Randevu talebinin içeriği</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-bold text-zinc-400">Durum</label>
                            <div className="mt-2">
                                {appointment.isContacted ? (
                                    <Badge className="bg-emerald-500/10 text-emerald-500 border-none rounded-lg px-3 py-1 font-bold flex items-center gap-1 w-fit">
                                        <CheckCircle2 className="h-3 w-3" />
                                        Arandı
                                    </Badge>
                                ) : (
                                    <Badge className="bg-amber-500/10 text-amber-500 border-none rounded-lg px-3 py-1 font-bold flex items-center gap-1 w-fit">
                                        <Clock className="h-3 w-3" />
                                        Bekliyor
                                    </Badge>
                                )}
                            </div>
                        </div>
                        {appointment.message && (
                            <div>
                                <label className="text-sm font-bold text-zinc-400">Mesaj</label>
                                <p className="text-white font-medium mt-2 p-3 bg-zinc-800 rounded-lg whitespace-pre-wrap">
                                    {appointment.message}
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-zinc-900 border-white/5">
                <CardHeader>
                    <CardTitle>Hızlı İşlemler</CardTitle>
                    <CardDescription>Randevu ile ilgili hızlı işlemler</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4">
                        <Button asChild variant="outline">
                            <a href={`tel:${appointment.phone}`}>
                                <Phone className="h-4 w-4 mr-2" />
                                Ara
                            </a>
                        </Button>
                        <Button asChild variant="outline">
                            <a href={`https://wa.me/${appointment.phone.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}