import ArticleSection from '@/Components/display/ArticleSection';
import ImageBanner from '@/Components/display/ImageBanner';
import ImageSlider from '@/Components/ui/ImageSlider';
import GuestLayout from '@/Layouts/GuestLayout';
import { Extracurricular } from '@/types/extracurricular';

type Proptypes = {
    ekstrakurikuler: Extracurricular;
}

const ExtracurricularDetail = (props: Proptypes) => {
    const { ekstrakurikuler } = props;

    return (
        <GuestLayout>
            <div className="flex flex-col items-center justify-center gap-4 px-8 py-4 md:mx-8 md:px-12 md:py-8">
                <ImageBanner
                    imageSrc={ekstrakurikuler.foto_judul}
                    imageAlt={`Ekstrakurikuler ${ekstrakurikuler.nama}`}
                />
                <ArticleSection
                    title={ekstrakurikuler.nama}
                    text={ekstrakurikuler.deskripsi}
                />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl md:text-2xl font-bold text-color-primary">Foto Kegiatan</h2>
                    <ImageSlider foto_kegiatan={ekstrakurikuler.foto_kegiatan}/>
                </div>
            </div>
        </GuestLayout>
    );
};

export default ExtracurricularDetail;
