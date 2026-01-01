'use client';

import { useState, useEffect } from 'react';
import { Bell, Search, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface AdminHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

interface SearchResult {
    id: string;
    name?: string;
    title?: string;
    summary?: string;
    excerpt?: string;
    type: 'procedure' | 'blog';
    url: string;
}

export default function AdminHeader({ breadcrumbs = [{ label: 'Admin' }, { label: 'Panel' }] }: AdminHeaderProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (searchQuery.length >= 2) {
            setIsLoading(true);
            fetch(`/api/admin/search?q=${encodeURIComponent(searchQuery)}`)
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setSearchResults(data.results);
                    }
                })
                .finally(() => setIsLoading(false));
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return (
        <header className="h-24 sticky top-0 z-40 bg-zinc-900/80 backdrop-blur-2xl border-b border-white/5 px-4 lg:px-10 flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                    {breadcrumbs.map((item, index) => (
                        <span key={index} className="flex items-center">
                            {item.href ? (
                                <Link href={item.href} className="hover:text-primary cursor-pointer transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={index === breadcrumbs.length - 1 ? 'text-white' : 'hover:text-primary cursor-pointer transition-colors'}>
                                    {item.label}
                                </span>
                            )}
                            {index < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3 mx-2" />}
                        </span>
                    ))}
                </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
                {/* Search */}
                <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
                    <DialogTrigger asChild>
                        <button className="relative p-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                            <Search className="h-5 w-5" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-zinc-900 border-white/5">
                        <DialogHeader>
                            <DialogTitle className="text-white">Arama</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <Input
                                placeholder="Arama yapın..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-zinc-800 border-white/5 text-white"
                            />
                            {isLoading && <p className="text-zinc-400">Aranıyor...</p>}
                            {!isLoading && searchResults.length > 0 && (
                                <div className="space-y-2 max-h-60 overflow-y-auto">
                                    {searchResults.map((result) => (
                                        <Link
                                            key={result.id}
                                            href={result.url}
                                            onClick={() => setSearchOpen(false)}
                                            className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                                        >
                                            <div className="text-sm font-medium text-white">
                                                {result.name || result.title}
                                            </div>
                                            <div className="text-xs text-zinc-400">
                                                {result.summary || result.excerpt}
                                            </div>
                                            <div className="text-xs text-primary uppercase">
                                                {result.type === 'procedure' ? 'Prosedür' : 'Blog'}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                            {!isLoading && searchQuery.length >= 2 && searchResults.length === 0 && (
                                <p className="text-zinc-400">Sonuç bulunamadı.</p>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Notifications */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="relative p-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-3 right-3 h-2 w-2 bg-primary rounded-full ring-4 ring-zinc-900"></span>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80 bg-zinc-900 border-white/5">
                        <div className="p-4">
                            <h3 className="text-sm font-medium text-white mb-2">Bildirimler</h3>
                            <div className="space-y-2">
                                <DropdownMenuItem className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                                    <div className="text-sm text-white">Yeni randevu talebi</div>
                                    <div className="text-xs text-zinc-400">2 dakika önce</div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                                    <div className="text-sm text-white">Blog yazısı onaylandı</div>
                                    <div className="text-xs text-zinc-400">1 saat önce</div>
                                </DropdownMenuItem>
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="h-10 w-px bg-white/5"></div>
                <Button asChild className="rounded-2xl bg-zinc-100 text-zinc-950 hover:bg-white font-black px-6 h-12 shadow-[0_10px_20px_rgba(255,255,255,0.05)] transition-all active:scale-95 hidden sm:flex">
                    <a href="https://wa.me/905382244488" target="_blank" rel="noopener noreferrer">
                        Destek Al
                    </a>
                </Button>
            </div>
        </header>
    );
}