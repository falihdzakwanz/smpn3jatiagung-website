import Footer from '@/Components/fragments/Footer';
import Navbar from '@/Components/fragments/Navbar';
import Card from '@/Components/news/Card';
import { Head } from '@inertiajs/react';

const News = () => {
    return (
        <>
            <Head title="Berita" />
            <header>
                <Navbar />
            </header>

            <main>
                <div className="flex flex-col items-center justify-center gap-8 p-8">
                    <Card
                        id="1"
                        title="Lorem ipsum, dolor sit amet"
                        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore consequuntur accusantium quisquam veritatis quis totam molestiae optio iste architecto."
                    />
                    <div className="w-full border-2 border-gray-950"></div>
                    <Card
                        id="2"
                        title="Lorem ipsum, dolor sit amet"
                        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore consequuntur accusantium quisquam veritatis quis totam molestiae optio iste architecto."
                    />
                    <div className="w-full border-2 border-gray-950"></div>
                    <Card
                        id="3"
                        title="Lorem ipsum, dolor sit amet"
                        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore consequuntur accusantium quisquam veritatis quis totam molestiae optio iste architecto."
                    />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default News;
