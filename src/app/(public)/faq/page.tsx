import { prisma } from "@/lib/prisma";
import { HelpCircle, Mail, Phone } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Sıkça Sorulan Sorular",
    description: "Ürolojik sağlık, randevular, sigorta ve tıbbi işlemler hakkında yaygın sorular.",
};

export default async function FAQPage() {
    const faqs = await prisma.fAQ.findMany({
        where: {
            isGlobal: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="pt-40 pb-32 relative min-h-screen bg-background overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-5" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <div className="inline-flex items-center space-x-2 text-primary font-black px-4 py-1.5 rounded-full bg-primary/10 text-sm uppercase tracking-widest">
                        <HelpCircle className="h-4 w-4" />
                        <span>Destek Merkezi</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight leading-tight">
                        Size Nasıl <span className="text-primary italic">Yardımcı Olabiliriz?</span>
                    </h1>
                    <p className="text-muted-foreground text-xl leading-relaxed font-normal">
                        Kliniğimiz, tıbbi süreçler ve hasta bakımı ile ilgili yaygın soruların yanıtlarını bulun.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqs.length > 0 ? (
                        <Accordion type="single" collapsible className="space-y-6">
                            {faqs.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id} className="border border-border/50 rounded-[2.5rem] bg-card/40 backdrop-blur-xl px-10 py-2 overflow-hidden shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30">
                                    <AccordionTrigger className="text-left font-black text-xl text-card-foreground hover:no-underline hover:text-primary py-8 transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-10 pr-12 font-medium">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <div className="py-32 text-center bg-card/40 backdrop-blur-xl rounded-[3rem] border-2 border-dashed border-border/50">
                            <HelpCircle className="h-20 w-20 text-muted-foreground/20 mx-auto mb-6" />
                            <p className="text-muted-foreground font-black text-lg">Henüz genel SSS listelenmedi.</p>
                        </div>
                    )}

                    {/* Contact CTA */}
                    <div className="mt-32 bg-gradient-to-br from-primary to-accent rounded-[4rem] p-12 md:p-20 text-white text-center space-y-10 shadow-[0_0_100px_rgba(0,0,0,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 h-96 w-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-96 w-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl" />

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black">Hala sorularınız mı var?</h2>
                            <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                                Ekibimiz yardıma hazır. Telefon, e-posta yoluyla bize ulaşın veya detaylı danışmanlık için kliniğimizi ziyaret edin.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                                <Button className="h-16 px-10 bg-white text-primary hover:bg-white/90 text-lg font-black rounded-2xl w-full sm:w-auto shadow-xl">
                                    <Phone className="mr-3 h-6 w-6 fill-current" />
                                    Bizi Arayın
                                </Button>
                                <Button variant="ghost" className="h-16 px-10 text-white hover:bg-white/10 text-lg font-black rounded-2xl w-full sm:w-auto border border-white/30">
                                    <Mail className="mr-3 h-6 w-6" />
                                    E-posta Gönder
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
