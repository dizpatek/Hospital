"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";


// Simple replacement for Icons if not available
const Spinner = () => (
    <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        ></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
);

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

export default function LoginForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [debugLog, setDebugLog] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Diagnostics State
    const [diagLoading, setDiagLoading] = useState(false);
    const [diagResult, setDiagResult] = useState<string | null>(null);

    const addLog = (msg: string) => setDebugLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function runDiagnostics(e: React.MouseEvent) {
        e.preventDefault(); // Stop any form submission or page reload
        e.stopPropagation();

        setDiagLoading(true);
        setDiagResult("Running tests...");
        const values = form.getValues();

        try {
            const res = await fetch("/api/verify-credentials", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await res.json();
            setDiagResult(JSON.stringify(data, null, 2));

            // Critical: If success, show a persistent alert so the user can see it even if page reloads
            if (!data.success) {
                alert("Diagnostic Error: " + data.message);
            } else {
                alert("Diagnostic Success! Database connection is GOOD.");
            }

        } catch (e: any) {
            setDiagResult("Error: " + e.message);
            alert("Network Error: " + e.message);
        } finally {
            setDiagLoading(false);
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        addLog("Submit triggered");
        setIsLoading(true);
        setError(null);

        try {
            addLog("Calling signIn...");
            // Use redirect: false to handle it manually
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });

            addLog(`SignIn Result: ${JSON.stringify(result)}`);

            setIsLoading(false);

            if (result?.error) {
                addLog("Login Error: " + result.error);
                setError("Geçersiz e-posta veya şifre.");
                import("sonner").then(({ toast }) => toast.error("Hata: " + result.error));
            } else if (result?.ok) {
                addLog("Login Success! Redirecting...");
                import("sonner").then(({ toast }) => toast.success("Giriş başarılı!"));
                // Hard redirect
                window.location.href = "/admin/dashboard";
            } else {
                addLog("Unknown result state");
            }
        } catch (err: any) {
            addLog("Critical Exception: " + err.message);
            setIsLoading(false);
            setError("Sistem hatası oluştu.");
        }
    }

    return (
        <div className="grid gap-6">
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            disabled={isLoading}
                            {...form.register("email")}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            disabled={isLoading}
                            {...form.register("password")}
                        />
                    </div>
                    {error && <p className="text-sm text-red-500 font-bold">{error}</p>}

                    <Button disabled={isLoading}>
                        {isLoading && <Spinner />}
                        Giriş Yap
                    </Button>
                </div>
            </form>

            {/* Diagnostics Section */}
            <div className="mt-8 p-4 bg-zinc-900 rounded-lg text-xs font-mono text-zinc-400 border border-zinc-700">
                <p className="font-bold text-white mb-2">--- CANLI TANI ARACI ---</p>
                <div className="mb-4 space-x-2">
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={runDiagnostics}
                        disabled={diagLoading}
                        className="h-8"
                    >
                        {diagLoading ? "Kontrol Ediliyor..." : "Bağlantıyı & Şifreyi Test Et"}
                    </Button>
                </div>

                {diagResult && (
                    <div className="mb-4 p-2 bg-black rounded border border-zinc-800 overflow-auto max-h-40 whitespace-pre-wrap">
                        {diagResult}
                    </div>
                )}

                <div className="mt-2 pt-2 border-t border-zinc-800">
                    <p className="mb-1 text-zinc-500">İşlem Günlüğü:</p>
                    {debugLog.map((log, i) => (
                        <div key={i} className="text-zinc-300 border-b border-zinc-800/50 pb-1 mb-1">{log}</div>
                    ))}
                    {debugLog.length === 0 && <span className="text-zinc-600">Henüz işlem yok...</span>}
                </div>
            </div>
        </div>
    );
}
