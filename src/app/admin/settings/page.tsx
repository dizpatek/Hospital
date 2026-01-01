"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Palette, User, Globe, Mail, Code } from "lucide-react";
import { toast } from "sonner";

const passwordSchema = z.object({
    currentPassword: z.string().min(1, "Mevcut şifre gerekli"),
    newPassword: z.string().min(8, "Yeni şifre en az 8 karakter olmalı"),
    confirmPassword: z.string().min(1, "Şifre onayı gerekli"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Şifreler eşleşmiyor",
    path: ["confirmPassword"],
});

const siteSettingsSchema = z.object({
    siteName: z.string().min(1, "Site adı gerekli"),
    siteDescription: z.string().optional(),
    primaryColor: z.string().min(1, "Ana renk gerekli"),
    secondaryColor: z.string().min(1, "İkincil renk gerekli"),
    contactEmail: z.string().email("Geçerli bir email girin").optional().or(z.literal("")),
    contactPhone: z.string().optional(),
    whatsappNumber: z.string().optional(),
    address: z.string().optional(),
});

const socialMediaSchema = z.object({
    facebookUrl: z.string().url("Geçerli bir URL girin").optional().or(z.literal("")),
    instagramUrl: z.string().url("Geçerli bir URL girin").optional().or(z.literal("")),
    twitterUrl: z.string().url("Geçerli bir URL girin").optional().or(z.literal("")),
    linkedinUrl: z.string().url("Geçerli bir URL girin").optional().or(z.literal("")),
});

const seoSchema = z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    metaKeywords: z.string().optional(),
    googleAnalyticsId: z.string().optional(),
});

