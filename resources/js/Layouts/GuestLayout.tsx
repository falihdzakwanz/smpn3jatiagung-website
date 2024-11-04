import Footer from '@/Components/fragments/Footer';
import Navbar from '@/Components/fragments/Navbar';
import { PropsWithChildren } from 'react';

const GuestLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <header className="w-full sticky top-0 z-50">
                <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default GuestLayout;
