import Card from '@/Components/modul/Card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Module } from '@/types/module';

type Proptypes = {
    modules: Module[];
}

const Modul = (props: Proptypes) => {
    const { modules } = props;

    return (
        <GuestLayout>
            <div className="flex w-screen flex-col items-center justify-center bg-color-secondary py-8">
                <h1 className="mb-4 text-2xl font-bold md:mb-8 md:text-4xl text-color-primary">
                    Modul Pembelajaran
                </h1>
                <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8">
                    {modules.map((module) => (
                        <Card 
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
