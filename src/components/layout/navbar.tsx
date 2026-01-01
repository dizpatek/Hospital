"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/appointment-dialog";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
    { name: "Uzmanlık Alanları", href: "/#expertise" },
    { name: "İşlemler", href: "/procedures" },
    { name: "Blog", href: "/blog" },
    { name: "SSS", href: "/faq" },
    { name: "İletişim", href: "/#contact" },
    { name: "Admin", href: "/admin/dashboard" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [siteName, setSiteName] = useState("MEDDOC");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await fetch("/api/admin/settings");
                const data = await response.json();
                if (data.success && data.data.siteName) {
                    setSiteName(data.data.siteName);
                }
            } catch (error) {
                console.error("Failed to fetch site settings:", error);
            }
        };
        fetchSettings();
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "bg-background/80 py-3 backdrop-blur-md border-b border-border/50 shadow-sm"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold tracking-tighter text-primary">
                            {siteName.slice(0, Math.floor(siteName.length / 2))}<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">{siteName.slice(Math.floor(siteName.length / 2))}</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden items-center space-x-8 lg:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <ThemeToggle />
                        <AppointmentDialog>
                            <Button variant="outline" className="hidden border-primary text-primary hover:bg-primary/10 lg:flex">
                                <Phone className="mr-2 h-4 w-4" />
                                Randevu Al
                            </Button>
                        </AppointmentDialog>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-800 dark:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background border-b border-border"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-slate-700 dark:text-slate-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <AppointmentDialog>
                                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                                    Randevu Al
                                </Button>
                            </AppointmentDialog>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
