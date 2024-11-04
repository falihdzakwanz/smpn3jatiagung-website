import Footer from '@/Components/fragments/Footer';
import Navbar from '@/Components/fragments/Navbar';
import NewsBody from '@/Components/newsDetail/NewsBody';
import NewsImage from '@/Components/newsDetail/NewsImage';
import { Head } from '@inertiajs/react';

const NewsDetail = (props: any) => {
    const { id } = props;
    return (
        <>
            <Head title={`Berita ${id}`} />
            <header>
                <Navbar />
            </header>
            <div className="flex flex-col items-center justify-center px-8 md:px-12 py-4 md:py-8 md:mx-8 gap-4">
                <NewsImage imageSrc="https://www.dummyimage.com/450x300/000/fff&text=LOGO" />
                <NewsBody />
            </div>
            <Footer />
        </>
    );
};

export default NewsDetail;
