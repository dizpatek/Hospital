"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { AppointmentDialog } from "@/components/appointment-dialog";

const stats = [
    { value: "25+", label: "Yıllık Deneyim" },
    { value: "10K+", label: "Mutlu Hasta" },
    { value: "150+", label: "Tıbbi Yayın" },
    { value: "12", label: "Uluslararası Ödül" },
];

export function StatsCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with Premium Dark Theme */}
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-3xl -z-10" />
            <div className="absolute inset-0 dot-pattern opacity-10 -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-primary to-accent shadow-2xl relative overflow-hidden">

                    {/* Decorative shapes inside the card */}
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -left-20 -top-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">

                        {/* CTA Content */}
                        <div className="flex-1 text-center lg:text-left space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1]">
                                Sağlığınız İçin <br />
                                <span className="text-white/70 italic">En İyi Adımı Atın</span>
                            </h2>
                            <p className="text-white/80 text-lg max-w-xl mx-auto lg:mx-0 font-medium">
                                Uzman ekibimiz ve modern teknolojimizle size en uygun tedavi yöntemlerini sunmak için buradayız. Hemen randevu alın.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <AppointmentDialog>
                                    <Button size="lg" className="h-16 px-10 bg-white text-primary hover:bg-white/90 text-lg font-black rounded-2xl w-full sm:w-auto shadow-xl">
                                        <Phone className="mr-2 h-5 w-5 fill-current" />
                                        Hemen Arayın
                                    </Button>
                                </AppointmentDialog>
                                <Button size="lg" variant="ghost" className="h-16 px-10 text-white hover:bg-white/10 text-lg font-bold rounded-2xl w-full sm:w-auto">
                                    Sıkça Sorulanlar
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="flex-1 grid grid-cols-2 gap-8 w-full">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center space-y-2"
                                >
                                    <span className="text-4xl md:text-5xl font-black text-white block">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm font-bold text-white/60 uppercase tracking-widest block text-center">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
