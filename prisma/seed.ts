import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const procedures = [
        {
            title: "Fraksiyonel Lazer Cilt Yenileme",
            slug: "fraksiyonel-lazer",
            icon: "Zap", // Lucide icon name
            imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
            summary: "Akne izleri, kırışıklıklar ve cilt tonu eşitsizlikleri için devrim niteliğinde lazer teknolojisi.",
            seoTitle: "Fraksiyonel Lazer Tedavisi | Leke ve İz Tedavisi",
            seoDesc: "Fraksiyonel lazer ile cilt yenileme, sivilce izi tedavisi ve kırışıklık giderme işlemleri hakkında detaylı bilgi, fiyatlar ve süreç rehberi.",
            content: `
        <h2><i class="fas fa-question-circle"></i> Fraksiyonel Lazer Nedir?</h2>
        <p>Fraksiyonel lazer, cildin hem üst tabakasına (epidermis) hem de alt tabakasına (dermis) etki ederek, kontrollü mikro hasarlar oluşturan gelişmiş bir cilt yenileme teknolojisidir. Bu işlem, cildin doğal iyileşme mekanizmasını tetikleyerek yeni kolajen üretimini başlatır. "Fraksiyonel" terimi, lazer ışınının cilde bütünsel değil, süzgeç gibi küçük sütunlar halinde gönderilmesini ifade eder.</p>
        
        <h2><i class="fas fa-bullseye"></i> Neden Yapılır?</h2>
        <ul>
            <li><strong>Akne ve Yara İzleri:</strong> Derinleşmiş sivilce izlerinin (skarların) görünümünü hafifletmek.</li>
            <li><strong>Kırışıklık Tedavisi:</strong> İnce çizgilerin ve derin kırışıklıkların açılması.</li>
            <li><strong>Cilt Tonu Eşitsizliği:</strong> Güneş lekeleri ve yaşlılık lekelerinin giderilmesi.</li>
        </ul>

        <h2><i class="fas fa-cogs"></i> Nasıl Uygulanır?</h2>
        <p>İşlem öncesinde cilde lokal anestezik krem uygulanır. Lazer başlığı cilde temas ettirilerek atışlar yapılır. İşlem yaklaşık 20-40 dakika sürer. İşlem sırasında hafif bir yanma hissi normaldir ancak soğutucu başlıklarla bu his minimize edilir.</p>

        <div class="bg-yellow-50 p-4 border-l-4 border-yellow-500 my-4">
            <h3 class="text-yellow-700 font-bold">Yan Etkiler ve İyileşme</h3>
            <p>İşlem sonrası 1-3 gün kızarıklık ve ödem, 3-7 gün arasında ise hafif kabuklanma görülür. Bu süreçte güneşten korunmak hayati önem taşır.</p>
        </div>
      `
        },
        {
            title: "Hyaluronik Asit Dolgu",
            slug: "hyaluronik-asit-dolgu",
            icon: "Syringe",
            imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            summary: "Dudak, elmacık ve çene hattı şekillendirme için anında etkili dolgu uygulamaları.",
            seoTitle: "Dudak ve Yüz Dolgusu | Hyaluronik Asit Uygulamaları",
            seoDesc: "Yüz hatlarını belirginleştirmek ve hacim kaybını gidermek için yapılan dolgu işlemleri, kalıcılık süreleri ve uygulama detayları.",
            content: `
        <h2><i class="fas fa-magic"></i> Dolgu Uygulaması Nedir?</h2>
        <p>Hyaluronik asit, vücudumuzda doğal olarak bulunan ve cilde nem ile hacim veren bir maddedir. Laboratuvar ortamında hazırlanan çapraz bağlı hyaluronik asit jellerinin, cilt altına enjekte edilmesi işlemine dolgu uygulaması denir.</p>

        <h2><i class="fas fa-search-plus"></i> Hangi Bölgelere Uygulanır?</h2>
        <ul>
            <li><strong>Dudak:</strong> Hacim ve kontür kazandırma.</li>
            <li><strong>Elmacık Kemikleri:</strong> Yüzü yukarı kaldırma (lifting) etkisi.</li>
            <li><strong>Jawline (Çene Hattı):</strong> Daha keskin ve maskülen/feminen hatlar.</li>
            <li><strong>Göz Altı:</strong> Çöküklük ve morluk tedavisi (Işık dolgusu).</li>
        </ul>

        <h2><i class="fas fa-exclamation-triangle"></i> Yan Etkiler</h2>
        <p>Enjeksiyon bölgelerinde geçici morluklar ve ödem oluşabilir. Nadiren asimetri görülebilir ancak rötuş seansları ile düzeltilebilir.</p>
      `
        },
        {
            title: "PRP Tedavisi (Vampir Yüz Germe)",
            slug: "prp-tedavisi",
            icon: "Droplets", // Lucide icon name
            imageUrl: "https://images.unsplash.com/photo-1609188076864-c35269136b09?auto=format&fit=crop&q=80&w=800",
            summary: "Kendi kanınızla gelen güzellik. Saç dökülmesi ve cilt gençleştirme için doğal çözüm.",
            seoTitle: "PRP Saç ve Cilt Tedavisi | Doğal Gençleşme",
            seoDesc: "Kişinin kendi kanından elde edilen plazma ile yapılan PRP tedavisi, saç dökülmesi ve cilt yenileme üzerindeki etkileri.",
            content: `
        <h2>PRP Nedir?</h2>
        <p>PRP (Platelet Rich Plasma), kişinin kendi kanından elde edilen plazmanın, trombosit hücreleri bakımından zenginleştirilerek tekrar kişiye enjekte edilmesidir.</p>
        <h2>Etki Mekanizması</h2>
        <p>Trombositler, büyüme faktörleri salgılayarak doku onarımını sağlar ve kök hücreleri uyarır.</p>
      `
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