"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Award, Microscope } from "lucide-react";

const qualifications = [
    { icon: GraduationCap, text: "Cerrahpaşa Tıp Fakültesi Mezunu" },
    { icon: Award, text: "Board Sertifikalı Ürolog" },
    { icon: Microscope, text: "İleri Laparoskopik Cerrahi Uzmanı" },
    { icon: CheckCircle2, text: "20+ Yıl Klinik Deneyim" },
];

export function AboutDoctor() {
    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-border/50 group">
                            <img
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop"
                                alt="Dr. Uzman Ürolog"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border border-white/10">
                                <h4 className="text-xl font-bold text-white mb-1">Prof. Dr. Ahmet Yılmaz</h4>
                                <p className="text-primary font-medium text-sm">Üroloji & Androloji Uzmanı</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-10">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-primary font-bold tracking-widest uppercase text-sm"
                            >
                                Hekimimiz Hakkında
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
                            >
                                Mükemmeliyet Odaklı <br />
                                <span className="text-primary italic">Cerrahi Yaklaşım</span>
                            </motion.h2>
                            <p className="text-muted-foreground text-lg leading-relaxed font-normal">
                                Dr. Ahmet Yılmaz, yirmi yılı aşkın süredir üroloji alanında binlerce hastaya şifa dağıtmış, özellikle robotik cerrahi ve minimal invaziv yöntemlerde uluslararası çapta tanınan bir uzmandır.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {qualifications.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center space-x-4 p-4 rounded-2xl bg-card border border-border/50"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-sm font-bold text-card-foreground line-clamp-1">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="p-8 rounded-3xl bg-secondary/30 border-l-4 border-primary italic text-muted-foreground font-medium"
                        >
                            "Her hasta bir hikayedir ve her tedavi, o hikayeyi en sağlıklı şekilde devam ettirme sanatıdır."
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
