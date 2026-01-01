"use client";

import { motion } from "framer-motion";
import {
    Activity,
    Droplet,
    FlaskConical,
    HeartPulse,
    Layers,
    Stethoscope,
    Syringe,
    TrendingUp
} from "lucide-react";
import Link from "next/link";

const expertise = [
    {
        name: "Prostat Hastalıkları",
        description: "İleri düzey lazer cerrahileri (HoLEP), robotik yaklaşımlar ve hassas MR-Füzyon biyopsi ile prostat sağlığında tam kontrol.",
        icon: Activity,
        color: "bg-blue-600",
        href: "/procedures?cat=prostat-hastaliklari",
    },
    {
        name: "Böbrek & Üreter",
        description: "Böbrek taşları ve üreter patolojileri için dikişsiz, kesisiz lazerli kapalı ameliyatlar (RIRS) ile hızlı iyileşme.",
        icon: FlaskConical,
        color: "bg-teal-600",
        href: "/procedures?cat=tas-hastaliklari",
    },
    {
        name: "Androloji",
        description: "Mutluluk cerrahisi, penis estetiği ve ekzozom gibi yenileyici tedavilerle erkek cinsel sağlığında yeni bir dönem.",
        icon: HeartPulse,
        color: "bg-indigo-600",
        href: "/procedures?cat=androloji-cinsel-saglik",
    },
    {
        name: "Erkek İnfertilitesi",
        description: "Mikro-TESE ve mikroskobik varikoselektomi gibi mikro-cerrahi yöntemlerle çocuk sahibi olma şansını maksimize ediyoruz.",
        icon: Droplet,
        color: "bg-purple-600",
        href: "/procedures?cat=erkek-infertilitesi",
    },
    {
        name: "Pediatrik Üroloji",
        description: "Çocuklarda doğuştan gelen ürolojik sorunların, çocuk psikolojisini koruyarak estetik ve hassas cerrahi onarımı.",
        icon: Stethoscope,
        color: "bg-rose-600",
        href: "/procedures?cat=pediatrik-uroloji",
    },
    {
        name: "Mesane Sağlığı",
        description: "Mesane tümörleri için gelişmiş endoskopik tedaviler ve fonksiyonel mesane bozuklukları için kalıcı çözümler.",
        icon: Layers,
        color: "bg-cyan-600",
        href: "/procedures?cat=mesane-hastaliklari",
    },
];

export function ExpertiseGrid() {
    return (
        <section id="expertise" className="py-32 relative bg-background overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-5" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Hizmetlerimiz
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                        Uzmanlaşmış Tıbbi <span className="text-primary">Tecrübe</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto font-normal">
                        En son klinik protokolleri kullanarak, Üroloji ve Androloji'nin tüm alt alanlarında hassasiyet odaklı tıbbi hizmetler sunuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className="group relative block p-10 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Decorative background gradient on hover */}
                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-700 group-hover:bg-primary/20" />

                                <div className={`mb-8 inline-flex p-4 rounded-2xl ${item.color} text-white shadow-xl shadow-current/20 group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0`}>
                                    <item.icon className="h-7 w-7" />
                                </div>

                                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed font-normal mb-8">
                                    {item.description}
                                </p>

                                <div className="flex items-center text-primary font-bold text-sm tracking-tight">
                                    İşlemleri Keşfedin
                                    <TrendingUp className="ml-2 h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
