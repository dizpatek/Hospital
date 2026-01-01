import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Tedavi Yönetimi | Admin",
    description: "Tedavi kategorileri ve prosedürleri yönetebileceğiniz admin sayfası.",
};

export default async function TreatmentsAdminPage() {
    // Tüm tedavi kategorilerini ve ilişkili prosedürleri getir
    const categories = await prisma.treatmentCategory.findMany({
        include: { procedures: true },
        orderBy: { name: "asc" },
    });

    return (
        <div className="pt-32 pb-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                        Tedavi Yönetimi
                    </h1>
                    <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                        <Link href="/admin/treatments/new">Yeni Tedavi / Prosedür Ekle</Link>
                    </Button>
                </div>

                {categories.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-slate-200 dark:border-zinc-800">
                        <p className="text-slate-500">Henüz tedavi kategorisi eklenmemiş.</p>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {categories.map((cat) => (
                            <section key={cat.id} className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <h2 className="text-2xl font-bold text-blue-600">
                                        {cat.name}
                                    </h2>
                                    <div className="h-px flex-1 bg-slate-200 dark:bg-zinc-800" />
                                </div>

                                {cat.procedures.length === 0 ? (
                                    <p className="text-slate-500 italic pl-4">
                                        Bu kategoriye ait prosedür bulunmamaktadır.
                                    </p>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {cat.procedures.map((proc) => (
                                            <div
                                                key={proc.id}
                                                className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6 hover:shadow-xl transition-all group"
                                            >
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600">
                                                    {proc.name}
                                                </h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                                                    {proc.summary ||
                                                        "Bu prosedür hakkında detaylı bilgi henüz eklenmemiş."}
                                                </p>
                                                <Link
                                                    href={`/admin/procedures/${proc.id}`}
                                                    className="inline-flex items-center text-blue-600 font-bold text-sm"
                                                >
                                                    İşlemi Düzenle
                                                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
