import { Achievement } from "@/types/achievement";
import { formatDate } from "@/utils/formatDate";
import { Link } from "@inertiajs/react";

interface Proptypes {
    prestasi: Achievement[];
}

const PrestasiSection = ({ prestasi }: Proptypes) => {

    return (
        <div className="relative w-full flex flex-col items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {prestasi.map((item, index) => (
                    <Link 
                        key={index}
                        href="/prestasi"
                        className="group bg-color-accent/50 p-4 rounded-xl shadow-xl 
                                 hover:bg-color-accent transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="w-full h-56 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={`storage/${item.gambar}`}
                                    alt={item.judul}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg text-color-secondary font-bold mb-2 group-hover:text-color-white transition-colors duration-300 line-clamp-2">
                                    {item.judul}
                                </h3>
                                <p className="text-sm text-color-secondary/90 group-hover:text-color-white/90 transition-colors duration-300">
                                    {formatDate(item.created_at)}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
            <Link 
                href="/prestasi"
                className="mt-8 px-6 py-3 bg-color-accent text-color-white rounded-full 
                         shadow-lg hover:bg-color-secondary hover:text-color-primary transition-colors duration-300
                         focus:outline-none focus:ring-2 focus:ring-color-accent"
            >
                Lihat Lebih Banyak
            </Link>
        </div>
    );
};

export default PrestasiSection;