import Card from '@/Components/news/Card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

const News = () => {
    return (
        <GuestLayout>
            <Head title="News" />
            <div className="flex flex-col items-center justify-center gap-8 bg-color-secondary px-8 py-6">
                <Card
                    id="1"
                    title="Lorem ipsum, dolor sit amet"
                    body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore consequuntur accusantium quisquam veritatis quis totam molestiae optio iste architecto. Jarip. Jarip. Jarip"
                    imageSrc="https://www.dummyimage.com/450x300/000/fff&text=LOGO"
                />
                <Card
                    id="2"
                    title="Lorem ipsum, dolor sit amet"
                    body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore consequuntur accusantium quisquam veritatis quis totam molestiae optio iste architecto."
                    imageSrc="https://www.dummyimage.com/450x300/000/fff&text=LOGO"
                />
                <Card
                    id="3"
                    title="Lorem ipsum, dolor sit amet"
                    body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore consequuntur accusantium quisquam veritatis quis totam molestiae optio iste architecto."
                    imageSrc="https://www.dummyimage.com/450x300/000/fff&text=LOGO"
                />
            </div>
        </GuestLayout>
    );
};

export default News;
