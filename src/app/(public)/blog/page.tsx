import { prisma } from "@/lib/prisma";
import { PenTool } from "lucide-react";
import { BlogList } from "@/components/blog-list";

export const metadata = {
    title: "Sağlık Bloğu",
    description: "Üroloji ve androloji sağlık makaleleri, uzman ipuçları ve tıbbi güncellemeler.",
};

export default async function BlogPage() {
    const posts = await prisma.blogPost.findMany({
        include: {
            category: true,
        },
        where: {
            status: "PUBLISHED",
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="pt-40 pb-32 relative min-h-screen bg-zinc-950 overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-5" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mb-16 space-y-6">
                    <div className="flex items-center space-x-2 text-primary font-black uppercase tracking-widest text-sm">
                        <PenTool className="h-5 w-5" />
                        <span>Tıbbi Görüşler</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                        Tıbbi <span className="text-primary italic">Blog</span>'umuz
                    </h1>
                    <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl font-normal">
                        Ürolojik sağlık, ileri cerrahi teknikler ve sağlıklı yaşam ipuçları hakkında uzman görüşlerinden haberdar olun.
                    </p>
                </div>

                <BlogList posts={posts} />
            </div>
        </div>
    );
}
