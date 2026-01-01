import { PrismaClient } from '@prisma/client'
import * as Icons from 'lucide-react'
// Not: CreateProcedureModal bileşeninizin components/admin klasöründe olması önerilir.
// Eğer prisma klasöründeyse, lütfen components/admin/CreateProcedureModal.tsx konumuna taşıyın.
import CreateProcedureModal from '@/components/admin/CreateProcedureModal'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export default async function AdminProceduresPage() {
    const procedures = await prisma.procedure.findMany({
        orderBy: { updatedAt: 'desc' }
    })

    // İstatistikler (Örnek verilerle zenginleştirildi)
    const stats = [
        { label: 'Toplam İşlem', value: procedures.length, icon: 'Activity', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Aktif Randevular', value: '124', icon: 'Calendar', color: 'text-green-500', bg: 'bg-green-500/10' },
        { label: 'Sayfa Görüntülenme', value: '45.2k', icon: 'Eye', color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { label: 'Dönüşüm Oranı', value: '%12.5', icon: 'TrendingUp', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    ]

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex">

            {/* SOL MENÜ (SIDEBAR) - "Binlerce Düğme" Hissi */}
            <aside className="w-72 border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl hidden md:flex flex-col fixed h-full z-10">
                <div className="h-16 flex items-center px-6 border-b border-slate-800">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white mr-3 shadow-lg shadow-blue-600/20">H</div>
                    <span className="font-bold text-lg tracking-wide text-white">HOSPITAL<span className="text-blue-500">ADMIN</span></span>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 custom-scrollbar">
                    <div>
                        <div className="text-xs font-bold text-slate-500 uppercase px-2 mb-3 tracking-wider">Yönetim Paneli</div>
                        <nav className="space-y-1">
                            {['Dashboard', 'Analizler', 'Canlı İzleme'].map((item) => (
                                <button key={item} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all group">
                                    <Icons.LayoutDashboard className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                    <span className="text-sm font-medium">{item}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <div className="text-xs font-bold text-slate-500 uppercase px-2 mb-3 tracking-wider">İçerik Yönetimi</div>
                        <nav className="space-y-1">
                            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-600/20 shadow-sm">
                                <Icons.Stethoscope className="w-4 h-4" />
                                <span className="text-sm font-medium">Prosedürler</span>
                                <span className="ml-auto text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">{procedures.length}</span>
                            </button>
                            {['Blog Yazıları', 'Doktorlar', 'Kategoriler', 'Medya Kütüphanesi', 'Yorumlar'].map((item) => (
                                <button key={item} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all group">
                                    <Icons.FileText className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                    <span className="text-sm font-medium">{item}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <div className="text-xs font-bold text-slate-500 uppercase px-2 mb-3 tracking-wider">Sistem & Ayarlar</div>
                        <nav className="space-y-1">
                            {['Kullanıcılar', 'Roller & İzinler', 'SEO Ayarları', 'API Entegrasyonları', 'Log Kayıtları', 'Yedekleme'].map((item) => (
                                <button key={item} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all group">
                                    <Icons.Settings className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                    <span className="text-sm font-medium">{item}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="p-4 border-t border-slate-800 bg-slate-900/80">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 border-2 border-slate-800"></div>
                        <div>
                            <div className="text-sm font-bold text-white">Admin User</div>
                            <div className="text-xs text-slate-500">Süper Yönetici</div>
                        </div>
                        <button className="ml-auto p-2 hover:bg-slate-800 rounded-full text-slate-400"><Icons.LogOut className="w-4 h-4" /></button>
                    </div>
                </div>
            </aside>

            {/* ANA İÇERİK */}
            <main className="flex-1 md:ml-72 min-h-screen bg-slate-950">
                {/* Üst Bar */}
                <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-8">
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                        <span className="hover:text-white cursor-pointer">Ana Sayfa</span>
                        <Icons.ChevronRight className="w-4 h-4" />
                        <span className="hover:text-white cursor-pointer">İçerik</span>
                        <Icons.ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium">Prosedürler</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Icons.Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input type="text" placeholder="Genel arama..." className="bg-slate-900 border border-slate-800 rounded-full pl-10 pr-4 py-1.5 text-sm text-slate-300 focus:outline-none focus:border-blue-500 w-64 transition-all" />
                        </div>
                        <button className="p-2 hover:bg-slate-800 rounded-full text-slate-400 relative">
                            <Icons.Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
                        </button>
                    </div>
                </header>

                <div className="p-8 space-y-8">
                    {/* Başlık ve Aksiyonlar */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Prosedür Yönetimi</h1>
                            <p className="text-slate-400">Web sitesindeki tıbbi işlem ve hizmetleri buradan yönetebilirsiniz.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 text-slate-300 text-sm font-medium transition-all">
                                <Icons.Download className="w-4 h-4" /> Dışa Aktar
                            </button>
                            <CreateProcedureModal />
                        </div>
                    </div>

                    {/* İstatistik Kartları */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-all group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                        {/* Dinamik İkon */}
                                        {(() => { const Icon = (Icons as any)[stat.icon]; return <Icon className="w-6 h-6" /> })()}
                                    </div>
                                    <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">+2.4%</span>
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Gelişmiş Tablo */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                        <div className="p-4 border-b border-slate-800 flex items-center gap-4">
                            <button className="text-sm font-medium text-white border-b-2 border-blue-500 pb-4 -mb-4.5 px-2">Tüm İşlemler</button>
                            <button className="text-sm font-medium text-slate-500 hover:text-slate-300 pb-4 -mb-4 px-2">Taslaklar</button>
                            <button className="text-sm font-medium text-slate-500 hover:text-slate-300 pb-4 -mb-4 px-2">Arşiv</button>
                            <div className="ml-auto flex items-center gap-2">
                                <button className="p-2 hover:bg-slate-800 rounded text-slate-400"><Icons.Filter className="w-4 h-4" /></button>
                                <button className="p-2 hover:bg-slate-800 rounded text-slate-400"><Icons.MoreVertical className="w-4 h-4" /></button>
                            </div>
                        </div>

                        <table className="w-full text-left text-sm text-slate-400">
                            <thead className="bg-slate-950/50 text-slate-500 uppercase text-xs font-semibold tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">İşlem Detayları</th>
                                    <th className="px-6 py-4">URL / Slug</th>
                                    <th className="px-6 py-4">Durum</th>
                                    <th className="px-6 py-4">Son Güncelleme</th>
                                    <th className="px-6 py-4 text-right">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {procedures.map((proc) => (
                                    <tr key={proc.id} className="hover:bg-slate-800/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 overflow-hidden flex-shrink-0">
                                                    {proc.imageUrl ? (
                                                        <img src={proc.imageUrl} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-slate-600"><Icons.Image className="w-5 h-5" /></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-white text-base mb-0.5">{proc.title}</div>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <span className="flex items-center gap-1 bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">
                                                            <Icons.Box className="w-3 h-3" /> {proc.icon}
                                                        </span>
                                                        <span className="text-slate-500 truncate max-w-[150px]">{proc.summary}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="bg-slate-950 border border-slate-800 px-2 py-1 rounded text-xs text-blue-400 font-mono">/{proc.slug}</code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Yayında
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">
                                            {new Date(proc.updatedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 hover:bg-blue-500/20 hover:text-blue-400 rounded-lg transition-colors" title="Düzenle">
                                                    <Icons.Edit3 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors" title="Sil">
                                                    <Icons.Trash2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors">
                                                    <Icons.MoreHorizontal className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between bg-slate-900/50">
                            <span className="text-sm text-slate-500">Toplam <span className="text-white font-medium">{procedures.length}</span> kayıttan <span className="text-white font-medium">1-{procedures.length}</span> arası gösteriliyor</span>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 border border-slate-700 rounded hover:bg-slate-800 text-slate-400 text-sm disabled:opacity-50" disabled>Önceki</button>
                                <button className="px-3 py-1.5 border border-slate-700 rounded hover:bg-slate-800 text-slate-400 text-sm disabled:opacity-50" disabled>Sonraki</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}