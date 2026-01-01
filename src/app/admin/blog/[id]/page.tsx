export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Blog Yazısını Düzenle</h1>
            <p className="text-lg text-gray-600">ID: {id} olan yazı için düzenleme sayfası henüz yapım aşamasındadır.</p>
        </div>
    );
}
