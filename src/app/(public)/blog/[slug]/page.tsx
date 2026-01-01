import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/appointment-dialog";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await prisma.blogPost.findUnique({
        where: { slug: slug },
    });

    if (!post) return { title: "Makale Bulunamadı" };

    return {
        title: `${post.title} | MedDoc Üroloji Blog`,
        description: post.excerpt || `${post.title} başlıklı tıbbi makalemizi okuyun.`,
    };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await prisma.blogPost.findUnique({
        where: { slug: slug },
        include: {
            category: true,
        },
    });

    if (!post) notFound();

    return (
        <article className="pt-32 pb-24 bg-background min-h-screen font-sans">
            <div className="container mx-auto px-4 md:px-6">

                {/* Back Link & Navigation */}
                <div className="max-w-4xl mx-auto flex items-center justify-between mb-12">
                    <Link href="/blog" className="flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Sağlık Bloğuna Geri Dön
                    </Link>
                    <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-blue-600"><Share2 className="h-5 w-5" /></Button>
                        <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-blue-600"><Bookmark className="h-5 w-5" /></Button>
                    </div>
                </div>

                {/* Post Header */}
                <header className="max-w-4xl mx-auto text-center space-y-10 mb-20">
                    <div className="flex justify-center flex-wrap gap-4">
                        {post.category && (
                            <Badge className="bg-primary/10 text-primary font-black border-none px-6 py-2 rounded-full text-xs uppercase tracking-widest">
                                {post.category.name}
                            </Badge>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center space-x-8 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                        <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            {new Date(post.createdAt).toLocaleDateString("tr-TR", { month: "long", day: "numeric", year: "numeric" })}
                        </div>
                        <div className="flex items-center">
                            <User className="mr-2 h-4 w-4 text-primary" />
                            Tıbbi Yayın Kurulu
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                {post.coverImage && (
                    <div className="max-w-5xl mx-auto mb-24 relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-20" />
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-border/50 aspect-video md:aspect-[21/9]">
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Article Content */}
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed font-medium selection:bg-primary/20 selection:text-primary mb-24">
                        <div
                            className="procedure-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Author & CTA Card */}
                    <div className="p-10 rounded-[3rem] bg-card/40 backdrop-blur-3xl border border-border/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex items-center space-x-6 text-center md:text-left">
                            <div className="h-20 w-20 rounded-3xl bg-primary flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-primary/20">
                                MD
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-foreground">Tıbbi Editör Masası</h4>
                                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Üroloji & Androloji Uzmanları</p>
                            </div>
                        </div>
                        <AppointmentDialog>
                            <Button className="h-16 px-10 rounded-2xl bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/20 transition-all font-black text-lg gap-2">
                                Uzman Görüşü Alın
                                <Share2 className="h-5 w-5" />
                            </Button>
                        </AppointmentDialog>
                    </div>
                </div>

            </div>
        </article>
    );
}
