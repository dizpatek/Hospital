import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
    title: "Blog Yönetimi | Admin",
    description: "Blog gönderilerini görüntüleyebilir, düzenleyebilir ve yeni gönderi ekleyebilirsiniz.",
};

export default async function AdminBlogPage() {
    const posts = await prisma.blogPost.findMany({
        include: { category: true },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="pt-32 pb-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                        Blog Yönetimi
                    </h1>
                    <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                        <Link href="/admin/blog/new">Yeni Blog Yazısı Ekle</Link>
                    </Button>
                </div>

                {posts.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-slate-200 dark:border-zinc-800">
                        <p className="text-slate-500">Henüz yayınlanmış blog gönderisi yok.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="group bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition-all flex flex-col"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="flex items-center space-x-4 mb-4">
                                        {post.category && (
                                            <Badge className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 border-none font-bold">
                                                {post.category.name}
                                            </Badge>
                                        )}
                                        <span className={`text-[10px] uppercase font-bold tracking-widest ${post.status === 'PUBLISHED' ? 'text-green-500' : 'text-amber-500'}`}>
                                            • {post.status === 'PUBLISHED' ? 'Yayında' : 'Taslak'}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <div className="flex items-center space-x-4 text-xs text-slate-500 mb-6 pb-6 border-b border-slate-100 dark:border-zinc-800">
                                        <div className="flex items-center">
                                            <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                            {new Date(post.createdAt).toLocaleDateString("tr-TR")}
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-8 leading-relaxed">
                                        {post.excerpt || post.content.substring(0, 150) + "..."}
                                    </p>

                                    <div className="mt-auto pt-4 flex items-center justify-between">
                                        <Link
                                            href={`/admin/blog/${post.id}`}
                                            className="inline-flex items-center text-blue-600 font-bold text-sm tracking-tight"
                                        >
                                            Makaleyi Düzenle
                                            <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            target="_blank"
                                            className="text-slate-400 hover:text-slate-600 text-[10px] font-bold underline underline-offset-4"
                                        >
                                            Önizle
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
