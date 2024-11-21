import ArticleSection from '@/Components/display/ArticleSection';
import ImageBanner from '@/Components/display/ImageBanner';
import GuestLayout from '@/Layouts/GuestLayout';
import { News } from '@/types/news';
import { Head } from '@inertiajs/react';

const NewsDetail = ({ id, judul, deskripsi, gambar }: News) => {
    console.log(gambar);
    return (
        <GuestLayout>
            <Head title={`Berita - ${judul}`} />
            <div className="flex flex-col items-center justify-center gap-4 bg-color-secondary px-8 py-4 md:mx-8 md:px-12 md:py-8">
                <ImageBanner imageSrc={gambar} imageAlt={`Berita - ${id}`} />
                <ArticleSection title={judul} text={deskripsi} />
            </div>
        </GuestLayout>
    );
};

export default NewsDetail;
