"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Mehmet A.",
        role: "Böbrek Taşı Tedavisi",
        content: "Aylardır süren ağrılarımdan Dr. Ahmet Bey'in gerçekleştirdiği kapalı ameliyat sayesinde kurtuldum. Süreç çok profesyonelce yönetildi.",
        rating: 5,
    },
    {
        name: "Caner T.",
        role: "Prostat Cerrahisi",
        content: "Robotik cerrahi sonrası iyileşme hızım beni şaşırttı. Hocamızın tecrübesi ve ekibin güler yüzü insana güven veriyor.",
        rating: 5,
    },
    {
        name: "Bülent S.",
        role: "Androlojik Check-up",
        content: "Modern tanı yöntemleri ve detaylı açıklamalarıyla tüm sorularıma cevap buldum. Kesinlikle tavsiye ediyorum.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-32 bg-secondary/20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Hasta Yorumları
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                        Güven ve <span className="text-primary italic">Memnuniyet</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-card/60 backdrop-blur-xl border border-border/50 relative group"
                        >
                            <Quote className="absolute top-8 right-10 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                            <div className="flex space-x-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-muted-foreground leading-relaxed font-medium mb-8 italic">
                                "{item.content}"
                            </p>

                            <div className="mt-auto">
                                <h4 className="text-lg font-black text-card-foreground">{item.name}</h4>
                                <p className="text-xs font-bold text-primary uppercase tracking-widest">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
