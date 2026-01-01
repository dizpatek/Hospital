import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const procedures = [
        {
            name: "Fraksiyonel Lazer Cilt Yenileme",
            slug: "fraksiyonel-lazer",
            icon: "Zap", // Lucide icon name
            summary: "Akne izleri, kırışıklıklar ve cilt tonu eşitsizlikleri için devrim niteliğinde lazer teknolojisi.",
            why: "Akne izleri, kırışıklıklar ve cilt tonu eşitsizlikleri için",
            how: "İşlem öncesinde cilde lokal anestezik krem uygulanır. Lazer başlığı cilde temas ettirilerek atışlar yapılır.",
            sideEffects: "İşlem sonrası 1-3 gün kızarıklık ve ödem, 3-7 gün arasında hafif kabuklanma görülebilir.",
            faq: JSON.stringify([{question: "Tedavi ne kadar sürer?", answer: "İşlem yaklaşık 20-40 dakika sürer."}]),
            treatmentCategoryId: "", // This will need to be set properly
            status: "PUBLISHED",
            seoTitle: "Fraksiyonel Lazer Tedavisi | Leke ve İz Tedavisi",
            seoDesc: "Fraksiyonel lazer ile cilt yenileme, sivilce izi tedavisi ve kırışıklık giderme işlemleri hakkında detaylı bilgi, fiyatlar ve süreç rehberi."
        },
        {
            name: "Hyaluronik Asit Dolgu",
            slug: "hyaluronik-asit-dolgu",
            icon: "Syringe",
            summary: "Dudak, elmacık ve çene hattı şekillendirme için anında etkili dolgu uygulamaları.",
            why: "Yüz hatlarını belirginleştirmek ve hacim kaybını gidermek için",
            how: "Uygulama öncesi lokal anestezi uygulanır ve ince iğne ile dolgu maddesi enjekte edilir.",
            sideEffects: "Enjeksiyon bölgelerinde geçici morluklar ve ödem oluşabilir.",
            faq: JSON.stringify([{question: "Kalıcılık süresi nedir?", answer: "Ortalama 6-12 ay arasında değişir."}]),
            treatmentCategoryId: "", // This will need to be set properly
            status: "PUBLISHED",
            seoTitle: "Dudak ve Yüz Dolgusu | Hyaluronik Asit Uygulamaları",
            seoDesc: "Yüz hatlarını belirginleştirmek ve hacim kaybını gidermek için yapılan dolgu işlemleri, kalıcılık süreleri ve uygulama detayları."
        },
        {
            name: "PRP Tedavisi (Vampir Yüz Germe)",
            slug: "prp-tedavisi",
            icon: "Droplets", // Lucide icon name
            summary: "Kendi kanınızla gelen güzellik. Saç dökülmesi ve cilt gençleştirme için doğal çözüm.",
            why: "Saç dökülmesi ve cilt gençleştirme için",
            how: "Kişinin kendi kanından elde edilen plazmanın trombosit hücreleri bakımından zenginleştirilerek tekrar kişiye enjekte edilmesidir.",
            sideEffects: "Nadiren enjeksiyon yerlerinde geçici morluk oluşabilir.",
            faq: JSON.stringify([{question: "Tedavi kaç seans sürer?", answer: "Genellikle 3-4 seans önerilir."}]),
            treatmentCategoryId: "", // This will need to be set properly
            status: "PUBLISHED",
            seoTitle: "PRP Saç ve Cilt Tedavisi | Doğal Gençleşme",
            seoDesc: "Kişinin kendi kanından elde edilen plazma ile yapılan PRP tedavisi, saç dökülmesi ve cilt yenileme üzerindeki etkileri."
        }
    ]

    console.log('Seed işlemi başlıyor...')

    for (const proc of procedures) {
        await prisma.procedure.upsert({
            where: { slug: proc.slug },
            update: proc,
            create: proc,
        })
    }

    console.log('Veritabanı başarıyla güncellendi!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })