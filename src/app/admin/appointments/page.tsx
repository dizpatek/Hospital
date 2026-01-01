import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Clock, CheckCircle2, XCircle } from "lucide-react";

export default async function AppointmentsPage() {
    const requests = await prisma.appointmentRequest.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] border border-white/5 shadow-2xl">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-primary">
                        <MessageSquare className="h-6 w-6" />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">Randevu Yönetimi</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-white">Randevu Talepleri</h2>
                    <p className="text-muted-foreground font-medium text-lg max-w-2xl">
                        Web sitesinden gelen randevu taleplerini görüntüleyin ve yönetin.
                    </p>
                </div>
            </div>

            <Card className="border border-white/5 shadow-2xl bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] overflow-hidden">
                <CardContent className="p-4 sm:p-8">
                    {requests.length === 0 ? (
                        <div className="p-20 text-center space-y-4">
                            <div className="h-20 w-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                                <MessageSquare className="h-10 w-10" />
                            </div>
                            <p className="text-muted-foreground font-bold">Henüz randevu talebi bulunmuyor.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {requests.map((req) => (
                                <div key={req.id} className="p-6 bg-zinc-800/50 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-2xl bg-zinc-700 flex items-center justify-center text-zinc-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                                <Phone className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-black text-white text-lg">{req.name}</h3>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                                    <span className="flex items-center">
                                                        <Phone className="h-3 w-3 mr-1" />
                                                        {req.phone}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <Clock className="h-3 w-3 mr-1" />
                                                        {new Date(req.createdAt).toLocaleDateString('tr-TR', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </span>
                                                </div>
                                                {req.message && (
                                                    <p className="text-sm text-zinc-400 mt-2 max-w-md truncate">{req.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {req.isContacted ? (
                                                <Badge className="bg-emerald-500/10 text-emerald-500 border-none rounded-lg px-3 py-1 font-bold flex items-center gap-1">
                                                    <CheckCircle2 className="h-3 w-3" />
                                                    Arandı
                                                </Badge>
                                            ) : (
                                                <Badge className="bg-amber-500/10 text-amber-500 border-none rounded-lg px-3 py-1 font-bold flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    Bekliyor
                                                </Badge>
                                            )}
                                            <Button asChild variant="outline" size="sm">
                                                <Link href={`/admin/appointments/${req.id}`}>
                                                    Düzenle
                                                </Link>
                                            </Button>
                                        </div>
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