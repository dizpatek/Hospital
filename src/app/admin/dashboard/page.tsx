import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    ScrollText,
    Users,
    Activity,
    Layers,
    Plus,
    ArrowUpRight,
    Search,
    MessageSquare,
    CheckCircle2,
    Clock,
    Phone,
    ChevronRight
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function DashboardPage() {
    const [procCount, blogCount, catCount, requests] = await Promise.all([
        prisma.procedure.count(),
        prisma.blogPost.count(),
        prisma.treatmentCategory.count(),
        prisma.appointmentRequest.findMany({
            take: 5,
            orderBy: { createdAt: "desc" }
        })
    ]);

    const stats = [
        { title: "Aktif Prosedür", value: procCount, icon: Activity, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { title: "Blog İçeriği", value: blogCount, icon: ScrollText, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
        { title: "Kategoriler", value: catCount, icon: Layers, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        { title: "Randevu Talebi", value: requests.length, icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    ];

    return (
        <div className="space-y-10 pb-10">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                    <h2 className="text-4xl font-black tracking-tight text-white">Yönetim Paneli</h2>
                    <p className="text-muted-foreground font-medium text-lg">Hoş geldiniz, MedDoc içerik platformunu buradan kontrol edin.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="rounded-xl border-border/50 font-bold hidden sm:flex">
                        Raporlar
                    </Button>
                    <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-black px-6">
                        <Plus className="mr-2 h-5 w-5" /> Hızlı Ekle
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title} className={`border ${stat.border} shadow-2xl bg-zinc-900/50 backdrop-blur-xl rounded-[2.5rem] overflow-hidden group hover:scale-[1.02] transition-all duration-300`}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">{stat.title}</CardTitle>
                            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} ring-1 ring-white/5`}>
                                <stat.icon className="h-5 w-5" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-5xl font-black text-white mb-2 tabular-nums">{stat.value}</div>
                            <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-emerald-400">
                                <ArrowUpRight className="mr-1 h-3 w-3" />
                                <span>Canlı Veri</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
                {/* Recent Items / Search Placeholder */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Recent Requests Table */}
                    <Card className="border border-border/50 shadow-2xl bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] overflow-hidden">
                        <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl font-black">Son Randevu Talepleri</CardTitle>
                                <CardDescription className="font-medium">Web sitesinden gelen son 5 bildirim.</CardDescription>
                            </div>
                            <Button variant="ghost" className="rounded-xl font-bold text-primary">Tümünü Gör</Button>
                        </CardHeader>
                        <CardContent className="p-0">
                            {requests.length > 0 ? (
                                <div className="divide-y divide-border/50">
                                    {requests.map((req: any) => (
                                        <div key={req.id} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                                    <Users className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <p className="font-black text-white">{req.name}</p>
                                                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium mt-1">
                                                        <span className="flex items-center"><Phone className="h-3 w-3 mr-1" /> {req.phone}</span>
                                                        <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {new Date(req.createdAt).toLocaleDateString('tr-TR')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {req.isContacted ? (
                                                    <Badge className="bg-emerald-500/10 text-emerald-500 border-none rounded-lg px-3 py-1 font-bold">Arandı</Badge>
                                                ) : (
                                                    <Badge className="bg-primary/10 text-primary border-none rounded-lg px-3 py-1 font-bold">Bekliyor</Badge>
                                                )}
                                                <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-20 text-center space-y-4">
                                    <div className="h-20 w-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                                        <MessageSquare className="h-10 w-10" />
                                    </div>
                                    <p className="text-muted-foreground font-bold">Henüz randevu talebi bulunmuyor.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Quick Search */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative flex items-center">
                            <Search className="absolute left-6 h-6 w-6 text-muted-foreground" />
                            <input
                                className="w-full h-20 bg-zinc-900/60 border border-border/50 rounded-[2rem] pl-16 pr-8 text-lg font-bold text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all backdrop-blur-xl"
                                placeholder="Prosedür veya blog içeriği ara..."
                            />
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Quick Launch */}
                    <Card className="border border-border/50 shadow-2xl bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] overflow-hidden">
                        <CardHeader className="p-8">
                            <CardTitle className="text-xl font-black">Hızlı Başlat</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 pt-0 space-y-4">
                            <Button asChild variant="secondary" className="w-full h-16 justify-start px-6 rounded-2xl font-black text-white hover:bg-zinc-800 border border-white/5">
                                <Link href="/admin/procedures/new">
                                    <Activity className="mr-3 h-5 w-5 text-blue-500" /> Yeni Prosedür
                                </Link>
                            </Button>
                            <Button asChild variant="secondary" className="w-full h-16 justify-start px-6 rounded-2xl font-black text-white hover:bg-zinc-800 border border-white/5">
                                <Link href="/admin/blog/new">
                                    <ScrollText className="mr-3 h-5 w-5 text-amber-500" /> Yeni Blog Yazısı
                                </Link>
                            </Button>
                            <Button asChild variant="secondary" className="w-full h-16 justify-start px-6 rounded-2xl font-black text-white hover:bg-zinc-800 border border-white/5">
                                <Link href="/admin/treatments">
                                    <Layers className="mr-3 h-5 w-5 text-emerald-500" /> Kategori Düzenle
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* System Health */}
                    <Card className="border border-border/50 shadow-2xl bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-700">
                            <Activity className="h-24 w-24 text-primary" />
                        </div>
                        <CardHeader className="p-8">
                            <CardTitle className="text-xl font-black">Sistem Sağlığı</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 pt-0 space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Veritabanı
                                    </span>
                                    <span className="text-xs font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">STABİL</span>
                                </div>
                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[98%] bg-emerald-500"></div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                                        <Search className="h-4 w-4 text-blue-500" /> SEO Optimizasyonu
                                    </span>
                                    <span className="text-xs font-black text-blue-500 bg-blue-500/10 px-2 py-1 rounded">YÜKSEK</span>
                                </div>
                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-blue-500"></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
