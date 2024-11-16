// File: /resources/js/Components/carousel/EkstrakurikulerCarousel.tsx
import { useState } from 'react';

const EkstrakurikulerCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const ekstrakurikuler = [
        {
            name: 'Pramuka',
            image: 'https://i.pinimg.com/564x/ff/40/93/ff4093513d010bbe8833e78c6318c549.jpg'
        },
        {
            name: 'Karate',
            image: 'https://i.pinimg.com/236x/b2/61/fb/b261fb83eaccee3f003615a848e6aee1.jpg'
        },
        {
            name: 'Dance',
            image: 'https://i.pinimg.com/564x/65/11/d1/6511d1fb63abd70769792e5cac4bdfe7.jpg'
        },
        {
            name: 'Basket',
            image: 'https://i.pinimg.com/236x/80/7c/30/807c303a1890de74082f1494c461d11d.jpg'
        },
        {
            name: 'Futsal',
            image: 'https://i.pinimg.com/236x/47/c4/87/47c48732a99d86f6ea5cb38abd1c36bd.jpg'
        },
        {
            name: 'Musik',
            image: 'https://i.pinimg.com/474x/68/d8/59/68d85908cc7753d8c595e2cbc6f77993.jpg'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % ekstrakurikuler.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => 
            (prev - 1 + ekstrakurikuler.length) % ekstrakurikuler.length
        );
    };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % ekstrakurikuler.length;
            items.push(ekstrakurikuler[index]);
        }
        return items;
    };

    return (
        <div className="relative w-full flex flex-col items-center">
            <div className="relative overflow-hidden w-full">
                <div className="flex transition-all duration-500 ease-out">
                    <div className="flex gap-6 w-full justify-center">
                        {getVisibleItems().map((item, index) => (
                            <div 
                                key={index}
                                className="w-full max-w-[350px] flex-shrink-0 transform transition-all duration-500"
                            >
                                <a href="/ekstrakurikuler/detail" 
                                   className="group relative bg-color-white rounded-xl overflow-hidden shadow-xl 
                                            transform hover:-translate-y-2 transition-all duration-300 block">
                                    <div className="w-full h-72 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                            <h2 className="text-4xl font-bold text-color-secondary">{item.name}</h2>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-color-primary/90 to-transparent 
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <h3 className="absolute bottom-0 left-0 right-0 text-xl text-center text-color-white
                                                     py-4 px-2 transform translate-y-full group-hover:translate-y-0 
                                                     transition-transform duration-300 bg-color-primary/80">
                                            {item.name}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Navigation Buttons - Sekarang di bawah */}
            <div className="flex gap-4 mt-8">
                <button 
                    onClick={prevSlide} 
                    className="bg-color-primary text-color-white p-3 
                             rounded-full shadow-lg hover:bg-color-accent transition-colors duration-300
                             focus:outline-none focus:ring-2 focus:ring-color-accent"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    onClick={nextSlide}
                    className="bg-color-primary text-color-white p-3 
                             rounded-full shadow-lg hover:bg-color-accent transition-colors duration-300
                             focus:outline-none focus:ring-2 focus:ring-color-accent"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default EkstrakurikulerCarousel;