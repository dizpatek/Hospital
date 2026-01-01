import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Calendar, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] border border-white/5 shadow-2xl">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-primary">
                        <FileText className="h-6 w-6" />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">İçerik Yönetimi</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-white">Blog Yazıları</h2>
                    <p className="text-muted-foreground font-medium text-lg max-w-2xl">
                        Blog yazılarınızı oluşturun, düzenleyin ve yayınlayın.
                    </p>
                </div>
                <Button asChild className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-95">
                    <Link href="/admin/blog/new">
                        <Plus className="mr-3 h-6 w-6" /> Yeni Yazı Ekle
                    </Link>
                </Button>
            </div>

            {posts.length === 0 ? (
                <Card className="border border-white/5 shadow-2xl bg-zinc-900/40 backdrop-blur-xl rounded-[3rem]">
                    <CardContent className="p-20 text-center">
                        <p className="text-zinc-500 text-lg">Henüz blog yazısı eklenmemiş.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Card key={post.id} className="bg-zinc-900/40 border-white/5 hover:border-primary/50 transition-all group">
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        {post.category && (
                                            <Badge variant="outline" className="text-xs">
                                                {post.category.name}
                                            </Badge>
                                        )}
                                        <Badge
                                            variant={post.status === 'PUBLISHED' ? 'default' : 'secondary'}
                                            className="text-xs"
                                        >
                                            {post.status === 'PUBLISHED' ? 'Yayında' : 'Taslak'}
                                        </Badge>
                                    </div>

                                    <h3 className="text-xl font-black text-white group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-zinc-400 line-clamp-3">
                                        {post.excerpt || post.content.substring(0, 100) + "..."}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                        <Calendar className="h-3 w-3" />
                                        {new Date(post.createdAt).toLocaleDateString("tr-TR")}
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex gap-2">
                                        <Link href={`/admin/blog/${post.id}`} className="flex-1">
                                            <Button variant="outline" className="w-full">
                                                Düzenle
                                            </Button>
                                        </Link>
                                        <Link href={`/blog/${post.slug}`} target="_blank">
                                            <Button variant="ghost" size="icon">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
