// File: /resources/js/Components/Navbar/index.tsx
import { useState, useEffect } from 'react';
import NavbarLogo from './NavbarLogo';
import NavLink from './NavLink';

interface SubMenuOpen {
    isProfile: boolean;
    isBerita: boolean;
}

interface NavbarProps {
    isHomePage?: boolean;
}

const Navbar = ({ isHomePage = false }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [subMenuOpen, setSubMenuOpen] = useState<SubMenuOpen>({
        isProfile: false,
        isBerita: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };
        
        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setIsScrolled(true);
        }
    }, [isHomePage]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        // Cek apakah kita berada di halaman utama
        if (window.location.pathname !== '/') {
            window.location.href = `/#${id}`;
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 95; // Sesuaikan nilai ini untuk mengatur jarak scroll
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            history.pushState(null, '', `/#${id}`);
        }
    };

    const toggleSubMenu = (menu: keyof SubMenuOpen) => {
        setSubMenuOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    const navbarClasses = `fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${isScrolled || !isHomePage 
            ? 'bg-gradient-to-tr from-color-accent to-color-primary shadow-lg shadow-black/10' // Tambah shadow-black/10
            : 'bg-white/10 backdrop-blur-sm shadow-lg shadow-black/5'}`; // Tambah shadow-lg shadow-black/5

    return (
        <nav className={navbarClasses}>
            <div className="mx-auto">
                <div className="flex h-24 items-center justify-between px-4 md:px-8 lg:px-16">
                    {/* Logo */}
                    <NavbarLogo 
                        text="SPANTIJA" 
                        className={(!isScrolled && isHomePage) ? 'text-color-white' : 'text-color-secondary'}
                    />
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-0 lg:space-x-1">
                        {/* Profil Sekolah Dropdown */}
                        <div className="group relative">
                            <button className={`px-2 lg:px-4 py-2 group ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} hover:text-color-accent hover:brightness-150 transition-all duration-300 text-sm lg:text-base`}>
                                <span>Profil Sekolah</span>
                                <span className="ml-1 text-xs">▼</span>
                            </button>
                            <div className="absolute left-0 top-full hidden w-48 bg-color-primary group-hover:block">
                                <NavLink href="/sejarah" text="Visi, Misi, dan Sejarah Sekolah" />
                                <NavLink href="/staff" text="Tenaga Pendidik" />
                            </div>
                        </div>

                        {/* Berita Dropdown */}
                        <div className="group relative">
                            <button className={`px-2 lg:px-4 py-2 group ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} hover:text-color-accent hover:brightness-150 transition-all duration-300 text-sm lg:text-base`}>
                                <span>Berita</span>
                                <span className="ml-1 text-xs">▼</span>
                            </button>
                            <div className="absolute left-0 top-full hidden w-48 bg-color-primary group-hover:block">
                                <NavLink href="/news/1" text="news 1" />
                            </div>
                        </div>

                        {/* Regular Menu Items */}
                        <a 
                            href="/#ekstrakurikuler" 
                            onClick={(e) => handleNavClick(e, 'ekstrakurikuler')}
                            className={`px-2 lg:px-4 py-2 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} hover:text-color-accent hover:brightness-150  transition-all duration-300 text-sm lg:text-base`}
                        >
                            Ekstrakurikuler
                        </a>
                        <a 
                            href="/#prestasi" 
                            onClick={(e) => handleNavClick(e, 'prestasi')}
                            className={`px-2 lg:px-4 py-2 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} hover:text-color-accent hover:brightness-150 transition-all duration-300 text-sm lg:text-base`}
                        >
                            Prestasi
                        </a>
                        <a 
                            href="/modul" 
                            className={`px-2 lg:px-4 py-2 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} hover:text-color-accent hover:brightness-150 transition-all duration-300 text-sm lg:text-base`}
                        >
                            Modul
                        </a>
                        <a 
                            href="/#kontak" 
                            onClick={(e) => handleNavClick(e, 'kontak')}
                            className={`px-2 lg:px-4 py-2 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} hover:text-color-accent hover:brightness-150 transition-all duration-300 text-sm lg:text-base`}
                        >
                            Kontak
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 group
                                    ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'}
                                    hover:text-color-accent transition-all duration-300`}
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {!isOpen ? (
                                    <>
                                        <path
                                            className="transform transition-all duration-300 origin-right group-hover:scale-x-125"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16"
                                        />
                                        <path
                                            className="transform transition-all duration-500 origin-center group-hover:scale-x-110"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 12h16"
                                        />
                                        <path
                                            className="transform transition-all duration-700 origin-left group-hover:scale-x-125"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 18h16"
                                        />
                                    </>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="bg-color-primary md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {/* Profil Sekolah Dropdown Mobile */}
                            <div>
                                <button
                                    onClick={() => toggleSubMenu('isProfile')}
                                    className="w-full text-left text-color-secondary px-4 py-2 hover:text-color-accent transition-all duration-300"
                                >
                                    <span>Profil Sekolah</span>
                                    <span className="float-right">{subMenuOpen.isProfile ? '▼' : '▶'}</span>
                                </button>
                                {subMenuOpen.isProfile && (
                                    <div className="pl-4">
                                        <NavLink href="/sejarah" text="Visi, Misi, dan Sejarah Sekolah" />
                                        <NavLink href="/staff" text="Tenaga Pendidik" />
                                    </div>
                                )}
                            </div>

                            {/* Berita Dropdown Mobile */}
                            <div>
                                <button
                                    onClick={() => toggleSubMenu('isBerita')}
                                    className="w-full text-left text-color-secondary px-4 py-2 hover:text-color-accent transition-all duration-300"
                                >
                                    <span>Berita</span>
                                    <span className="float-right">{subMenuOpen.isBerita ? '▼' : '▶'}</span>
                                </button>
                                {subMenuOpen.isBerita && (
                                    <div className="pl-4">
                                        <NavLink href="/news/1" text="news 1" />
                                    </div>
                                )}
                            </div>

                            {/* Regular Menu Items Mobile */}
                            <a 
                                href="/#ekstrakurikuler"
                                onClick={(e) => handleNavClick(e, 'ekstrakurikuler')}
                                className="block text-color-secondary px-4 py-2 hover:text-color-accent transition-all duration-300"
                            >
                                Ekstrakurikuler
                            </a>
                            <a 
                                href="/#prestasi"
                                onClick={(e) => handleNavClick(e, 'prestasi')}
                                className="block text-color-secondary px-4 py-2 hover:text-color-accent transition-all duration-300"
                            >
                                Prestasi
                            </a>
                            <a 
                                href="/modul"
                                className="block text-color-secondary px-4 py-2 hover:text-color-accent transition-all duration-300"
                            >
                                Modul
                            </a>
                            <a 
                                href="/#kontak"
                                onClick={(e) => handleNavClick(e, 'kontak')}
                                className="block text-color-secondary px-4 py-2 hover:text-color-accent transition-all duration-300"
                            >
                                Kontak
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;