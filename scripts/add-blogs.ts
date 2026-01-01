import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // First, ensure we have a category
    let category = await prisma.category.findFirst({
        where: { slug: 'genel' }
    })

    if (!category) {
        category = await prisma.category.create({
            data: {
                name: 'Genel',
                slug: 'genel'
            }
        })
    }

    const blogs = [
        {
            title: 'Cilt Bakımı İpuçları',
            slug: 'cilt-bakimi-ipuclari',
            excerpt: 'Günlük cilt bakım rutini ile sağlıklı ve parlak bir cilde sahip olun.',
            content: `<h2>Günlük Cilt Bakımı</h2>
<p>Cilt bakımı, sağlıklı ve genç görünümün anahtarıdır. Düzenli bakım ile cildinizi korur ve yaşlanma belirtilerini geciktirebilirsiniz.</p>

<h3>Temizleme</h3>
<p>Günlük cilt temizliği, makyaj ve kir kalıntılarını uzaklaştırır. Sabah ve akşam olmak üzere günde iki kez cildinizi temizleyin.</p>

<h3>Nemlendirme</h3>
<p>Cilt nemi kaybettiğinde kurur ve kırışır. Nemlendirici kremler ile cildinizi nemli tutun.</p>

<h3>Güneş Koruması</h3>
<p>Güneş ışınları ciltte erken yaşlanmaya neden olur. SPF 30 ve üzeri güneş koruyucu kullanın.</p>`,
            coverImage: '/images/blog/cilt-bakimi.jpg',
            status: 'PUBLISHED',
            categoryId: category.id
        },
        {
            title: 'Saç Bakımı ve PRP Tedavisi',
            slug: 'sac-bakimi-prp-tedavisi',
            excerpt: 'Saç dökülmesi sorununa karşı PRP tedavisi ile doğal çözüm.',
            content: `<h2>Saç Dökülmesi ve PRP</h2>
<p>Saç dökülmesi birçok insanın karşılaştığı yaygın bir problemdir. PRP tedavisi, kendi kanınızdan elde edilen plazma ile saç köklerini güçlendirir.</p>

<h3>PRP Nedir?</h3>
<p>Platelet Rich Plasma (PRP), trombosit açısından zenginleştirilmiş plazmadır. Saç köklerine enjekte edildiğinde saç büyümesini uyarır.</p>

<h3>Tedavi Süreci</h3>
<p>Tedavi genellikle 3-4 seans sürer. Her seans arasında 4-6 hafta beklenir. Sonuçlar 3-6 ay içinde görülür.</p>

<h3>Avantajları</h3>
<ul>
<li>Doğal yöntem</li>
<li>Yan etkisi az</li>
<li>Uzun süreli etki</li>
<li>Kişiye özel</li>
</ul>`,
            coverImage: '/images/blog/prp-sac.jpg',
            status: 'PUBLISHED',
            categoryId: category.id
        }
    ]

    console.log('Blog yazıları ekleniyor...')

    for (const blog of blogs) {
        await prisma.blogPost.upsert({
            where: { slug: blog.slug },
            update: blog,
            create: blog,
        })
    }

    console.log('Blog yazıları başarıyla eklendi!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })