import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/admin/procedures/columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default async function ProceduresPage() {
    const procedures = await prisma.procedure.findMany({
        orderBy: { updatedAt: "desc" },
    });

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] border border-white/5 shadow-2xl">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-primary">
                        <Layout className="h-6 w-6" />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">İçerik Yönetimi</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-white">Prosedürler</h2>
                    <p className="text-muted-foreground font-medium text-lg max-w-2xl">
                        Tüm cerrahi teknikleri, tedavi metotlarını ve medikal içeriklerinizi buradan yayınlayın veya güncelleyin.
                    </p>
                </div>
                <Button asChild className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-95">
                    <Link href="/admin/procedures/new">
                        <Plus className="mr-3 h-6 w-6" /> Yeni İşlem Ekle
                    </Link>
                </Button>
            </div>

            <Card className="border border-white/5 shadow-2xl bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] overflow-hidden">
                <CardContent className="p-4 sm:p-8">
                    <DataTable columns={columns} data={procedures} />
                </CardContent>
            </Card>
        </div>
    );
}
