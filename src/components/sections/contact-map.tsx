"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactMap() {
    return (
        <section id="contact" className="py-32 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Info Column */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-primary font-bold tracking-widest uppercase text-sm"
                            >
                                İletişim
                            </motion.span>
                            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                                Bize <span className="text-primary italic">Ulaşın</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed font-normal">
                                Kliniğimiz İstanbul'un merkezinde, kolay ulaşılabilir bir konumda yer almaktadır. Her türlü sorunuz için bize ulaşabilirsiniz.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-4 p-8 rounded-3xl bg-secondary/30 border border-border/50">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-black text-card-foreground">Adres</h4>
                                <p className="text-sm text-muted-foreground font-medium">
                                    Atatürk Bulvarı No:123, <br />
                                    Kadıköy - İstanbul
                                </p>
                            </div>

                            <div className="space-y-4 p-8 rounded-3xl bg-secondary/30 border border-border/50">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-black text-card-foreground">Çalışma Saatleri</h4>
                                <p className="text-sm text-muted-foreground font-medium">
                                    Pzt - Cmt: 09:00 - 19:00 <br />
                                    Pazar: Kapalı
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Column (Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl"
                    >
                        {/* Visual placeholder for Map */}
                        <div className="absolute inset-0 bg-secondary/50 flex flex-col items-center justify-center space-y-4 text-center p-8">
                            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-bounce">
                                <MapPin className="h-10 w-10 flex-shrink-0" />
                            </div>
                            <h3 className="text-xl font-black text-card-foreground">İnteraktif Harita</h3>
                            <p className="text-sm text-muted-foreground max-w-xs font-medium">
                                Google Maps entegrasyonu buraya gelecek.
                            </p>
                            <div className="w-full max-w-md h-32 bg-primary/5 rounded-2xl border-2 border-dashed border-primary/20" />
                        </div>

                        {/* Background Texture */}
                        <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
