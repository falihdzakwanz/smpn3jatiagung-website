import Navbar from '@/Components/fragments/Navbar';
import Footer from '@/Components/fragments/Footer';
import { PropsWithChildren } from 'react';

interface GuestLayoutProps extends PropsWithChildren {
    isHomePage?: boolean;
}

export default function GuestLayout({ children, isHomePage = false }: GuestLayoutProps) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navbar isHomePage={isHomePage} />
            {/* Tidak ada padding untuk homepage */}
            <main className={`w-full ${!isHomePage && 'pt-24'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
}