'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Calendar, X } from 'lucide-react'
import { useState } from 'react'

export default function AppointmentModal({ procedureTitle }: { procedureTitle: string }) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Calendar className="w-5 h-5" /> Randevu Oluştur
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" />
                <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex justify-between items-center mb-4">
                        <Dialog.Title className="text-xl font-bold text-slate-900">Randevu Alın</Dialog.Title>
                        <Dialog.Close className="text-slate-400 hover:text-slate-600">
                            <X className="w-5 h-5" />
                        </Dialog.Close>
                    </div>

                    <div className="mb-6">
                        <p className="text-slate-600 text-sm">
                            <span className="font-semibold text-blue-600">{procedureTitle}</span> işlemi için ön görüşme veya tedavi randevusu oluşturun.
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Randevu talebiniz alındı!'); setOpen(false); }}>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Ad Soyad</label>
                            <input required type="text" className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Adınız Soyadınız" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Telefon</label>
                            <input required type="tel" className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0555 000 00 00" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Tarih Tercihi</label>
                            <input type="date" className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>

                        <div className="pt-2">
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                                Randevuyu Onayla
                            </button>
                        </div>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}