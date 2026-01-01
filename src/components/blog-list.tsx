"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ChevronRight, PenTool } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BlogList({ posts }: { posts: any[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                    <Link
                        href={`/blog/${post.slug}`}
                        className="group block relative rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden h-full flex flex-col"
                    >
                        <div className="aspect-[16/10] relative overflow-hidden">
                            {post.coverImage ? (
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full bg-secondary/30">
                                    <PenTool className="h-12 w-12 text-muted-foreground/30" />
                                </div>
                            )}
                            {post.category && (
                                <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground font-black border-none shadow-xl tracking-tight">
                                    {post.category.name}
                                </Badge>
                            )}
                        </div>

                        <div className="p-10 flex-1 flex flex-col">
                            <div className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
                                <div className="flex items-center">
                                    <Calendar className="mr-2 h-3.5 w-3.5 text-primary" />
                                    {new Date(post.createdAt).toLocaleDateString("tr-TR", { month: "short", day: "numeric", year: "numeric" })}
                                </div>
                                <div className="flex items-center">
                                    <User className="mr-2 h-3.5 w-3.5 text-primary" />
                                    Tıbbi Ekip
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-card-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed font-medium mb-8 line-clamp-3">
                                {post.excerpt || post.content.substring(0, 150) + "..."}
                            </p>

                            <div className="mt-auto flex items-center text-primary font-black text-sm tracking-tight">
                                Makaleyi Oku
                                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}

            {posts.length === 0 && (
                <div className="col-span-full py-32 text-center rounded-[3rem] border-2 border-dashed border-border/50">
                    <div className="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <PenTool className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-black text-lg">Henüz blog yazısı bulunamadı.</p>
                </div>
            )}
        </div>
    );
}
