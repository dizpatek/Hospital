'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'

interface FAQ {
    id: string
    question: string
    answer: string
    isGlobal: boolean
}

interface FAQFormProps {
    faq?: FAQ
}

export default function FAQForm({ faq }: FAQFormProps) {
    const router = useRouter()
    const [isGlobal, setIsGlobal] = useState(faq?.isGlobal ?? false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            question: formData.get('question') as string,
            answer: formData.get('answer') as string,
            isGlobal,
        }

        const url = faq ? `/api/admin/faq/${faq.id}` : '/api/admin/faq'
        const method = faq ? 'PUT' : 'POST'

        const res = await fetch(url, {
            method,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })

        if (res.ok) {
            toast.success(faq ? 'FAQ güncellendi' : 'FAQ oluşturuldu')
            router.push('/admin/faq')
        } else {
            toast.error('Hata oluştu')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="question" className="block text-sm font-medium text-zinc-200">
                    Soru
                </label>
                <Input
                    id="question"
                    name="question"
                    defaultValue={faq?.question}
                    required
                    className="bg-zinc-800 border-zinc-700 text-zinc-100"
                />
            </div>
            <div>
                <label htmlFor="answer" className="block text-sm font-medium text-zinc-200">
                    Cevap
                </label>
                <Textarea
                    id="answer"
                    name="answer"
                    defaultValue={faq?.answer}
                    required
                    className="bg-zinc-800 border-zinc-700 text-zinc-100"
                />
            </div>
            <div className="flex items-center space-x-2">
                <Switch
                    id="isGlobal"
                    checked={isGlobal}
                    onCheckedChange={setIsGlobal}
                />
                <label htmlFor="isGlobal" className="text-sm font-medium text-zinc-200">
                    Genel FAQ
                </label>
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                {faq ? 'Güncelle' : 'Oluştur'}
            </Button>
        </form>
    )
}