import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "Tedavi Yönetimi | Admin",
    description: "Tedavi kategorileri ve prosedürleri yönetebileceğiniz admin sayfası.",
};

export default async function TreatmentsAdminPage() {
    const categories = await prisma.treatmentCategory.findMany({
        include: {
            procedures: true,
            expertiseArea: true
        },
        orderBy: { name: "asc" },
    });

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] border border-white/5 shadow-2xl">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-primary">
                        <Layers className="h-6 w-6" />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">Tedavi Yönetimi</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-white">Tedavi Kategorileri</h2>
                    <p className="text-muted-foreground font-medium text-lg max-w-2xl">
                        Tedavi kategorilerini ve ilişkili prosedürleri yönetin.
                    </p>
                </div>
                <Button asChild className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-95">
                    <Link href="/admin/treatments/new">
                        <Plus className="mr-3 h-6 w-6" /> Yeni Kategori Ekle
                    </Link>
                </Button>
            </div>

            {categories.length === 0 ? (
                <Card className="border border-white/5 shadow-2xl bg-zinc-900/40 backdrop-blur-xl rounded-[3rem]">
                    <CardContent className="p-20 text-center">
                        <p className="text-zinc-500 text-lg">Henüz tedavi kategorisi eklenmemiş.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <Card key={cat.id} className="bg-zinc-900/40 border-white/5 hover:border-primary/50 transition-all group">
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-black text-white group-hover:text-primary transition-colors">
                                            {cat.name}
                                        </h3>
                                        {cat.expertiseArea && (
                                            <p className="text-xs text-zinc-500 mt-1">{cat.expertiseArea.name}</p>
                                        )}
                                    </div>

                                    {cat.description && (
                                        <p className="text-sm text-zinc-400 line-clamp-2">{cat.description}</p>
                                    )}

                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-xs text-zinc-500">
                                            {cat.procedures.length} prosedür
                                        </p>
                                    </div>

                                    <Link href={`/admin/treatments/${cat.id}`}>
                                        <Button variant="outline" className="w-full">
                                            Düzenle
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
