const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div
                className="absolute inset-0 h-[120%] w-full"
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`,
                    backgroundImage:
                        'url(https://sman1yogya.sch.id/assets/images/bg_home1.JPG)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}
            />
            <div className="bg-black/30 absolute inset-0 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h1 className="px-4 text-center text-4xl font-bold text-color-white md:text-7xl">
                    SMP NEGERI 3 JATIAGUNG
                </h1>
            </div>
        </div>
    );
};

export default HeroSection;
