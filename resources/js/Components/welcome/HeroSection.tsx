import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [imageLoaded, setImageLoaded] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = '/images/background-sekolah-1.jpg';
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(false);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {imageLoaded ? (
                <div
                    className="absolute inset-0 h-[120%] w-full"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                        backgroundImage:
                            'url(/images/background-sekolah-1.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
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
