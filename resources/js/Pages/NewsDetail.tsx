import ArticleSection from '@/Components/display/ArticleSection';
import ImageBanner from '@/Components/display/ImageBanner';
import GuestLayout from '@/Layouts/GuestLayout';
import { News } from '@/types/news';
import { Head } from '@inertiajs/react';

type Proptypes = {
    news: News;
}

const NewsDetail = (props: Proptypes) => {
    const { news } = props;

    return (
        <GuestLayout>
            <Head title={`Berita ${news.id}`} />
            <div className="flex flex-col items-center justify-center px-8 md:px-12 py-4 md:py-8 md:mx-8 gap-4">
                <ImageBanner 
                    imageSrc={news.foto} 
                    imageAlt={`Berita ${news.id}`}
                />
                <ArticleSection title={news.judul} text={news.deskripsi}/>
            </div>
        </GuestLayout>
    );
};

export default NewsDetail;
