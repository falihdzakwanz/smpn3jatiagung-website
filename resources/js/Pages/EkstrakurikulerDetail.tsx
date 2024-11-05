import ArticleSection from '@/Components/display/ArticleSection';
import ImageBanner from '@/Components/display/ImageBanner';
import ImageSlider from '@/Components/ui/ImageSlider';
import GuestLayout from '@/Layouts/GuestLayout';

const EkstrakurikulerDetail = () => {
    return (
        <GuestLayout>
            <div className="flex flex-col items-center justify-center gap-4 px-8 py-4 md:mx-8 md:px-12 md:py-8">
                <ImageBanner imageSrc="https://www.dummyimage.com/450x300/000/fff&text=LOGO" />
                <ArticleSection
                    title="COCONUT"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur, illum cum qui optio deleniti veritatis et alias numquam! Voluptatum animi molestias sed exercitationem quisquam autem quam, pariatur quis quia!"
                />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">Foto Kegiatan</h2>
                    <ImageSlider />
                </div>
            </div>
        </GuestLayout>
    );
};

export default EkstrakurikulerDetail;
