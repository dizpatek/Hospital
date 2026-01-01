const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const prisma = new PrismaClient();

async function main() {
    console.log("🚀 Starting PROFESSIONAL Medical Content Seed...");

    // --- EXPERTISE AREAS (ANA KATEGORİLER / Treatments in user's model) ---
    const expertiseAreas = [
        { name: "Prostat Hastalıkları", slug: "prostat-hastaliklari" },
        { name: "Böbrek & Üreter Hastalıkları", slug: "bobrek-ureter-hastaliklari" },
        { name: "Androloji & Erkek Cinsel Sağlığı", slug: "androloji-cinsel-saglik" },
        { name: "İnfertilite (Kısırlık)", slug: "infertilite-kisirlik" },
        { name: "Çocuk Ürolojisi", slug: "cocuk-urolojisi" },
        { name: "Mesane Hastalıkları", slug: "mesane-hastaliklari" },
        { name: "Genel Cerrahi & Üroloji", slug: "genel-cerrahi-uroloji" }
    ];

    for (const area of expertiseAreas) {
        await prisma.expertiseArea.upsert({ where: { slug: area.slug }, update: area, create: area });
    }

    // --- DATA MAPPING ---
    // User's hierarchy: 
    // Treatment (ExpertiseArea) -> Procedure (TreatmentCategory) -> Method (Procedure)

    const megaData = [
        {
            // A) PROSTAT HASTALIKLARI
            areaSlug: "prostat-hastaliklari",
            categories: [
                {
                    name: "Prostat Ameliyatı",
                    slug: "prostat-ameliyati",
                    methods: [
                        {
                            name: "Açık Prostat Ameliyatı (Prostatektomi)",
                            slug: "acik-prostat-ameliyati",
                            methodType: "Açık Cerrahi",
                            icon: "Scalpel",
                            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000",
                            summary: "Büyük prostatlarda (100gr+) uygulanan, prostat dokusunun tamamen çıkarıldığı klasik cerrahi yöntem.",
                            why: "<p>Çok büyük prostat hacimlerinde veya eşlik eden büyük mesane taşları olduğunda tercih edilir.</p>",
                            how: "<p>Göbek altından yapılan kesi ile mesaneye ulaşılarak prostat dokusu çıkarılır.</p>",
                            sideEffects: "<p>Kanama riski kapalı yöntemlere göre daha yüksektir. Hastanede yatış süresi 3-4 gündür.</p>",
                            faqs: [{ question: "İz kalır mı?", answer: "Yaklaşık 8-10 cm'lik bir ameliyat izi kalır." }]
                        },
                        {
                            name: "Kapalı Prostat Ameliyatı (HoLEP / TUR-P)",
                            slug: "kapali-prostat-ameliyati",
                            methodType: "Endoskopik",
                            icon: "Zap",
                            image: "https://images.unsplash.com/photo-1579152123223-28827fa1e4ac?q=80&w=1000",
                            summary: "HoLEP veya TUR-P gibi teknolojilerle, vücutta kesi olmadan idrar kanalından girilerek yapılan modern tedavi.",
                            why: "<p>Kanamasız, hızlı iyileşme sağlayan ve sertleşmeyi koruyan altın standart tedavidir.</p>",
                            how: "<p>Lazer veya elektrik enerjisi kullanılarak prostat dokusu buharlaştırılır veya çıkarılır.</p>",
                            sideEffects: "<p>Yan etki riski çok düşüktür. Geçici idrar yanması olabilir.</p>",
                            faqs: [{ question: "Sonda ne zaman çıkar?", answer: "Genellikle ertesi gün sonda çıkarılır." }]
                        }
                    ]
                },
                {
                    name: "Prostat Biyopsisi",
                    slug: "prostat-biyopsisi",
                    methods: [
                        {
                            name: "Füzyon Prostat Biyopsisi",
                            slug: "fuzyon-prostat-biyopsisi",
                            methodType: "Akıllı Tanı",
                            icon: "Scan",
                            image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000",
                            summary: "MR ve Ultrason görüntülerinin birleştirilmesiyle şüpheli odaklardan nokta atışı parça alma işlemi.",
                            why: "<p>PSA yüksekliği veya şüpheli rektal muayene durumunda kanser tanısı için.</p>",
                            how: "<p>Sedasyon altında, ağrısız olarak makattan veya perineal bölgeden yapılır.</p>",
                            sideEffects: "<p>Nadir olarak idrarda hafif kanama görülebilir.</p>",
                            faqs: [{ question: "Acı verir mi?", answer: "Anestezi altında yapıldığı için ağrı hissedilmez." }]
                        }
                    ]
                }
            ]
        },
        {
            // B) BÖBREK & ÜRETER HASTALIKLARI
            areaSlug: "bobrek-ureter-hastaliklari",
            categories: [
                {
                    name: "Böbrek Taşı Ameliyatı",
                    slug: "bobrek-tasi-ameliyati",
                    methods: [
                        {
                            name: "Kapalı Böbrek Taşı Ameliyatı (RIRS)",
                            slug: "rirs-kapali-bobrek-tasi",
                            methodType: "Endoskopik (Flexible)",
                            icon: "Minimize",
                            image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000",
                            summary: "Kesisiz, idrar yolundan girilerek yapılan lazerle taş kırma işlemi.",
                            why: "<p>2cm altındaki böbrek taşları için idealdir.</p>",
                            how: "<p>Kıvrılabilen aletlerle böbreğe ulaşılır ve taş lazerle tozlaştırılır.</p>",
                            sideEffects: "<p>Ciddi bir yan etkisi yoktur.</p>",
                            faqs: [{ question: "Hastanede yatılır mı?", answer: "Genellikle günübirlik veya 1 gece yatışlıdır." }]
                        },
                        {
                            name: "Perkütan Nefrolitotomi (PCNL)",
                            slug: "pcnl-bobrek-tasi",
                            methodType: "Perkütan (Yarı Kapalı)",
                            icon: "Crosshair",
                            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000",
                            summary: "Sırttan açılan 1 cm'lik delikten girilerek yapılan büyük taş ameliyatı.",
                            why: "<p>2cm üzerindeki büyük veya çoklu taşlar için uygulanır.</p>",
                            how: "<p>Sırttan tünel açılarak böbreğe girilir ve taşlar bütün veya parçalı çıkarılır.</p>",
                            sideEffects: "<p>Kanama riski RIRS'e göre biraz daha fazladır.</p>",
                            faqs: [{ question: "Ameliyat izi kalır mı?", answer: "Sadece 1 cm'lik küçük bir iz kalır." }]
                        }
                    ]
                },
                {
                    name: "Üreter Taşı Tedavisi",
                    slug: "ureter-tasi-tedavisi",
                    methods: [
                        {
                            name: "Üreteroskopi (URS)",
                            slug: "urs-ureter-tasi",
                            methodType: "Endoskopik",
                            icon: "ArrowDown",
                            image: "https://images.unsplash.com/photo-1579152123223-28827fa1e4ac?q=80&w=1000",
                            summary: "İdrar kanalına düşen taşların lazerle kırılması.",
                            why: "<p>Düşmeyen ve tıkanıklık yapan kanal taşları için.</p>",
                            how: "<p>İdrar deliğinden girilerek taşa ulaşılır.</p>",
                            sideEffects: "<p>İşlem sonrası hafif yanma.</p>",
                            faqs: [{ question: "Ağrısı hemen geçer mi?", answer: "Taş kırıldığı an ağrı kesilir." }]
                        }
                    ]
                }
            ]
        },
        {
            // C) ANDROLOJİ
            areaSlug: "androloji-cinsel-saglik",
            categories: [
                {
                    name: "Erektil Disfonksiyon Tedavisi",
                    slug: "erektil-disfonksiyon",
                    methods: [
                        {
                            name: "Mutluluk Çubuğu (Penil Protez)",
                            slug: "mutluluk-cubugu-protez",
                            methodType: "Cerrahi İmplant",
                            icon: "Smile",
                            image: "https://images.unsplash.com/photo-1559757175-5700dde36d39?q=80&w=1000",
                            summary: "Kalıcı sertleşme sağlayan 3 parçalı şişirilebilir protez uygulaması.",
                            why: "<p>İlaçlara yanıt vermeyen iktidarsızlık sorunu için kesin çözüm.</p>",
                            how: "<p>Penisin içine sertleşmeyi sağlayan silindirler yerleştirilir.</p>",
                            sideEffects: "<p>Mekanik arıza (çok nadir).</p>",
                            faqs: [{ question: "Dışarıdan belli olur mu?", answer: "Hayır, tamamen doğal görünür." }]
                        },
                        {
                            name: "ESWT (Şok Dalga Tedavisi)",
                            slug: "eswt-sok-dalga",
                            methodType: "Non-İnvaziv",
                            icon: "Activity",
                            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000",
                            summary: "Düşük yoğunluklu şok dalgaları ile yeni damar oluşumunu destekleyen tedavi.",
                            why: "<p>Hafif-orta düzey sertleşme sorunu için ilaçsız çözüm.</p>",
                            how: "<p>Penis üzerine prob ile ses dalgaları uygulanır. Ağrısızdır.</p>",
                            sideEffects: "<p>Yan etkisi yoktur.</p>",
                            faqs: [{ question: "Kaç seans sürer?", answer: "Genellikle 6 seans uygulanır." }]
                        }
                    ]

                },
                {
                    name: "Penis Estetiği",
                    slug: "penis-estetigi-grubu",
                    methods: [
                        {
                            name: "Penis Uzatma Ameliyatı",
                            slug: "penis-uzatma-cerrahisi",
                            methodType: "Cerrahi",
                            icon: "Maximize",
                            image: "https://images.unsplash.com/photo-1559757175-5700dde36d39?q=80&w=1000",
                            summary: "Asıcı bağların serbest bırakılması ile penisin görünür boyunun artırılması.",
                            why: "<p>Kozmetik kaygılar ve özgüven için.</p>",
                            how: "<p>Penisi leğen kemiğine bağlayan bağlar kesilerek penis öne doğru serbestleştirilir.</p>",
                            sideEffects: "<p>Tekrar yapışma riski (düzenli egzersizle önlenir).</p>",
                            faqs: [{ question: "Ne kadar uzar?", answer: "Kişinin anatomisine göre 2-4 cm arası uzama sağlanır." }]
                        },
                        {
                            name: "Penis Kalınlaştırma (Dolgu)",
                            slug: "penis-kalinlastirma-dolgu",
                            methodType: "Enjeksiyon",
                            icon: "Syringe",
                            image: "https://images.unsplash.com/photo-1559757175-5700dde36d39?q=80&w=1000",
                            summary: "Hyaluronik asit veya yağ enjeksiyonu ile çevre kalınlığının artırılması.",
                            why: "<p>Daha kalın bir görünüm için.</p>",
                            how: "<p>Lokal anestezi altında dolgu maddesi cilt altına enjekte edilir.</p>",
                            sideEffects: "<p>Geçici ödem ve morluk.</p>",
                            faqs: [{ question: "Kalıcı mı?", answer: "Dolgu maddesine göre 1-3 yıl kalıcılığı vardır." }]
                        }
                    ]
                }
            ]
        },
        {
            // D) İNFERTİLİTE
            areaSlug: "infertilite-kisirlik",
            categories: [
                {
                    name: "Erkek İnfertilitesi Tedavileri",
                    slug: "erkek-infertilitesi-tedavileri",
                    methods: [
                        {
                            name: "Mikroskopik Varikoselektomi",
                            slug: "mikroskopik-varikosel",
                            methodType: "Mikrocerrahi",
                            icon: "Microscope",
                            image: "https://images.unsplash.com/photo-1579152123223-28827fa1e4ac?q=80&w=1000",
                            summary: "Varikosel (tümörleşmiş damarlar) tedavisinde en başarılı ve nüks riski en düşük yöntem.",
                            why: "<p>Sperm sayısını ve kalitesini artırarak doğal yolla gebelik şansını yükseltir.</p>",
                            how: "<p>Kasık bölgesinden yapılan küçük kesis ile mikroskop altında damarlar bağlanır.</p>",
                            sideEffects: "<p>Çok nadiren hidrosel (su toplanması).</p>",
                            faqs: [{ question: "Sperm ne zaman düzelir?", answer: "Ameliyat sonrası 3-6. ayda düzelme görülür." }]
                        },
                        {
                            name: "Mikro-TESE",
                            slug: "mikro-tese",
                            methodType: "Mikrocerrahi",
                            icon: "Search",
                            image: "https://images.unsplash.com/photo-1579152123223-28827fa1e4ac?q=80&w=1000",
                            summary: "Azospermi hastalarında canlı sperm bulmak için yapılan hassas cerrahi işlem.",
                            why: "<p>Menisinde hiç sperm olmayan erkeklerin tüp bebek ile çocuk sahibi olabilmesi için.</p>",
                            how: "<p>Testis açılarak mikroskop ile sperm dolu kanallar aranır.</p>",
                            sideEffects: "<p>Testosteron düşüklüğü (geçici).</p>",
                            faqs: [{ question: "Başarı şansı nedir?", answer: "Ortalama %50-60 oranında sperm bulunur." }]
                        }
                    ]
                }
            ]
        },
        // ... E, F, G can be added similarly
        {
            areaSlug: "genel-cerrahi-uroloji",
            categories: [
                {
                    name: "Sünnet",
                    slug: "sunnet-islemleri",
                    methods: [
                        {
                            name: "Sünnet (Cerrahi)",
                            slug: "klasik-sunnet",
                            methodType: "Cerrahi",
                            icon: "Scissors",
                            image: "https://images.unsplash.com/photo-1628173426868-2ffba6add984?q=80&w=1000",
                            summary: "Hijyenik ve estetik amaçlı prepisyum cildinin alınması.",
                            why: "<p>Tıbbi gereklilik veya dini/sosyal nedenlerle.</p>",
                            how: "<p>Lokal veya genel anestezi ile fazla deri cerrahi olarak alınır.</p>",
                            sideEffects: "<p>Nadir kanama.</p>",
                            faqs: [{ question: "Ne zaman iyileşir?", answer: "1 hafta içinde iyileşme tamamlanır." }]
                        }
                    ]
                }
            ]
        }
    ];

    for (const data of megaData) {
        // 1. Get/Create Expertise Area (e.g. Prostat Hastalıkları)
        const area = await prisma.expertiseArea.findUnique({ where: { slug: data.areaSlug } });
        if (!area) continue;

        for (const cat of data.categories) {
            // 2. Create TreatmentCategory (e.g. Prostat Ameliyatı)
            const treatment = await prisma.treatmentCategory.upsert({
                where: { slug: cat.slug },
                update: { name: cat.name, expertiseAreaId: area.id },
                create: { name: cat.name, slug: cat.slug, expertiseAreaId: area.id }
            });

            // 3. Create Procedures (e.g. Açık, Kapalı) with Method Type
            for (const method of cat.methods) {
                await prisma.procedure.upsert({
                    where: { slug: method.slug },
                    update: {
                        name: method.name,
                        icon: method.icon,
                        imageUrl: method.image,
                        summary: method.summary,
                        why: method.why,
                        how: method.how,
                        method: method.methodType, // NEW FIELD
                        sideEffects: method.sideEffects,
                        faq: JSON.stringify(method.faqs),
                        seoTitle: `${method.name} - Detaylı Bilgi`,
                        seoDesc: method.summary,
                        treatmentCategoryId: treatment.id,
                        status: "PUBLISHED"
                    },
                    create: {
                        name: method.name,
                        slug: method.slug,
                        icon: method.icon,
                        imageUrl: method.image,
                        summary: method.summary,
                        why: method.why,
                        how: method.how,
                        method: method.methodType, // NEW FIELD
                        sideEffects: method.sideEffects,
                        faq: JSON.stringify(method.faqs),
                        seoTitle: `${method.name} - Detaylı Bilgi`,
                        seoDesc: method.summary,
                        treatmentCategoryId: treatment.id,
                        status: "PUBLISHED"
                    }
                });
            }
        }
    }

    // --- BLOG RESTORE ---
    const blogCats = [
        { name: "Ürolojik Teknoloji", slug: "urolojik-teknoloji" },
        { name: "Hasta Rehberi", slug: "hasta-rehberi" },
        { name: "Cinsel Sağlık", slug: "cinsel-saglik" }
    ];

    for (const cat of blogCats) {
        await prisma.category.upsert({ where: { slug: cat.slug }, update: cat, create: cat });
    }

    const blogPosts = [
        {
            title: "HoLEP Ameliyatı Sonrası Dikkat Edilmesi Gerekenler",
            slug: "holep-sonrasi-rehber",
            excerpt: "HoLEP ameliyatı sonrası iyileşme süreci hakkında bilmeniz gereken her şey.",
            content: "İyileşme süreci hızlıdır ancak bol su tüketimi kritiktir...",
            coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000",
            status: "PUBLISHED",
            catSlug: "hasta-rehberi"
        },
    ];
    for (const post of blogPosts) {
        const cat = await prisma.category.findUnique({ where: { slug: post.catSlug } });
        if (cat) {
            await prisma.blogPost.upsert({
                where: { slug: post.slug },
                update: {
                    title: post.title, excerpt: post.excerpt, content: post.content,
                    coverImage: post.coverImage, categoryId: cat.id, status: post.status
                },
                create: {
                    title: post.title, slug: post.slug, excerpt: post.excerpt, content: post.content,
                    coverImage: post.coverImage, categoryId: cat.id, status: post.status
                }
            });
        }
    }
    // --- GLOBAL FAQ SEED ---
    const globalFaqs = [
        {
            question: "Randevu nasıl alabilirim?",
            answer: "Web sitemizdeki 'Randevu Al' butonuna tıklayarak veya +90 (500) 000 00 00 numaralı hattımızdan bizi arayarak randevu oluşturabilirsiniz."
        },
        {
            question: "SGK anlaşmanız var mı?",
            answer: "Evet, kliniğimizin belirli işlemler ve muayeneler için SGK anlaşması bulunmaktadır. Detaylı bilgi için kurumumuzla iletişime geçebilirsiniz."
        },
        {
            question: "Sonuçlarımı ne zaman alabilirim?",
            answer: "Laboratuvar sonuçları genellikle 24 saat içinde, patoloji sonuçları ise 3-7 iş günü içerisinde sonuçlanmaktadır."
        }
    ];

    for (const faq of globalFaqs) {
        await prisma.fAQ.upsert({
            where: { id: `global-${faq.question.length}` },
            update: { question: faq.question, answer: faq.answer, isGlobal: true },
            create: { question: faq.question, answer: faq.answer, isGlobal: true }
        });
    }

    console.log("✅ PROFESSIONAL Structured Seeding Completed!");
}

main()
    .catch((e) => {
        console.error("🔴 SEED ERROR:");
        console.error(e);
        process.exit(1);
    })
    .finally(async () => { await prisma.$disconnect(); });
