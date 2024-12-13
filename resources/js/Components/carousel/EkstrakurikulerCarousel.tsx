import { Extracurricular } from '@/types/extracurricular';
import { formatNameToUrl } from '@/utils/formatNameToUrl';
import { getImageSrc } from '@/utils/getImageSrc';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

interface Proptypes {
    ekstrakurikuler: Extracurricular[];
}

const EkstrakurikulerCarousel = ({ ekstrakurikuler }: Proptypes) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const baseUrl = import.meta.env.VITE_API_URL;

    const nextSlide = () => {
        if (ekstrakurikuler.length > 0) {
            setCurrentIndex((prev) => (prev + 1) % ekstrakurikuler.length);
        }
    };

    const prevSlide = () => {
        if (ekstrakurikuler.length > 0) {
            setCurrentIndex(
                (prev) =>
                    (prev - 1 + ekstrakurikuler.length) %
                    ekstrakurikuler.length,
            );
        }
    };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % ekstrakurikuler.length;
            items.push(ekstrakurikuler[index]);
        }
        return items;
    };

    if (ekstrakurikuler.length === 0) {
        return (
            <p className="text-center text-color-primary">
                Tidak ada ekstrakurikuler yang tersedia saat ini.
            </p>
        );
    }

    return (
        <div className="relative flex w-full flex-col items-center">
            <div className="relative w-full overflow-hidden">
                <div className="flex transition-all duration-500 ease-out">
                    <div className="flex w-full justify-center gap-6">
                        {getVisibleItems().map((item, index) => (
                            <div
                                key={index}
                                className="w-full max-w-[350px] flex-shrink-0 transform transition-all duration-500"
                            >
                                <Link
                                    href={`/ekstrakurikuler/${formatNameToUrl(item.nama)}`}
                                    className="group relative block transform overflow-hidden rounded-xl bg-color-white shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="h-72 w-full overflow-hidden">
                                        <img
                                            src={`${baseUrl}/storage/${getImageSrc(item.foto_judul)}`}
                                            alt={item.nama}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="bg-black absolute inset-0 flex items-center justify-center bg-opacity-50">
                                            <h2 className="text-4xl font-bold text-color-secondary">
                                                {item.nama}
                                            </h2>
                                        </div>
                                        <div className="to-transparent absolute inset-0 bg-gradient-to-t from-color-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <h3 className="absolute bottom-0 left-0 right-0 translate-y-full transform bg-color-primary/80 px-2 py-4 text-center text-xl text-color-white transition-transform duration-300 group-hover:translate-y-0">
                                            {item.nama}
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="rounded-full bg-color-primary p-3 text-color-white shadow-lg transition-colors duration-300 hover:bg-color-accent focus:outline-none focus:ring-2 focus:ring-color-accent"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="rounded-full bg-color-primary p-3 text-color-white shadow-lg transition-colors duration-300 hover:bg-color-accent focus:outline-none focus:ring-2 focus:ring-color-accent"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default EkstrakurikulerCarousel;
