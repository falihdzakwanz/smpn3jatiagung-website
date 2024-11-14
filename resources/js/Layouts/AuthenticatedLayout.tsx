import AuthenticatedNavbar from '@/Components/fragments/Navbar/AuthenticatedNavbar';
import Sidebar from '@/Components/fragments/Sidebar';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';

const AuthenticatedLayout = ({children}: PropsWithChildren) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};
    return (
        <div className="bg-color-secondary` min-h-screen">
            <Sidebar isOpen={isSidebarOpen} />
            <AuthenticatedNavbar
                toggleSidebar={toggleSidebar}
                isOpen={isSidebarOpen}
            />
            <main className={`${isSidebarOpen && 'ml-96'} px-8 py-4 duration-300 transition-all`}>
                {children}
            </main>
        </div>
    );
}

export default AuthenticatedLayout;
