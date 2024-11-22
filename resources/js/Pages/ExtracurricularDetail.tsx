import ArticleSection from '@/Components/display/ArticleSection';
import ImageBanner from '@/Components/display/ImageBanner';
import ActivityImages from '@/Components/extracurricular/ActivityImages';
import GuestLayout from '@/Layouts/GuestLayout';
import { Extracurricular } from '@/types/extracurricular';

const ExtracurricularDetail = (props: Extracurricular) => {
    const { nama, deskripsi, foto_judul, foto_kegiatan_1, foto_kegiatan_2, foto_kegiatan_3 } = props;

    const activityImages: string[] = [
        foto_kegiatan_1,
        foto_kegiatan_2,
        foto_kegiatan_3,
    ].filter((image): image is string => typeof image === 'string');

    return (
        <GuestLayout>
            <div className="flex flex-col items-center justify-center gap-4 px-8 py-4 md:mx-8 md:px-12 md:py-8">
                <ImageBanner
                    imageSrc={foto_judul}
                    imageAlt={`Ekstrakurikuler ${nama}`}
                />
                <ArticleSection
                    title={nama}
                    text={deskripsi}
                />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-bold text-color-primary md:text-2xl">
                        Foto Kegiatan
                    </h2>
                    <ActivityImages images={activityImages} />
                </div>
            </div>
        </GuestLayout>
    );
};

export default ExtracurricularDetail;
