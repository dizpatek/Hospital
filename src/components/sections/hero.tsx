"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AppointmentDialog } from "@/components/appointment-dialog";

export function Hero() {
    const [description, setDescription] = useState("Prostat, böbrek taşları ve erkek cinsel sağlığı için cerrahi ve tıbbi tedavilerde mükemmeliyet. En son teknoloji ile hasta odaklı çözümler.");

    useEffect(() => {
        fetch('/api/admin/settings')
            .then(res => res.json())
            .then(data => {
                if (data.success && data.data.siteDescription) {
                    setDescription(data.data.siteDescription);
                }
            })
            .catch(err => console.error('Failed to fetch settings', err));
    }, []);

    return (
        <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-64 overflow-hidden animated-gradient">
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 dot-pattern opacity-10" />

            {/* Background blobs */}
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 border border-white/20"
                        >
                            <Star className="mr-2 h-4 w-4 fill-current" />
                            Güvenilir Uzman Üroloji Kliniği
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
                        >
                            İleri Düzey <span className="gradient-text bg-gradient-to-r from-white to-white/60">Üroloji</span> <br />
                            & Androloji Bakımı
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <AppointmentDialog>
                                <Button size="lg" className="h-16 px-10 bg-white text-primary hover:bg-white/90 text-lg font-bold rounded-2xl w-full sm:w-auto shadow-xl shadow-black/10 transition-all hover:scale-105">
                                    Randevu Al
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </AppointmentDialog>
                            <Button asChild size="lg" variant="outline" className="h-16 px-10 border-white/30 bg-white/10 text-white hover:bg-white/20 text-lg font-bold rounded-2xl w-full sm:w-auto backdrop-blur-md">
                                <Link href="/procedures">İşlemleri Görüntüle</Link>
                            </Button>
                        </motion.div>

                        {/* Stats / Trust marks */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-white/10"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                                    <ShieldCheck className="h-7 w-7 text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-base font-bold text-white leading-tight">Alanında Uzman</p>
                                    <p className="text-sm text-white/50">Sertifikalı Cerrahlar</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                                    <Users className="h-7 w-7 text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-base font-bold text-white leading-tight">10B+ Hasta</p>
                                    <p className="text-sm text-white/50">Başarıyla Tedavi Edildi</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Image / Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 relative w-full max-w-lg lg:max-w-none"
                    >
                        <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.3)] border-8 border-white/10 group float">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
                                alt="Professional Medical Environment"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center space-x-4 border border-white/20 z-20">
                                <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center text-primary font-black text-2xl shadow-inner">
                                    25+
                                </div>
                                <div>
                                    <p className="text-lg font-black text-white leading-none mb-1">25+ Yıllık Deneyim</p>
                                    <p className="text-sm text-white/60 font-medium">Klinik Mükemmeliyet</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Blob */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 blur-3xl rounded-full -z-10 animate-pulse" />
                    </motion.div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="wave-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
}