export default function SettingsPage() {
    const [loading, setLoading] = useState(false);
    const [settings, setSettings] = useState<any>(null);
    const [scriptLoading, setScriptLoading] = useState<string | null>(null);
    const [scriptResult, setScriptResult] = useState<{ script: string; success: boolean; output: string } | null>(null);

    const passwordForm = useForm({
        resolver: zodResolver(passwordSchema),
    });

    const siteForm = useForm({
        resolver: zodResolver(siteSettingsSchema),
    });

    const socialForm = useForm({
        resolver: zodResolver(socialMediaSchema),
    });

    const seoForm = useForm({
        resolver: zodResolver(seoSchema),
    });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/admin/settings');
                const result = await res.json();
                if (result.success) {
                    const data = result.data;
                    siteForm.reset({
                        siteName: data.siteName || '',
                        siteDescription: data.siteDescription || '',
                        primaryColor: data.primaryColor || '#0ea5e9',
                        secondaryColor: data.secondaryColor || '#8b5cf6',
                        contactEmail: data.contactEmail || '',
                        contactPhone: data.contactPhone || '',
                        whatsappNumber: data.whatsappNumber || '',
                        address: data.address || '',
                    });
                    socialForm.reset({
                        facebookUrl: data.facebookUrl || '',
                        instagramUrl: data.instagramUrl || '',
                        twitterUrl: data.twitterUrl || '',
                        linkedinUrl: data.linkedinUrl || '',
                    });
                    seoForm.reset({
                        metaTitle: data.metaTitle || '',
                        metaDescription: data.metaDescription || '',
                        metaKeywords: data.metaKeywords || '',
                        googleAnalyticsId: data.googleAnalyticsId || '',
                    });
                }
            } catch (error) {
                console.error('Failed to fetch settings:', error);
            }
        };
        fetchSettings();
    }, []);

    const onPasswordSubmit = async (data: z.infer<typeof passwordSchema>) => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Şifre başarıyla değiştirildi");
                passwordForm.reset();
            } else {
                toast.error(result.message || "Şifre değiştirilemedi");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    const onSiteSettingsSubmit = async (data: z.infer<typeof siteSettingsSchema>) => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Ayarlar kaydedildi");
            } else {
                toast.error("Ayarlar kaydedilemedi");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    const onSocialMediaSubmit = async (data: z.infer<typeof socialMediaSchema>) => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Sosyal medya ayarları kaydedildi");
            } else {
                toast.error("Ayarlar kaydedilemedi");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    const onSeoSubmit = async (data: z.infer<typeof seoSchema>) => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("SEO ayarları kaydedildi");
            } else {
                toast.error("Ayarlar kaydedilemedi");
            }
        } catch (error) {
            toast.error("Bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    const runScript = async (scriptName: string) => {
        setScriptLoading(scriptName);
        setScriptResult(null);
        try {
            const res = await fetch(`/api/admin/scripts/${scriptName}`, {
                method: "POST",
            });

            const result = await res.json();

            setScriptResult({
                script: scriptName,
                success: result.success,
                output: result.output || result.error || 'No output',
            });

            if (result.success) {
                toast.success(`${scriptName} script executed successfully`);
            } else {
                toast.error(`${scriptName} script failed`);
            }
        } catch (error) {
            setScriptResult({
                script: scriptName,
                success: false,
                output: 'Network error or script execution failed',
            });
            toast.error("Script execution failed");
        } finally {
            setScriptLoading(null);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-black text-white mb-2">Ayarlar</h1>
                <p className="text-zinc-400">Site ve hesap ayarlarınızı yönetin</p>
            </div>

            <Tabs defaultValue="general" className="space-y-6">
                <TabsList className="bg-zinc-900 border border-white/5">
                    <TabsTrigger value="general" className="data-[state=active]:bg-primary">
                        <Settings className="w-4 h-4 mr-2" />
                        Genel
                    </TabsTrigger>
                    <TabsTrigger value="appearance" className="data-[state=active]:bg-primary">
                        <Palette className="w-4 h-4 mr-2" />
                        Görünüm
                    </TabsTrigger>
                    <TabsTrigger value="social" className="data-[state=active]:bg-primary">
                        <Globe className="w-4 h-4 mr-2" />
                        Sosyal Medya
                    </TabsTrigger>
                    <TabsTrigger value="seo" className="data-[state=active]:bg-primary">
                        <Mail className="w-4 h-4 mr-2" />
                        SEO
                    </TabsTrigger>
                    <TabsTrigger value="account" className="data-[state=active]:bg-primary">
                        <User className="w-4 h-4 mr-2" />
                        Hesap
                    </TabsTrigger>
                    <TabsTrigger value="scripts" className="data-[state=active]:bg-primary">
                        <Code className="w-4 h-4 mr-2" />
                        Scripts
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-6">
                    <Card className="bg-zinc-900 border-white/5">
                        <CardHeader>
                            <CardTitle>Site Bilgileri</CardTitle>
                            <CardDescription>Sitenizin temel bilgilerini düzenleyin</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={siteForm.handleSubmit(onSiteSettingsSubmit)} className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="siteName">Site Adı</Label>
                                        <Input id="siteName" {...siteForm.register("siteName")} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="contactEmail">İletişim Email</Label>
                                        <Input id="contactEmail" type="email" {...siteForm.register("contactEmail")} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="contactPhone">Telefon</Label>
                                        <Input id="contactPhone" {...siteForm.register("contactPhone")} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="whatsappNumber">WhatsApp Numarası</Label>
                                        <Input id="whatsappNumber" {...siteForm.register("whatsappNumber")} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="siteDescription">Site Açıklaması</Label>
                                    <Input id="siteDescription" {...siteForm.register("siteDescription")} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Adres</Label>
                                    <Input id="address" {...siteForm.register("address")} />
                                </div>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Kaydediliyor..." : "Kaydet"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="appearance" className="space-y-6">
                    <Card className="bg-zinc-900 border-white/5">
                        <CardHeader>
                            <CardTitle>Renk Ayarları</CardTitle>
                            <CardDescription>Site renklerini özelleştirin</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={siteForm.handleSubmit(onSiteSettingsSubmit)} className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="primaryColor">Ana Renk</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                id="primaryColor"
                                                type="color"
                                                className="w-20 h-10"
                                                {...siteForm.register("primaryColor")}
                                            />
                                            <Input
                                                type="text"
                                                className="flex-1"
                                                {...siteForm.register("primaryColor")}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="secondaryColor">İkincil Renk</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                id="secondaryColor"
                                                type="color"
                                                className="w-20 h-10"
                                                {...siteForm.register("secondaryColor")}
                                            />
                                            <Input
                                                type="text"
                                                className="flex-1"
                                                {...siteForm.register("secondaryColor")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Kaydediliyor..." : "Kaydet"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="social" className="space-y-6">
                    <Card className="bg-zinc-900 border-white/5">
                        <CardHeader>
                            <CardTitle>Sosyal Medya Bağlantıları</CardTitle>
                            <CardDescription>Sosyal medya hesaplarınızı ekleyin</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={socialForm.handleSubmit(onSocialMediaSubmit)} className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="facebookUrl">Facebook URL</Label>
                                        <Input id="facebookUrl" placeholder="https://facebook.com/..." {...socialForm.register("facebookUrl")} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="instagramUrl">Instagram URL</Label>
                                        <Input id="instagramUrl" placeholder="https://instagram.com/..." {...socialForm.register("instagramUrl")} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="twitterUrl">Twitter URL</Label>
                                        <Input id="twitterUrl" placeholder="https://twitter.com/..." {...socialForm.register("twitterUrl")} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                                        <Input id="linkedinUrl" placeholder="https://linkedin.com/..." {...socialForm.register("linkedinUrl")} />
                                    </div>
                                </div>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Kaydediliyor..." : "Kaydet"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="seo" className="space-y-6">
                    <Card className="bg-zinc-900 border-white/5">
                        <CardHeader>
                            <CardTitle>SEO Ayarları</CardTitle>
                            <CardDescription>Arama motoru optimizasyonu ayarları</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={seoForm.handleSubmit(onSeoSubmit)} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="metaTitle">Meta Başlık</Label>
                                    <Input id="metaTitle" {...seoForm.register("metaTitle")} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="metaDescription">Meta Açıklama</Label>
                                    <Input id="metaDescription" {...seoForm.register("metaDescription")} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="metaKeywords">Anahtar Kelimeler (virgülle ayırın)</Label>
                                    <Input id="metaKeywords" {...seoForm.register("metaKeywords")} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                                    <Input id="googleAnalyticsId" placeholder="G-XXXXXXXXXX" {...seoForm.register("googleAnalyticsId")} />
                                </div>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Kaydediliyor..." : "Kaydet"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="account" className="space-y-6">
                    <Card className="bg-zinc-900 border-white/5">
                        <CardHeader>
                            <CardTitle>Şifre Değiştir</CardTitle>
                            <CardDescription>Hesap şifrenizi güncelleyin</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="currentPassword">Mevcut Şifre</Label>
                                    <Input
                                        id="currentPassword"
                                        type="password"
                                        {...passwordForm.register("currentPassword")}
                                    />
                                    {passwordForm.formState.errors.currentPassword && (
                                        <p className="text-sm text-red-500">{passwordForm.formState.errors.currentPassword.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="newPassword">Yeni Şifre</Label>
                                    <Input
                                        id="newPassword"
                                        type="password"
                                        {...passwordForm.register("newPassword")}
                                    />
                                    {passwordForm.formState.errors.newPassword && (
                                        <p className="text-sm text-red-500">{passwordForm.formState.errors.newPassword.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Yeni Şifre (Tekrar)</Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        {...passwordForm.register("confirmPassword")}
                                    />
                                    {passwordForm.formState.errors.confirmPassword && (
                                        <p className="text-sm text-red-500">{passwordForm.formState.errors.confirmPassword.message}</p>
                                    )}
                                </div>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Değiştiriliyor..." : "Şifreyi Değiştir"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="scripts" className="space-y-6">
                    <Card className="bg-zinc-900 border-white/5">
                        <CardHeader>
                            <CardTitle>Script Yönetimi</CardTitle>
                            <CardDescription>Sistem scriptlerini çalıştırın</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>Add Blogs</Label>
                                    <p className="text-sm text-zinc-400">Demo blog yazıları ekler</p>
                                    <Button
                                        onClick={() => runScript('add-blogs')}
                                        disabled={scriptLoading === 'add-blogs'}
                                        className="w-full"
                                    >
                                        {scriptLoading === 'add-blogs' ? 'Çalışıyor...' : 'Çalıştır'}
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    <Label>Configuration Wizard</Label>
                                    <p className="text-sm text-zinc-400">Environment değişkenlerini yapılandırır (dry-run)</p>
                                    <Button
                                        onClick={() => runScript('conf-wiz')}
                                        disabled={scriptLoading === 'conf-wiz'}
                                        className="w-full"
                                    >
                                        {scriptLoading === 'conf-wiz' ? 'Çalışıyor...' : 'Çalıştır'}
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    <Label>Create Admin</Label>
                                    <p className="text-sm text-zinc-400">Admin kullanıcısı oluşturur</p>
                                    <Button
                                        onClick={() => runScript('create-admin')}
                                        disabled={scriptLoading === 'create-admin'}
                                        className="w-full"
                                    >
                                        {scriptLoading === 'create-admin' ? 'Çalışıyor...' : 'Çalıştır'}
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    <Label>Deploy to Vercel</Label>
                                    <p className="text-sm text-zinc-400">Projeyi Vercel'e deploy eder</p>
                                    <Button
                                        onClick={() => runScript('deploy-vercel')}
                                        disabled={scriptLoading === 'deploy-vercel'}
                                        className="w-full"
                                    >
                                        {scriptLoading === 'deploy-vercel' ? 'Çalışıyor...' : 'Çalıştır'}
                                    </Button>
                                </div>
                            </div>
                            {scriptResult && (
                                <div className="mt-6">
                                    <Label>Sonuç ({scriptResult.script})</Label>
                                    <pre className={`mt-2 p-4 rounded-md text-sm overflow-auto max-h-96 ${scriptResult.success ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'
                                        }`}>
                                        {scriptResult.output}
                                    </pre>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
