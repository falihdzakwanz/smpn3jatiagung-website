import Card from '@/Components/news/Card';
import GuestLayout from '@/Layouts/GuestLayout';
// import type { News } from '@/types/news';
import { Head } from '@inertiajs/react';

interface News {
    id: number;
    title: string;
    body: string;
    imageSrc: string | null;
}

interface Props {
    news: News[];
}

const News = ({ news }: Props) => {
    return (
        <GuestLayout>
            <Head title="Berita" />
            <div className="flex w-full flex-col items-center justify-center gap-8 px-8 py-6">

                {news.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        judul={item.title}
                        deskripsi={item.body}
                        gambar={item.imageSrc || 'https://www.dummyimage.com/450x300/000/fff&text=LOGO'}
                    />
                ))}
            </div>
        </GuestLayout>
    );
};

export default News;
