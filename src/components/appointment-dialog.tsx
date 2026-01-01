"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createAppointmentRequest } from "@/actions/appointments";

const AppointmentSchema = z.object({
    name: z.string().min(2, "Lütfen adınızı giriniz"),
    phone: z.string().min(10, "Geçerli bir telefon numarası giriniz (en az 10 hane)"),
    message: z.string().optional(),
});

interface AppointmentDialogProps {
    children: React.ReactNode;
}

export function AppointmentDialog({ children }: AppointmentDialogProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof AppointmentSchema>>({
        resolver: zodResolver(AppointmentSchema),
        defaultValues: {
            name: "",
            phone: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof AppointmentSchema>) {
        setLoading(true);
        try {
            // Transform the form data to match what the server action expects
            const appointmentData = {
                name: values.name,
                phone: values.phone,
                message: values.message,
            };
            
            const result = await createAppointmentRequest(appointmentData);
            if (result.success) {
                toast.success(result.message);
                setOpen(false);
                form.reset();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] rounded-[2rem] bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">Randevu Al</DialogTitle>
                    <DialogDescription className="text-slate-500 dark:text-slate-400">
                        Bilgilerinizi bırakın, uzman ekibimiz size en kısa sürede dönüş yapsın.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold">Ad Soyad</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Adınızı ve soyadınızı giriniz" className="rounded-xl h-12 bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold">Telefon</FormLabel>
                                    <FormControl>
                                        <Input placeholder="05XX XXX XX XX" className="rounded-xl h-12 bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold">Notunuz</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Eklemek istediğiniz bilgileri buraya yazabilirsiniz." className="rounded-xl min-h-[100px] bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button disabled={loading} type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all active:scale-[0.98]">
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Gönderiliyor...
                                </>
                            ) : (
                                "Randevu Talebini Gönder"
                            )}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
