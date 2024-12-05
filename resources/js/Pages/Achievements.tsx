import Card from '@/Components/achievements/Card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Achievement } from '@/types/achievement';

interface Prestasi {
    prestasi: Achievement[];
}

const Achievements = ({ prestasi }: Prestasi) => {
    return (
        <GuestLayout>
            <div className="flex w-full flex-col items-center justify-center bg-color-secondary">
                <h1 className="mb my-8 text-2xl font-bold uppercase text-color-accent md:text-4xl">
                    Prestasi
                </h1>
                <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-8 px-4 md:mb-8 md:grid-cols-3 md:gap-12 md:px-12">
                    {prestasi.map((item: Achievement) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            gambar={item.gambar}
                            judul={item.judul}
                            created_at={item.created_at}
                        />
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
};

export default Achievements;
