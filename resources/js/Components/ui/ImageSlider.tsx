import { useState } from 'react';

interface Proptypes {
    foto_kegiatan: string[] | null;
}

const ImageSlider = (props: Proptypes) => {
    const { foto_kegiatan: images } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (images && images.length) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    const prevSlide = () => {
        if (images && images.length) {
            setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length,
            );
        }
    };

    return (
        <div className="relative w-full overflow-hidden text-color-primary">
            <div className="flex items-center justify-center">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%)`,
                    }}
                >
                    {images?.map((src, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 transform overflow-hidden rounded-xl px-8 py-6 transition-transform duration-300 ease-in-out md:w-1/3 md:px-12 md:py-8"
                        >
                            <img
                                src={src}
                                alt={`slide-${index}`}
                                className="aspect-square h-64 w-full overflow-hidden rounded-xl object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="text-black absolute -left-0 top-1/2 -translate-y-1/2 transform text-4xl md:text-6xl"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <button
                className="text-black absolute -right-0 top-1/2 -translate-y-1/2 transform text-4xl md:text-6xl"
                onClick={nextSlide}
            >
                &gt;
            </button>
        </div>
    );
};

export default ImageSlider;
