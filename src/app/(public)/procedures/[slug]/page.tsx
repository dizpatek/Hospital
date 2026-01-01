import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ClipboardCheck,
    HelpCircle,
    Layers,
    ShieldAlert,
    Stethoscope,
    ChevronRight,
    Info,
    Calendar,
    PhoneCall,
    Activity,
    CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { AppointmentDialog } from "@/components/appointment-dialog";

interface ProcedurePageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: ProcedurePageProps) {
    const { slug } = await params;
    const procedure = await prisma.procedure.findUnique({
        where: { slug: slug },
    });

    if (!procedure) return { title: "İşlem Bulunamadı" };

    return {
        title: procedure.seoTitle || `${procedure.name} | MedDoc Üroloji`,
        description: procedure.seoDesc || `${procedure.name} hakkında profesyonel kılavuz. Teknikler, faydalar ve klinik sonuçlar hakkında bilgi edinin.`,
    };
}

export default async function ProcedureDetailPage({ params }: ProcedurePageProps) {
    const { slug } = await params;
    const procedure = await prisma.procedure.findUnique({
        where: { slug: slug },
        include: {
            treatmentCategory: {
                include: { expertiseArea: true }
            }
        },
    });

    if (!procedure) notFound();

    // Parse FAQ JSON string
    let parsedFaqs: { question: string, answer: string }[] = [];
    try {
        if (procedure.faq) {
            parsedFaqs = JSON.parse(procedure.faq);
        }
    } catch (e) {
        console.error("FAQ parsing error", e);
    }

    return (
        <div className="pt-40 pb-32 relative min-h-screen bg-background overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 dot-pattern opacity-5 pointer-events-none" />
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-muted-foreground mb-12 bg-transparent">
                    <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                    <ChevronRight className="h-3 w-3" />
                    <Link href="/procedures" className="hover:text-primary transition-colors">İşlemler</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-foreground truncate">{procedure.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Title Section */}
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 font-black px-4 py-1.5 rounded-xl border-none tracking-tight">
                                    {procedure.treatmentCategory?.name || "Genel"}
                                </Badge>
                                {procedure.method && (
                                    <Badge variant="outline" className="font-black px-4 py-1.5 rounded-xl border-primary/20 text-primary/80 tracking-tight">
                                        <Layers className="mr-2 h-3 w-3" /> {procedure.method}
                                    </Badge>
                                )}
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                                {procedure.name}
                            </h1>
                            <div className="flex items-center p-6 rounded-3xl bg-secondary/30 border border-border/50 text-muted-foreground font-medium italic">
                                <Stethoscope className="mr-4 h-6 w-6 text-primary flex-shrink-0" />
                                {procedure.treatmentCategory?.expertiseArea?.name || "Uzmanlık Alanı"} bünyesindeki profesyonel tedavilerimizden biridir.
                            </div>
                        </div>

                        {/* Main Tabs */}
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 h-16 bg-card/40 backdrop-blur-xl rounded-2xl border border-border/50 p-1.5 mb-10">
                                <TabsTrigger value="overview" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-black text-sm uppercase tracking-tight">Nedir & Neden?</TabsTrigger>
                                <TabsTrigger value="process" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-black text-sm uppercase tracking-tight">Nasıl Yapılır?</TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-black text-sm uppercase tracking-tight">S.S.S.</TabsTrigger>
                            </TabsList>

                            {/* TAB: Overview / Why */}
                            <TabsContent value="overview" className="space-y-12 focus:outline-none">
                                <div className="p-10 bg-card/40 backdrop-blur-xl rounded-[2.5rem] border border-border/50 shadow-sm leading-relaxed text-card-foreground text-lg font-medium relative overflow-hidden">
                                    <div className="absolute -left-4 -top-4 opacity-10">
                                        <Info className="h-24 w-24 text-primary" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-black text-primary mb-4 uppercase tracking-widest flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5" /> Tıbbi Tanım & Amaç
                                        </h3>
                                        <div className="leading-relaxed prose prose-lg prose-primary max-w-none dark:prose-invert">
                                            {procedure.why ? (
                                                <div dangerouslySetInnerHTML={{ __html: procedure.why }} />
                                            ) : (
                                                <p>{procedure.summary}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Side Effects / Recovery Section (Visible in Overview) */}
                                {procedure.sideEffects && (
                                    <div className="p-10 rounded-[3rem] bg-gradient-to-br from-secondary/40 to-card border border-border/50 shadow-sm">
                                        <div className="flex flex-col md:flex-row gap-10 items-center">
                                            <div className="h-24 w-24 rounded-[2rem] bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                                <ShieldAlert className="h-10 w-10 text-amber-600" />
                                            </div>
                                            <div className="space-y-4 prose prose-primary dark:prose-invert max-w-none">
                                                <h4 className="text-2xl font-black text-foreground tracking-tight m-0">Riskler & İyileşme Süreci</h4>
                                                <div dangerouslySetInnerHTML={{ __html: procedure.sideEffects }} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </TabsContent>

                            {/* TAB: Process / How */}
                            <TabsContent value="process" className="space-y-8 focus:outline-none">
                                {procedure.how ? (
                                    <div className="p-10 bg-card/40 backdrop-blur-xl rounded-[2.5rem] border border-border/50 hover:border-primary/50 transition-all group">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <Activity className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-2xl font-black text-foreground">Uygulama Adımları</h3>
                                        </div>
                                        <div className="text-muted-foreground leading-relaxed font-medium text-lg prose prose-primary dark:prose-invert max-w-none">
                                            <div dangerouslySetInnerHTML={{ __html: procedure.how }} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="py-20 text-center rounded-[3rem] border-2 border-dashed border-border/50">
                                        <Info className="h-16 w-16 text-muted-foreground/20 mx-auto mb-6" />
                                        <p className="text-muted-foreground font-black text-lg">Bu işlem için standart klinik protokoller uygulanmaktadır.</p>
                                    </div>
                                )}

                                {/* Process Steps Infographic */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                                    {[
                                        { title: "Detaylı Muayene", desc: "Hastanın genel durumu ve tıbbi geçmişi titizlikle analiz edilir." },
                                        { title: "Minimal Girişim", desc: "Açık cerrahi yerine modern, kapalı ve doku koruyucu teknikler seçilir." },
                                        { title: "Kontrollü Takip", desc: "İşlem sonrası düzenli kontrollerle uzun dönem başarı hedeflenir." }
                                    ].map((step, i) => (
                                        <div key={i} className="p-8 rounded-3xl bg-primary/5 border border-border/30 relative">
                                            <span className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl shadow-lg border-4 border-background">
                                                {i + 1}
                                            </span>
                                            <h4 className="text-lg font-black text-foreground mb-3">{step.title}</h4>
                                            <p className="text-sm text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            {/* TAB: FAQ */}
                            <TabsContent value="faq" className="space-y-6 focus:outline-none">
                                {parsedFaqs.length > 0 ? (
                                    <Accordion type="single" collapsible className="space-y-6 text-foreground">
                                        {parsedFaqs.map((faq, index) => (
                                            <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-[2.5rem] bg-card/40 backdrop-blur-xl px-10 py-2 overflow-hidden shadow-sm transition-all hover:border-primary/30">
                                                <AccordionTrigger className="text-left font-black text-xl hover:no-underline hover:text-primary py-8 transition-colors">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-10 pr-12 font-medium">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                ) : (
                                    <div className="py-20 text-center rounded-[3rem] border-2 border-dashed border-border/50">
                                        <HelpCircle className="h-16 w-16 text-muted-foreground/20 mx-auto mb-6" />
                                        <p className="text-muted-foreground font-black text-lg">Bu işleme özel sıkça sorulan sorular henüz eklenmedi.</p>
                                    </div>
                                )}
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar / CTA Area */}
                    <div className="space-y-8">
                        <div className="p-10 bg-primary rounded-[3.5rem] text-white shadow-[0_0_50px_rgba(0,0,0,0.1)] relative overflow-hidden sticky top-32">
                            <div className="absolute top-0 right-0 h-40 w-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />

                            <h4 className="text-3xl font-black mb-6 leading-tight">Danışmak ister misiniz?</h4>
                            <p className="text-white/80 mb-8 font-medium leading-relaxed">
                                <span className="text-white font-black underline underline-offset-8 decoration-white/30">{procedure.name}</span> işleminin sağlığınız için doğruluğunu uzmanımızla görüşün.
                            </p>

                            <div className="space-y-6 relative z-10">
                                <AppointmentDialog>
                                    <Button className="w-full h-16 bg-white text-primary hover:bg-white/90 text-lg font-black rounded-2xl shadow-xl transition-transform active:scale-95">
                                        Randevu Oluştur
                                    </Button>
                                </AppointmentDialog>

                                <a href="tel:+905000000000" className="flex items-center justify-center p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-sm font-black tracking-widest uppercase">
                                    <PhoneCall className="mr-3 h-5 w-5" />
                                    Bizi Arayın
                                </a>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
                                <div className="flex items-center space-x-3 text-white/60">
                                    <ShieldAlert className="h-5 w-5" />
                                    <span className="text-xs font-black tracking-widest uppercase italic">KVKK Güvencesi</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Calendar className="h-5 w-5" />
                                    <span className="text-xs font-black tracking-widest uppercase italic">Esnek Randevu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
