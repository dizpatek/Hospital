'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X, Loader2 } from 'lucide-react'
import { createProcedure, procedureSchema } from '@/actions/procedures'
import { z } from 'zod'

type FormData = z.infer<typeof procedureSchema>

export default function CreateProcedureModal() {
    const [open, setOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(procedureSchema)
    })

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        
        const res = await createProcedure({}, data)
        setIsSubmitting(false)

        if (!res.errors) {
            setOpen(false)
            reset()
            // Burada bir toast bildirimi gösterilebilir
        } else {
            alert('Hata oluştu: ' + res.message)
        }
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-lg shadow-blue-900/20 text-sm font-medium transition-colors">
                    <Plus className="w-4 h-4" /> Yeni İşlem Ekle
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto text-slate-200">
                    <div className="flex justify-between items-center mb-6">
                        <Dialog.Title className="text-xl font-bold text-white">Yeni Prosedür Ekle</Dialog.Title>
                        <Dialog.Close className="text-slate-400 hover:text-white">
                            <X className="w-5 h-5" />
                        </Dialog.Close>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Name</label>
                                <input {...register('name')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none" placeholder="Örn: Botoks" />
                                {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Slug (URL)</label>
                                <input {...register('slug')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none" placeholder="orn-botoks" />
                                {errors.slug && <p className="text-red-400 text-xs">{errors.slug.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">İkon (Lucide)</label>
                                <input {...register('icon')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none" placeholder="Activity" />
                                {errors.icon && <p className="text-red-400 text-xs">{errors.icon.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Görsel URL</label>

                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Summary</label>
                            <textarea {...register('summary')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none h-20" placeholder="Kartlarda görünecek kısa açıklama..." />
                            {errors.summary && <p className="text-red-400 text-xs">{errors.summary.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Why</label>
                            <textarea {...register('why')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none h-20" placeholder="Why this procedure..." />
                            {errors.why && <p className="text-red-400 text-xs">{errors.why.message}</p>}
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">How</label>
                            <textarea {...register('how')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none h-20" placeholder="How the procedure works..." />
                            {errors.how && <p className="text-red-400 text-xs">{errors.how.message}</p>}
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Side Effects</label>
                            <textarea {...register('sideEffects')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none h-20" placeholder="Potential side effects..." />
                            {errors.sideEffects && <p className="text-red-400 text-xs">{errors.sideEffects.message}</p>}
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">FAQ (JSON format)</label>
                            <textarea {...register('faq')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none h-20 font-mono" placeholder='{"question": "answer"}' />
                            {errors.faq && <p className="text-red-400 text-xs">{errors.faq.message}</p>}
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Treatment Category ID</label>
                            <input {...register('treatmentCategoryId')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none" placeholder="Category ID" />
                            {errors.treatmentCategoryId && <p className="text-red-400 text-xs">{errors.treatmentCategoryId.message}</p>}
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Status</label>
                            <select {...register('status')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none">
                                <option value="DRAFT">Draft</option>
                                <option value="PUBLISHED">Published</option>
                                <option value="ARCHIVED">Archived</option>
                            </select>
                            {errors.status && <p className="text-red-400 text-xs">{errors.status.message}</p>}
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">SEO Title</label>
                            <input {...register('seoTitle')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none" placeholder="SEO Title" />
                            {errors.seoTitle && <p className="text-red-400 text-xs">{errors.seoTitle.message}</p>}
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">SEO Description</label>
                            <textarea {...register('seoDesc')} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm focus:border-blue-500 outline-none h-20" placeholder="SEO Description" />
                            {errors.seoDesc && <p className="text-red-400 text-xs">{errors.seoDesc.message}</p>}
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <Dialog.Close asChild>
                                <button type="button" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm font-medium transition-colors">İptal</button>
                            </Dialog.Close>
                            <button disabled={isSubmitting} type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium text-white transition-colors flex items-center gap-2">
                                {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                                {isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}
                            </button>
                        </div>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}