// File: resources/js/Layouts/AdminLayout.tsx
import { PropsWithChildren, useState, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, Transition } from '@headlessui/react';
import { 
    FiGlobe,
    FiBook,
    FiAward,
    FiUsers,
    FiClock,
    FiMessageSquare,
    FiSettings,
    FiUser,
    FiMenu,
    FiChevronDown,
    FiChevronUp,
    FiLogOut,
    FiKey,
    FiEdit
} from 'react-icons/fi';
import { BiNews } from 'react-icons/bi';

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
            icon: <BiNews className="w-5 h-5" />,
            href: '/admin/news'
        },
        {
            label: 'MODULE',
            icon: <FiBook className="w-5 h-5" />,
            href: '/admin/modules'
        },
        {
            label: 'EKSTRAKURIKULER',
            icon: <FiAward className="w-5 h-5" />,
            href: '/admin/extracurricular'
        },
        {
            label: 'PRESTASI',
            icon: <FiAward className="w-5 h-5" />,
            href: '/admin/achievements'
        },
        {
            label: 'PROFIL STAFF',
            icon: <FiUsers className="w-5 h-5" />,
            href: '/admin/staff'
        },
        {
            label: 'SEJARAH',
            icon: <FiClock className="w-5 h-5" />,
            href: '/admin/history'
        },
        {
            label: 'KONTAK',
            icon: <FiMessageSquare className="w-5 h-5" />,
            href: '/admin/contact'
        }
    ];

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logging out...');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 z-40 h-screen w-[250px] transition-transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } bg-[#464B5E]`}>
                {/* Logo Header */}
                <div className="flex h-[80px] items-center px-4 bg-[#2B2E3C]">
                    <h1 className="text-2xl font-bold text-white">SPANTIJA ADMIN</h1>
                </div>

                {/* Website Section with Dropdown */}
                <div>
                    <button 
                        onClick={() => setIsWebsiteOpen(!isWebsiteOpen)}
                        className="w-full px-4 py-4 bg-[#7166BA] flex items-center justify-between cursor-pointer hover:bg-[#6357AB] transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <FiGlobe className="w-5 h-5 text-white" />
                            <span className="text-sm text-white">WEBSITE</span>
                        </div>
                        {isWebsiteOpen ? (
                            <FiChevronUp className="w-5 h-5 text-white" />
                        ) : (
                            <FiChevronDown className="w-5 h-5 text-white" />
                        )}
                    </button>

                    {/* Dropdown Menu Items */}
                    <div className={`transition-all duration-300 ${isWebsiteOpen ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'}`}>
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-[#5B6179] transition-colors"
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className={`${isOpen ? 'ml-[250px]' : 'ml-0'} min-h-screen transition-all`}>
                {/* Top Navigation */}
                <header className="h-[80px] bg-[#7166BA] flex items-center justify-between px-6">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white"
                    >
                        <FiMenu className="h-6 w-6" />
                    </button>

                    <div className="flex items-center gap-4">
                        {/* Settings Dropdown */}
                        <Menu as="div" className="relative">
                            <Menu.Button className="text-white">
                                <FiSettings className="h-6 w-6" />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-[#7166BA]/80 rounded-md shadow-lg focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    href="/admin/settings"
                                                    className={`${
                                                        active ? 'bg-[#7166BA]' : ''
                                                    } flex items-center px-4 py-2 text-white`}
                                                >
                                                    <FiKey className="mr-2 h-5 w-5" />
                                                    Website Settings
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        {/* Profile Dropdown */}
                        <Menu as="div" className="relative">
                            <Menu.Button className="text-white">
                                <FiUser className="h-6 w-6" />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-[#7166BA]/80 rounded-md shadow-lg focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    href="/admin/profile"
                                                    className={`${
                                                        active ? 'bg-[#7166BA]' : ''
                                                    } flex items-center px-4 py-2 text-white`}
                                                >
                                                    <FiEdit className="mr-2 h-5 w-5" />
                                                    Edit Profile
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    href={route('logout')}
                                                    method="post"
                                                    className={`${
                                                        active ? 'bg-[#7166BA]' : ''
                                                    } flex w-full items-center px-4 py-2 text-white`}
                                                >
                                                    <FiLogOut className="mr-2 h-5 w-5" />
                                                    Logout
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </header>

                {/* Breadcrumbs */}
                <div className="bg-white px-6 py-4 text-xl">
                    <div className="flex items-center gap-2">
                        {breadcrumbs.map((item, index) => (
                            <div key={index} className="flex items-center">
                                {index > 0 && <span className="mx-2">/</span>}
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="text-[#2B2E3C] hover:text-[#7166BA]"
                                    >
                                        {item.text}
                                    </Link>
                                ) : (
                                    <span className="text-[#2B2E3C]">{item.text}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <main className="bg-[#E5E5E5] min-h-[calc(100vh-144px)]">
                    {children}
                </main>
            </div>
        </div>
    );
}