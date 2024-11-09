// File: /resources/js/Pages/Welcome.tsx
import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { useState, useEffect } from 'react';
import EkstrakurikulerCarousel from '@/Components/carousel/EkstrakurikulerCarousel';
import PrestasiCarousel from '@/Components/carousel/PrestasiCarousel';

const Welcome = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Handle scroll ke section setelah halaman dimuat
        const handleInitialScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 95; // Nilai yang sama dengan di Navbar
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    setTimeout(() => {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }, 100); // Delay kecil untuk memastikan page sudah sepenuhnya dimuat
                }
            }
        };

        handleInitialScroll();
    }, []); // Run once when component mounts

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <GuestLayout isHomePage={true}>
            <Head title="Welcome" />
            
            {/* Hero Section dengan parallax */}
            <div className="relative h-screen w-full overflow-hidden">
                <div 
                    className="absolute inset-0 w-full h-[120%]" 
                    style={{ 
                        transform: `translateY(${scrollY * 0.5}px)`,
                        backgroundImage: 'url(https://sman1yogya.sch.id/assets/images/bg_home1.JPG)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0
                    }}
                />
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h1 className="text-4xl md:text-7xl font-bold text-color-white px-4 text-center">
                        SMP NEGERI 3 JATIAGUNG
                    </h1>
                </div>
            </div>

            {/* Sambutan Section */}
            <div className="relative w-full bg-color-primary">
                <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/9f/61/e5/9f61e508bf9354865d217db723240fe8.jpg')] opacity-10 bg-cover bg-center" />
                <div className="relative container mx-auto px-4 py-24">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl md:text-4xl text-color-secondary mb-12 font-bold">
                            Sambutan Kepala Sekolah
                        </h2>
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                            <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl transform hover:scale-105 group transition-all duration-700 hover:shadow-2xl">
                                <div className="relative w-full h-full transition-all duration-700 ease-in-out transform group-hover:rotate-6">
                                    <img
                                        src="https://i.pinimg.com/736x/eb/6b/55/eb6b555d44788feb0cb944d110aa8c17.jpg"
                                        alt="Kepala Sekolah"
                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out opacity-100 group-hover:opacity-0 transform scale-100 group-hover:scale-110"
                                    />
                                    <img
                                        src="https://i.pinimg.com/236x/a2/47/40/a24740387be0e6dbedc0c68eabdebd26.jpg"
                                        alt="Kepala Sekolah"
                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 transform scale-110 group-hover:scale-100"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <blockquote className="text-color-secondary text-lg">
                                    <p className="mb-6 leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quis fermentum elit. Maximus
                                        tempor placerat non ipsum. Quis quis fermentum elit. Maximus tempor placerat non ipsum.
                                    </p>
                                </blockquote>
                                <div className="text-lg">
                                <a href="/greeting" className="text-color-secondary hover:text-white hover:underline hover:font-bold transition-colors duration-300 hover:shadow-lg hover:shadow-red-500/80">
                                    Baca selengkapnya...
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ekstrakurikuler Section */}
            <div id="ekstrakurikuler"
            className="relative w-full bg-color-secondary overflow-hidden scroll-mt-24"
            >
                <div className="relative py-24">
                    <h2 className="text-3xl md:text-5xl text-center text-color-primary mb-16 font-bold">
                        Ekstrakurikuler
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[1200px] px-4">
                            <EkstrakurikulerCarousel />
                        </div>
                    </div>
                </div>
            </div>

            {/* Prestasi Section */}
            <div id="prestasi"
            className="relative w-full bg-color-primary overflow-hidden scroll-mt-24"
            >
                <div className="absolute inset-0 bg-[url('https://i.pinimg.com/564x/d7/e5/98/d7e598c22f246e6fabad12d7c6a5d0db.jpg')] opacity-5 bg-cover bg-fixed" />
                <div className="relative py-24">
                    <h2 className="text-3xl md:text-5xl text-center text-color-secondary mb-16 font-bold">
                        Prestasi
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[1200px] px-4">
                            <PrestasiCarousel />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hubungi Kami Section */}
            <div 
            id="kontak"
            className="relative w-full bg-color-secondary scroll-mt-24"
            >
                <div className="relative container mx-auto px-4 py-24">
                    <h2 className="text-3xl md:text-5xl text-center text-color-primary mb-16 font-bold">
                        Hubungi Kami
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="bg-color-white/0 p-6 rounded-xl">
                            <h3 className="text-2xl text-color-primary mb-6 font-bold">Denah Lokasi</h3>
                            <a 
                                href="https://maps.app.goo.gl/GCLFUgPjvE8rgDMQ8" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="block w-full h-80 rounded-lg overflow-hidden shadow-lg group relative"
                            >
                                <img
                                    src="https://i.pinimg.com/736x/88/fc/3d/88fc3db9aa87706aa1340d6e13b54049.jpg"
                                    alt="Denah Lokasi"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-color-white text-4xl font-semibold">Buka di Google Maps</span>
                                </div>
                            </a>
                        </div>
                        <div className="bg-color-white p-6 rounded-xl shadow-xl">
                            <h3 className="text-2xl text-color-primary mb-6 font-bold">Kontak</h3>
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center gap-4 p-4 bg-color-secondary/10 rounded-lg hover:bg-color-secondary/20 transition-colors duration-300">
                                    <svg className="w-8 h-8 text-color-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-color-primary mb-1">Email</h4>
                                        <span className="text-color-primary text-lg">Pukimay@Student.Itb.Ac.Id</span>
                                    </div>
                                </div>

                                {/* Alamat */}
                                <div className="flex items-center gap-4 p-4 bg-color-secondary/10 rounded-lg hover:bg-color-secondary/20 transition-colors duration-300">
                                    <svg className="w-8 h-8 text-color-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-color-primary mb-1">Alamat</h4>
                                        <span className="text-color-primary text-lg">Belakang Geprek Belwis</span>
                                    </div>
                                </div>

                                {/* Telepon */}
                                <div className="flex items-center gap-4 p-4 bg-color-secondary/10 rounded-lg hover:bg-color-secondary/20 transition-colors duration-300">
                                    <svg className="w-8 h-8 text-color-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-color-primary mb-1">Telepon</h4>
                                        <span className="text-color-primary text-lg">0653-9867-6325</span>
                                    </div>
                                </div>

                                {/* Fax */}
                                <div className="flex items-center gap-4 p-4 bg-color-secondary/10 rounded-lg hover:bg-color-secondary/20 transition-colors duration-300">
                                    <svg className="w-8 h-8 text-color-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-color-primary mb-1">Fax</h4>
                                        <span className="text-color-primary text-lg">0274-879283</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Welcome;