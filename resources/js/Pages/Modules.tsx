import Card from '@/Components/modul/Card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Module } from '@/types/module';

type Proptypes = {
    modules: Module[];
};

const Modul = (props: Proptypes) => {
    const { modules } = props;

    return (
        <GuestLayout>
            <div className="flex w-screen flex-col items-center justify-center bg-color-secondary py-8">
                <h1 className="mb-4 font-libre-bold text-2xl font-bold text-color-primary md:mb-8 md:text-4xl">
                    Modul Pembelajaran
                </h1>
                <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-8">
                    {modules.map((module) => (
                        <Card
                            key={module.id}
                            id={module.id}
                            nama={module.nama}
                            penerbit={module.penerbit}
                            deskripsi={module.deskripsi}
                            file={module.file}
                        />
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
};

export default Modul;
