import ArticleSection from '@/Components/display/ArticleSection';
import ImageBanner from '@/Components/display/ImageBanner';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

const NewsDetail = (props: any) => {
    const {
        id,
        imageSrc = 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
        title = 'Lorem ipsum dolor sit amet',
        text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus assumenda officiis molestiae id, vel magni cum unde architecto temporibus eveniet dolore non a optio mollitia eligendi facilis! Voluptatum voluptatem repudiandae est odio, blanditiis debitis modi doloribus in odit reiciendis iusto officiis non eum fugiat libero ipsum, placeat consequuntur dicta, quaerat architecto. Doloremque magni unde voluptas repudiandae at magnam cupiditate laboriosam ab quas reiciendis consequuntur, accusantium illum suscipit ullam eos. Modi odit officia minus perspiciatis alias soluta distinctio iusto eos consequatur voluptate. Ab saepe facere esse, debitis eos voluptatum, officiis perspiciatis dolor illum eius suscipit sunt earum molestias. Quisquam, voluptatibus itaque.',
    } = props;

    return (
        <GuestLayout>
            <Head title={`Berita ${id}`} />
            <div className="flex flex-col items-center justify-center px-8 md:px-12 py-4 md:py-8 md:mx-8 gap-4 bg-color-secondary">
                <ImageBanner imageSrc={imageSrc} />
                <ArticleSection title={title} text={text}/>
            </div>
        </GuestLayout>
    );
};

export default NewsDetail;
