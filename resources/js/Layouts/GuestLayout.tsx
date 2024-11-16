import Footer from '@/Components/fragments/Footer';
import Navbar from '@/Components/fragments/Navbar';
import { PropsWithChildren } from 'react';

interface GuestLayoutProps extends PropsWithChildren {
    isHomePage?: boolean;
}

const GuestLayout = ({ children, isHomePage = false }: GuestLayoutProps) => {
    return (
        <div className="flex min-h-screen w-full flex-col scroll-smooth bg-color-secondary">
            <Navbar isHomePage={isHomePage} />
            <main className={`w-full ${!isHomePage && 'pt-24'} font-roboto`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default GuestLayout;
