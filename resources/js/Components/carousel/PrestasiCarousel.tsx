import { Achievement } from '@/types/achievement';
import { formatDate } from '@/utils/formatDate';
import { Link } from '@inertiajs/react';

interface Proptypes {
    prestasi: Achievement[];
}

const PrestasiSection = ({ prestasi }: Proptypes) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    if (!prestasi || prestasi.length === 0) {
        return (
            <p className="text-center text-color-secondary">
                Tidak ada prestasi yang tersedia saat ini.
            </p>
        );
    }

    return (
        <div className="relative flex w-full flex-col items-center">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {prestasi.map((item, index) => (
                    <Link
                        key={index}
                        href="/prestasi"
                        className="group transform rounded-xl bg-color-accent/50 p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-color-accent"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="h-56 w-full overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={`${baseUrl}/storage/${item.gambar}`}
                                    alt={item.judul}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div>
                                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-color-secondary transition-colors duration-300 group-hover:text-color-white">
                                    {item.judul}
                                </h3>
                                <p className="text-sm text-color-secondary/90 transition-colors duration-300 group-hover:text-color-white/90">
                                    {formatDate(item.created_at)}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <Link
                href="/prestasi"
                className="mt-8 rounded-full bg-color-accent px-6 py-3 text-color-white shadow-lg transition-colors duration-300 hover:bg-color-secondary hover:text-color-primary focus:outline-none focus:ring-2 focus:ring-color-accent"
            >
                Lihat Lebih Banyak
            </Link>
        </div>
    );
};

export default PrestasiSection;
