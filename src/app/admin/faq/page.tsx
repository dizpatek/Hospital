import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default async function AdminFAQPage() {
    const faqs = await prisma.fAQ.findMany({
        orderBy: { createdAt: "desc" },
    });

    // Define columns manually here for simplicity or use a separate file
    const columns = [
        { header: "Soru", accessorKey: "question" },
        {
            header: "Tür", accessorKey: "isGlobal", cell: ({ row }: any) => (
                row.getValue("isGlobal") ? "Genel" : "Özel"
            )
        },
        {
            header: "Tarih", accessorKey: "createdAt", cell: ({ row }: any) => (
                new Date(row.getValue("createdAt")).toLocaleDateString('tr-TR')
            )
        },
    ];

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] border border-white/5 shadow-2xl">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-primary">
                        <HelpCircle className="h-6 w-6" />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">Destek Yönetimi</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-white">Sıkça Sorulan Sorular</h2>
                    <p className="text-muted-foreground font-medium text-lg max-w-2xl">
                        Genel site sorularını ve bilgilendirme başlıklarını buradan yönetin.
                    </p>
                </div>
                <Button asChild className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-95">
                    <Link href="/admin/faq/new">
                        <Plus className="mr-3 h-6 w-6" /> Yeni Soru Ekle
                    </Link>
                </Button>
            </div>

            <Card className="border border-white/5 shadow-2xl bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] overflow-hidden">
                <CardContent className="p-4 sm:p-8">
                    <p className="text-zinc-500 mb-8 font-medium italic">Not: Prosedürlere özel sorular, ilgili prosedürün düzenleme sayfasından yönetilmektedir.</p>
                    {/* Using a simplified table view if DataTable columns are complex */}
                    <div className="rounded-2xl border border-white/5 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                                <tr>
                                    <th className="px-6 py-4">Soru</th>
                                    <th className="px-6 py-4">Kategori</th>
                                    <th className="px-6 py-4">Durum</th>
                                    <th className="px-6 py-4 text-right">İşlem</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {faqs.map((faq) => (
                                    <tr key={faq.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-6 py-4 font-bold text-white">{faq.question}</td>
                                        <td className="px-6 py-4 text-sm text-zinc-400">{faq.isGlobal ? "Genel FAQ" : "Özel"}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black rounded-lg">AKTİF</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button asChild variant="ghost" size="sm" className="text-primary font-bold hover:bg-primary/10">
                                                <Link href={`/admin/faq/${faq.id}`}>Düzenle</Link>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
