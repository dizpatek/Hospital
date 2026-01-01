"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    const [settings, setSettings] = useState<any>({});

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
        <footer className="bg-background relative pt-32 pb-12 overflow-hidden border-t border-border/50">
            <div className="absolute inset-0 dot-pattern opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Logo and Brand */}
                    <div className="space-y-8">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-primary">
                            {settings.siteName || "MEDDOC"}
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                            {settings.siteDescription || "Üroloji ve Androlojide Mükemmeliyet. Yetişkin ve pediatrik hastalar için profesyonel, şefkatli ve ileri düzey tıbbi bakım sağlıyoruz. En modern cerrahi tekniklerle yaşam kalitenizi artırıyoruz."}
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, url: settings.facebookUrl },
                                { Icon: Instagram, url: settings.instagramUrl },
                                { Icon: Twitter, url: settings.twitterUrl }
                            ].filter(link => link.url).map(({ Icon, url }, i) => (
                                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-2xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-black text-foreground mb-8 uppercase text-xs tracking-[0.2em]">Hızlı Navigasyon</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Uzmanlık Alanlarımız", href: "/#expertise" },
                                { name: "Tıbbi İşlemler", href: "/procedures" },
                                { name: "Sağlık Bloğu", href: "/blog" },
                                { name: "Sıkça Sorulan Sorular", href: "/faq" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center group">
                                        <div className="h-1.5 w-0 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all rounded-full" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Expertise */}
                    <div>
                        <h4 className="font-black text-foreground mb-8 uppercase text-xs tracking-[0.2em]">Klinik Hizmetler</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Prostat Cerrahisi (HoLEP)", href: "/procedures/holep-tedavisi" },
                                { name: "Böbrek Taşı Tedavisi (RIRS)", href: "/procedures/rirs-lazer-tas" },
                                { name: "Androloji & Cinsel Sağlık", href: "/procedures?cat=androloji-cinsel-saglik" },
                                { name: "Erkek İnfertilitesi", href: "/procedures?cat=erkek-infertilitesi" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center group">
                                        <div className="h-1.5 w-0 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all rounded-full" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-black text-foreground mb-8 uppercase text-xs tracking-[0.2em]">İletişim & Konum</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground leading-relaxed">
                                    {settings.address || "Nişantaşı Mahallesi, Teşvikiye Cd. No: 123, Şişli / İstanbul"}
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-bold text-foreground">{settings.contactPhone || "+90 (212) 123 45 67"}</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-bold text-foreground">{settings.contactEmail || "bilgi@meddoc.com.tr"}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center bg-transparent gap-6">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        © {new Date().getFullYear()} {settings.siteName || "MEDDOC"} Klinikleri. Mükemmeliyetle Tasarlanmıştır.
                    </p>
                    <div className="flex space-x-8">
                        <Link href="/privacy" className="text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Gizlilik</Link>
                        <Link href="/terms" className="text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Şartlar</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
