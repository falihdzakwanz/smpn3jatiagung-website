import EkstrakurikulerCarousel from '@/Components/carousel/EkstrakurikulerCarousel';
import PrestasiCarousel from '@/Components/carousel/PrestasiCarousel';
import ContactSection from '@/Components/welcome/ContactSection';
import GreetingSection from '@/Components/welcome/GreetingSection';
import HeroSection from '@/Components/welcome/HeroSection';
import GuestLayout from '@/Layouts/GuestLayout';
import { Achievement } from '@/types/achievement';
import { Extracurricular } from '@/types/extracurricular';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface Proptypes {
    prestasi?: Achievement[];
    ekstrakurikuler?: Extracurricular[];
}

const Welcome = ({ prestasi = [], ekstrakurikuler = [] }: Proptypes) => {
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
                    const offsetPosition =
                        elementPosition + window.scrollY - headerOffset;

                    setTimeout(() => {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
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

            <div
                id="ekstrakurikuler"
                className="relative w-full scroll-mt-24 overflow-hidden bg-color-secondary"
            >
                <div className="relative py-24">
                    <h2 className="mb-16 text-center text-3xl font-bold text-color-primary md:text-5xl">
                        Ekstrakurikuler
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[1200px] px-4">
                            <EkstrakurikulerCarousel
                                ekstrakurikuler={ekstrakurikuler}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="prestasi"
                className="relative w-full scroll-mt-24 overflow-hidden bg-color-primary"
            >
                <div className="absolute inset-0 bg-[url('https://i.pinimg.com/564x/d7/e5/98/d7e598c22f246e6fabad12d7c6a5d0db.jpg')] bg-cover bg-fixed opacity-5" />
                <div className="relative py-24">
                    <h2 className="mb-16 text-center text-3xl font-bold text-color-secondary md:text-5xl">
                        Prestasi
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[1200px] px-4">
                            <PrestasiCarousel prestasi={prestasi} />
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection />
        </GuestLayout>
    );
};

export default Welcome;
