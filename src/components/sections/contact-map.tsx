"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface SiteSettings {
    address?: string;
    contactPhone?: string;
    contactEmail?: string;
    whatsappNumber?: string;
}

export function ContactMap() {
    const [settings, setSettings] = useState<SiteSettings>({});

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await fetch('/api/admin/settings');
                const data = await response.json();
                if (data.success) {
                    setSettings(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch settings:', error);
            }
        };
        fetchSettings();
    }, []);
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-4 p-8 rounded-3xl bg-secondary/30 border border-border/50">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-black text-card-foreground">Adres</h4>
                                <p className="text-sm text-muted-foreground font-medium">
                                    {settings.address || "Adres bilgisi yükleniyor..."}
                                </p>
                            </div>

                            <div className="space-y-4 p-8 rounded-3xl bg-secondary/30 border border-border/50">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-black text-card-foreground">Telefon</h4>
                                <p className="text-sm text-muted-foreground font-medium">
                                    {settings.contactPhone || "Telefon bilgisi yükleniyor..."}
                                </p>
                            </div>

                            <div className="space-y-4 p-8 rounded-3xl bg-secondary/30 border border-border/50">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-black text-card-foreground">E-posta</h4>
                                <p className="text-sm text-muted-foreground font-medium">
                                    {settings.contactEmail || "E-posta bilgisi yükleniyor..."}
                                </p>
                            </div>

                            <div className="space-y-4 p-8 rounded-3xl bg-secondary/30 border border-border/50">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <MessageCircle className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-black text-card-foreground">WhatsApp</h4>
                                <p className="text-sm text-muted-foreground font-medium">
                                    {settings.whatsappNumber || "WhatsApp bilgisi yükleniyor..."}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

                    {/* Map Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=Kad%C4%B1k%C3%B6y,%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kadıköy İstanbul Konum"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
