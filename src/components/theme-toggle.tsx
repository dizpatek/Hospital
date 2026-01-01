"use client";

import * as React from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:bg-accent hover:text-accent-foreground">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all [data-theme=premium]:-rotate-90 [data-theme=premium]:scale-0 [data-theme=dark]:-rotate-90 [data-theme=dark]:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all [data-theme=dark]:rotate-0 [data-theme=dark]:scale-100" />
                    <Sparkles className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all [data-theme=premium]:rotate-0 [data-theme=premium]:scale-100 text-primary" />
                    <span className="sr-only">Tema değiştir</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card mt-2">
                <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer gap-2">
                    <Sun className="h-4 w-4" />
                    <span>Açık Mod</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer gap-2">
                    <Moon className="h-4 w-4" />
                    <span>Karanlık Mod</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("premium")} className="cursor-pointer gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="font-bold">Premium Koyu</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
