import Card from '@/Components/news/Card';
import GuestLayout from '@/Layouts/GuestLayout';
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
            <Head title="News" />
            <div className="flex flex-col items-center justify-center gap-8 px-8 py-6">
                {news.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        body={item.body}
                        imageSrc={item.imageSrc || 'https://www.dummyimage.com/450x300/000/fff&text=LOGO'}
                    />
                ))}
            </div>
        </GuestLayout>
    );
};

export default News;