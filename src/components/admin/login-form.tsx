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
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Submit triggered", values);
        setIsLoading(true);
        setError(null);

        try {
            console.log("Calling signIn...");
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });
            console.log("signIn result:", result);

            setIsLoading(false);

            if (result?.error) {
                console.error("Login Error:", result.error);
                setError("Geçersiz e-posta veya şifre.");
                import("sonner").then(({ toast }) => toast.error("Giriş Başarısız: " + result.error));
            } else if (result?.ok) {
                import("sonner").then(({ toast }) => toast.success("Giriş başarılı! Yönlendiriliyorsunuz..."));
                // Force a hard redirect to ensure cookies are properly updated for the server session
                window.location.href = "/admin/dashboard";
            }
        } catch (err: any) {
            console.error("Critical Login Error:", err);
            setIsLoading(false);
            setError("Bir hata oluştu. Lütfen tekrar deneyin.");
            import("sonner").then(({ toast }) => toast.error("Sistem Hatası: " + err.message));
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
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...form.register("email")}
                        />
                        {form.formState.errors.email && (
                            <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                            autoComplete="current-password"
                            disabled={isLoading}
                            {...form.register("password")}
                        />
                        {form.formState.errors.password && (
                            <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
                        )}
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <Button disabled={isLoading}>
                        {isLoading && <Spinner />}
                        Sign In with Email
                    </Button>
                </div>
            </form>
        </div>
    );
}
