import Card from '@/Components/news/Card';
import GuestLayout from '@/Layouts/GuestLayout';
import type { News } from '@/types/news';
import { Head } from '@inertiajs/react';

type Proptypes = {
    someNews: News[];
};

const NewsComponent = (props: Proptypes) => {
    const { someNews } = props;

    return (
        <GuestLayout>
            <Head title="Berita" />
            <div className="flex flex-col items-center justify-center gap-8 px-8 py-6">
                {someNews.map((news: News) => (
                    <Card
                        id={news.id}
                        judul={news.judul}
                        deskripsi={news.deskripsi}
                        foto={news.foto}
                    />
                ))}
            </div>
        </GuestLayout>
    );
};

export default NewsComponent;
