import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        const imageUrl = `${import.meta.env.VITE_API_URL}/images/background-sekolah-1.jpg`;

        img.src = imageUrl;
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(false);
    }, []);

    return (
        <div className="relative mt-20 h-[70vh] w-full overflow-hidden md:mt-0 md:h-screen">
            {imageLoaded ? (
                <div
                    className="absolute inset-0 h-full w-full bg-cover bg-center md:h-[120%]"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                        backgroundImage: `url(${import.meta.env.VITE_API_URL}/images/background-sekolah-1.jpg)`,
                        zIndex: 0,
                    }}
                />
            ) : (
                <div className="absolute inset-0 h-[120%] w-full bg-color-primary" />
            )}
            <div className="bg-black/30 absolute inset-0 z-10" />
            {!imageLoaded && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <h1 className="px-4 text-center text-4xl font-bold text-color-secondary md:text-7xl">
                        SMP NEGERI 3 JATIAGUNG
                    </h1>
                </div>
            )}
        </div>
    );
};

export default HeroSection;
