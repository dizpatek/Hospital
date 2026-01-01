import { prisma } from "@/lib/prisma";
import { Stethoscope } from "lucide-react";
import Link from "next/link";
import { ProceduresList } from "@/components/procedures-list";

export const metadata = {
    title: "Tıbbi İşlemler",
    description: "Ürolojik ve androlojik işlemler ile cerrahi tekniklerin kapsamlı listesi.",
};

export default async function ProceduresPage({
    searchParams
}: {
    searchParams: Promise<{ cat?: string }>
}) {
    const { cat } = await searchParams;

    const procedures = await prisma.procedure.findMany({
        where: {
            status: "PUBLISHED",
            ...(cat ? {
                treatmentCategory: {
                    expertiseArea: {
                        slug: cat
                    }
                }
            } : {})
        },
        include: {
            treatmentCategory: true,
        },
        orderBy: {
            name: "asc",
        },
    });

    const expertiseAreas = await prisma.expertiseArea.findMany({
        orderBy: { name: "asc" }
    });

    return (
        <div className="pt-40 pb-32 relative min-h-screen bg-background overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-5" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mb-16 space-y-6">
                    <div className="flex items-center space-x-2 text-primary font-black uppercase tracking-widest text-sm">
                        <Stethoscope className="h-5 w-5" />
                        <span>Klinik Hizmetler</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                        Tıbbi ve <span className="text-primary italic">Cerrahi İşlemler</span>
                    </h1>
                    <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl font-normal">
                        Ürolojik ve androlojik müdahalelerimiz için detaylı bilgilendirme kılavuzları ve klinik protokoller.
                    </p>
                </div>

                {/* Category Filtering Navigation */}
                <div className="flex flex-wrap gap-4 mb-16">
                    <Link href="/procedures">
                        <div className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${!cat
                            ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105"
                            : "bg-secondary/40 text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                            }`}>
                            Tümü
                        </div>
                    </Link>
                    {expertiseAreas.map((area) => (
                        <Link key={area.id} href={`/procedures?cat=${area.slug}`}>
                            <div className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${cat === area.slug
                                ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105"
                                : "bg-secondary/40 text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                                }`}>
                                {area.name}
                            </div>
                        </Link>
                    ))}
                </div>

                <ProceduresList procedures={procedures} />
            </div>
        </div>
    );
}
