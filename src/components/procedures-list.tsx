"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

interface Procedure {
    id: string;
    name: string;
    slug: string;
    summary: string;
    icon: string;
    treatmentCategory: {
        name: string;
    } | null;
}

export function ProceduresList({ procedures }: { procedures: Procedure[] }) {
    const stripHtml = (html: string | null) => {
        if (!html) return "";
        return html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
    };

    const Icon = ({ name, className }: { name: string; className: string }) => {
        const LucideIcon = LucideIcons[name as IconName];
        if (!LucideIcon) {
            return <LucideIcons.Stethoscope className={className} />;
        }
        return React.createElement(LucideIcon as React.FC<any>, { className });
    };


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {procedures.map((proc, idx) => (
                <motion.div
                    key={proc.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                    <Link
                        href={`/procedures/${proc.slug}`}
                        className="group block relative rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
                    >
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                                <Icon name={proc.icon} className="h-12 w-12 text-primary/20" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                            {proc.treatmentCategory && (
                                <Badge variant="secondary" className="absolute top-6 left-6 bg-background/80 backdrop-blur-md text-primary font-black px-4 py-1.5 rounded-xl border-none tracking-tight">
                                    {proc.treatmentCategory.name}
                                </Badge>
                            )}
                        </div>

                        <div className="p-10 flex flex-col flex-grow">
                            <h3 className="text-2xl font-black text-card-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                {proc.name}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed font-medium mb-8 line-clamp-3">
                                {stripHtml(proc.summary) || `Bu prosedür hakkında kapsamlı bilgi için lütfen detaylı kılavuzu okuyun.`}
                            </p>

                            <div className="mt-auto flex items-center text-primary font-black text-sm tracking-tight">
                                Detaylı Kılavuzu Oku
                                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}

            {procedures.length === 0 && (
                <div className="col-span-full py-32 text-center rounded-[3rem] border-2 border-dashed border-border/50">
                    <p className="text-muted-foreground font-bold text-lg">İşlem bulunamadı. Lütfen yönetici panelinden ekleyiniz.</p>
                </div>
            )}
        </div>
    );
}
