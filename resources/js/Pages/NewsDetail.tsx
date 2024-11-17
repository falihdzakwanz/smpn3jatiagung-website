// File: resources/js/Pages/NewsDetail.tsx
import ArticleSection from '@/Components/display/ArticleSection';
import ImageBanner from '@/Components/display/ImageBanner';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

interface NewsDetailProps {
    id: number;
    title: string;
    text: string;
    imageSrc: string;
}

const NewsDetail = ({ id, title, text, imageSrc }: NewsDetailProps) => {
    return (
        <GuestLayout>
            <Head title={`Berita - ${title}`} />
            <div className="flex flex-col items-center justify-center px-8 md:px-12 py-4 md:py-8 md:mx-8 gap-4 bg-color-secondary">
                <ImageBanner imageSrc={imageSrc} />
                <ArticleSection title={title} text={text}/>
            </div>
        </GuestLayout>
    );
};

export default NewsDetail;