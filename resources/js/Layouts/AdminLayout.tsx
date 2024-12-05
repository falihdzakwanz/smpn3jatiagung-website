import Breadcrumbs from '@/Components/fragments/Breadcrumbs';
import AuthenticatedNavbar from '@/Components/fragments/Navbar/AuthenticatedNavbar';
import Sidebar from '@/Components/fragments/Sidebar';
import { PropsWithChildren, useState } from 'react';
import { BiNews } from 'react-icons/bi';
import { FiAward, FiBook, FiBriefcase, FiUsers } from 'react-icons/fi';

interface Props extends PropsWithChildren {
    header?: string;
    breadcrumbs?: { text: string; href?: string }[];
}

export default function AdminLayout({ children, breadcrumbs = [] }: Props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isWebsiteOpen, setIsWebsiteOpen] = useState(true);

    const menuItems = [
        {
            label: 'LAMAN BERITA',
            icon: <BiNews className="h-5 w-5" />,
            href: '/admin/berita',
        },
        {
            label: 'MODULE',
            icon: <FiBook className="h-5 w-5" />,
            href: '/admin/modul',
        },
        {
            label: 'EKSTRAKURIKULER',
            icon: <FiBriefcase className="h-5 w-5" />,
            href: '/admin/ekstrakurikuler',
        },
        {
            label: 'PRESTASI',
            icon: <FiAward className="h-5 w-5" />,
            href: '/admin/prestasi',
        },
        {
            label: 'PROFIL STAFF',
            icon: <FiUsers className="h-5 w-5" />,
            href: '/admin/staff',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <Sidebar
                isOpen={isOpen}
                isWebsiteOpen={isWebsiteOpen}
                setIsWebsiteOpen={setIsWebsiteOpen}
                menuItems={menuItems}
            />

            <div
                className={`${isOpen ? 'ml-[250px]' : 'ml-0'} min-h-screen transition-all duration-300`}
            >
                <AuthenticatedNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

                <Breadcrumbs breadcrumbs={breadcrumbs} />

                <main className="min-h-[calc(100vh-144px)] bg-[#E5E5E5]">
                    {children}
                </main>
            </div>
        </div>
    );
}
