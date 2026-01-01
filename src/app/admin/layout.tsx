import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import {
    LayoutDashboard,
    Stethoscope,
    Layers,
    PenTool,
    Home,
    ChevronRight,
    User,
    Settings,
    Bell,
    ExternalLink,
    HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/admin/logout-button";

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "fallback-secret-key-change-in-production"
);

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;

    if (!token) {
        redirect("/auth/login");
    }

    try {
        await jwtVerify(token, JWT_SECRET);
    } catch (error) {
        redirect("/auth/login");
    }

    // Mock session object for compatibility
    const session = {
        user: {
            email: "admin@meddoc.com", // This would be extracted from token in a real implementation
        }
    };

    const menuItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Prosedürler", href: "/admin/procedures", icon: Stethoscope },
        { name: "Tedaviler", href: "/admin/treatments", icon: Layers },
        { name: "Blog Yönetimi", href: "/admin/blog", icon: PenTool },
        { name: "S.S.S. Yönetimi", href: "/admin/faq", icon: HelpCircle },
    ];

    return (
        <div className="dark flex min-h-screen bg-zinc-900 text-zinc-100 font-sans selection:bg-primary/30">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-50 w-80 bg-zinc-950 border-r border-white/5 hidden lg:flex flex-col shadow-[20px_0_50px_rgba(0,0,0,0.3)]">
                {/* Logo Section */}
                <div className="h-24 flex items-center px-10 border-b border-white/5">
                    <Link href="/admin/dashboard" className="flex items-center space-x-3 group">
                        <div className="h-10 w-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] group-hover:scale-110 transition-transform">
                            <Stethoscope className="h-6 w-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-white tracking-tighter leading-none">
                                MED<span className="text-primary">DOC</span>
                            </span>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mt-1">Yönetim</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation Section */}
                <div className="flex-1 overflow-y-auto py-10 px-6 space-y-12">
                    <nav className="space-y-2">
                        <p className="px-4 text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-6">
                            Ana Kontrol
                        </p>
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center group px-5 py-4 rounded-2xl text-sm font-bold text-zinc-400 transition-all hover:bg-white/5 hover:text-white border border-transparent hover:border-white/5"
                            >
                                <item.icon className="mr-4 h-5 w-5 group-hover:text-primary transition-colors" />
                                {item.name}
                                <ChevronRight className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                            </Link>
                        ))}
                    </nav>

                    <nav className="space-y-2">
                        <p className="px-4 text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-6">
                            Genel
                        </p>
                        <Link
                            href="/"
                            target="_blank"
                            className="flex items-center group px-5 py-4 rounded-2xl text-sm font-bold text-zinc-400 transition-all hover:bg-white/5 hover:text-white border border-transparent hover:border-white/5"
                        >
                            <Home className="mr-4 h-5 w-5 group-hover:text-amber-500 transition-colors" />
                            Siteyi Görüntüle
                            <ExternalLink className="ml-auto h-4 w-4 opacity-30 group-hover:opacity-100 transition-all" />
                        </Link>
                        <Link
                            href="/admin/settings"
                            className="flex items-center group px-5 py-4 rounded-2xl text-sm font-bold text-zinc-400 transition-all hover:bg-white/5 hover:text-white border border-transparent hover:border-white/5"
                        >
                            <Settings className="mr-4 h-5 w-5 group-hover:text-zinc-300 transition-colors" />
                            Ayarlar
                        </Link>
                    </nav>
                </div>

                {/* User Profile Section */}
                <div className="p-6 border-t border-white/5 bg-zinc-950/50 backdrop-blur-md">
                    <div className="flex items-center p-4 rounded-[2rem] bg-zinc-900 border border-white/5 group hover:bg-zinc-800 transition-colors">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-primary transition-colors">
                            <User className="h-6 w-6" />
                        </div>
                        <div className="ml-4 flex-1 min-w-0">
                            <p className="text-sm font-black text-white truncate">Admin</p>
                            <p className="text-[10px] text-zinc-500 truncate font-medium">{session.user.email}</p>
                        </div>
                        <LogoutButton />
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-80 flex flex-col min-h-screen">
                {/* Header */}
                <header className="h-24 sticky top-0 z-40 bg-zinc-900/80 backdrop-blur-2xl border-b border-white/5 px-10 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                            <span className="hover:text-primary cursor-pointer transition-colors">Admin</span>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-white">Panel</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <button className="relative p-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-3 right-3 h-2 w-2 bg-primary rounded-full ring-4 ring-zinc-900"></span>
                        </button>
                        <div className="h-10 w-px bg-white/5"></div>
                        <Button className="rounded-2xl bg-zinc-100 text-zinc-950 hover:bg-white font-black px-6 h-12 shadow-[0_10px_20px_rgba(255,255,255,0.05)] transition-all active:scale-95">
                            Destek Al
                        </Button>
                    </div>
                </header>

                <main className="flex-1 p-10 overflow-x-hidden">
                    <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
