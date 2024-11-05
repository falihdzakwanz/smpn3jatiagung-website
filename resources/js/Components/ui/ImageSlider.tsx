import { useState } from 'react';

const images = [
    'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
    'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
    'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
    'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
    'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length,
        );
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex items-center justify-center">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%)`,
                    }}
                >
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="px-8 py-6 md:px-12 md:py-8 w-full md:w-1/3 flex-shrink-0 rounded-xl overflow-hidden transform transition-transform duration-300 ease-in-out"
                        >
                            <img
                                src={src}
                                alt={`slide-${index}`}
                                className="aspect-square h-64 w-full object-cover rounded-xl overflow-hidden"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute -left-0 top-1/2 -translate-y-1/2 transform text-black text-4xl md:text-6xl"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <button
                className="absolute -right-0 top-1/2 -translate-y-1/2 transform text-black text-4xl md:text-6xl"
                onClick={nextSlide}
            >
                &gt;
            </button>
        </div>
    );
};

export default ImageSlider;
