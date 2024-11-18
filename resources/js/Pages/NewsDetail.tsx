import ArticleSection from '@/Components/display/ArticleSection';
import ImageBanner from '@/Components/display/ImageBanner';
import GuestLayout from '@/Layouts/GuestLayout';
import { News } from '@/types/news';
import { Head } from '@inertiajs/react';

const NewsDetail = ({ id, judul, deskripsi, gambar }: News) => {
    return (
        <GuestLayout>
            <Head title={`Berita - ${judul}`} />
            <div className="flex flex-col items-center justify-center px-8 md:px-12 py-4 md:py-8 md:mx-8 gap-4 bg-color-secondary">
                <ImageBanner imageSrc={gambar} 
                imageAlt={`Berita - ${id}`}
                />
                <ArticleSection title={judul} text={deskripsi}/>
            </div>
        </GuestLayout>
    );
};

export default NewsDetail;