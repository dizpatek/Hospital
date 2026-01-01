"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
            });

            if (res.ok) {
                toast.success("Çıkış yapıldı");
                router.push("/auth/login");
                router.refresh();
            } else {
                toast.error("Çıkış yapılamadı");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="p-2 text-zinc-500 hover:text-red-500 transition-colors"
            title="Çıkış Yap"
        >
            <LogOut className="h-5 w-5" />
        </button>
    );
}
