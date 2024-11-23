import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { useState, useEffect } from 'react';
import EkstrakurikulerCarousel from '@/Components/carousel/EkstrakurikulerCarousel';
import PrestasiCarousel from '@/Components/carousel/PrestasiCarousel';
import { Achievement } from '@/types/achievement';
import { Extracurricular } from '@/types/extracurricular';
import HeroSection from '@/Components/welcome/HeroSection';
import ContactSection from '@/Components/welcome/ContactSection';
import GreetingSection from '@/Components/welcome/GreetingSection';

interface Proptypes {
    prestasi: Achievement[];
    ekstrakurikuler: Extracurricular[];
}

const Welcome = ({ prestasi, ekstrakurikuler }: Proptypes) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleInitialScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 95; 
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    setTimeout(() => {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            }
        };

        handleInitialScroll();
    }, []);

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

            <HeroSection />

            <GreetingSection />

            <div id="ekstrakurikuler"
            className="relative w-full bg-color-secondary overflow-hidden scroll-mt-24"
            >
                <div className="relative py-24">
                    <h2 className="text-3xl md:text-5xl text-center text-color-primary mb-16 font-bold">
                        Ekstrakurikuler
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[1200px] px-4">
                            <EkstrakurikulerCarousel ekstrakurikuler={ekstrakurikuler}/>
                        </div>
                    </div>
                </div>
            </div>

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
                            <PrestasiCarousel prestasi={prestasi}/>
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection />
        </GuestLayout>
    );
};

export default Welcome;