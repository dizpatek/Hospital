import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export async function BlogPreview() {
    const latestPosts = await prisma.blogPost.findMany({
        where: { status: "PUBLISHED" },
        take: 3,
        orderBy: { createdAt: "desc" },
        include: { category: true }
    });

    if (latestPosts.length === 0) return null;

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <span className="text-primary font-black uppercase tracking-widest text-sm">Güncel Bilgiler</span>
                        <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
                            Sağlık Rehberimizden <br />
                            <span className="text-primary italic">Son Başlıklar</span>
                        </h2>
                    </div>
                    <Link href="/blog">
                        <Button variant="ghost" className="group text-primary font-black text-lg gap-2 hover:bg-primary/5 rounded-2xl h-14 px-8">
                            Tüm Blog Yazıları
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {latestPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group block relative rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden h-full flex flex-col"
                        >
                            <div className="aspect-[16/10] relative overflow-hidden">
                                {post.coverImage && (
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-7100"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                </div>

                                <h3 className="text-2xl font-black text-card-foreground mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed font-medium mb-8 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex items-center text-primary font-black text-sm tracking-tight">
                                    Devamını Oku
                                    <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
