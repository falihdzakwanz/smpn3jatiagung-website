import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
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

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        e.preventDefault();

        if (window.location.pathname !== '/') {
            window.location.href = `/#${id}`;
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 95;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
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

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 w-full font-inter-bold text-sm uppercase tracking-wider shadow-lg transition-all duration-200 md:text-base ${
                isScrolled || !isHomePage
                    ? 'bg-color-primary'
                    : 'backdrop-blur-sm'
            }`}
        >
            <div className="mx-auto">
                <div className="flex h-24 items-center justify-between px-4 md:px-8 lg:px-16">
                    <NavbarLogo
                        text="SPANTIJA"
                        className={
                            !isScrolled && isHomePage
                                ? 'text-color-white'
                                : 'text-color-secondary'
                        }
                    />

                    <div className="hidden items-center space-x-0 md:flex lg:space-x-1">
                        <div className="group relative">
                            <button
                                className={`group px-2 py-2 lg:px-4 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} text-sm uppercase transition-all duration-300 hover:text-color-accent hover:brightness-150 lg:text-base`}
                            >
                                <span>Profil Sekolah</span>
                                <span className="ml-1 text-xs">▼</span>
                            </button>
                            <div className="absolute left-0 top-full hidden w-48 bg-color-primary group-hover:block">
                                <NavLink
                                    href="/sejarah"
                                    text="Visi, Misi, dan Sejarah Sekolah"
                                />
                                <NavLink href="/staff" text="Tenaga Pendidik" />
                            </div>
                        </div>

                        <div className="group relative">
                            <button
                                className={`group px-2 py-2 lg:px-4 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} text-sm uppercase transition-all duration-300 hover:text-color-accent hover:brightness-150 lg:text-base`}
                            >
                                <span>Berita</span>
                                <span className="ml-1 text-xs">▼</span>
                            </button>
                            <div className="absolute left-0 top-full hidden w-48 bg-color-primary group-hover:block">
                                <NavLink href="/news/1" text="news 1" />
                            </div>
                        </div>

                        <a
                            href="/#ekstrakurikuler"
                            onClick={(e) =>
                                handleNavClick(e, 'ekstrakurikuler')
                            }
                            className={`px-2 py-2 lg:px-4 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} text-sm transition-all duration-300 hover:text-color-accent hover:brightness-150 lg:text-base`}
                        >
                            Ekstrakurikuler
                        </a>
                        <a
                            href="/#prestasi"
                            onClick={(e) => handleNavClick(e, 'prestasi')}
                            className={`px-2 py-2 lg:px-4 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} text-sm transition-all duration-300 hover:text-color-accent hover:brightness-150 lg:text-base`}
                        >
                            Prestasi
                        </a>
                        <Link
                            href="/modul"
                            className={`px-2 py-2 lg:px-4 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} text-sm transition-all duration-300 hover:text-color-accent hover:brightness-150 lg:text-base`}
                        >
                            Modul
                        </Link>
                        <a
                            href="/#kontak"
                            onClick={(e) => handleNavClick(e, 'kontak')}
                            className={`px-2 py-2 lg:px-4 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} text-sm transition-all duration-300 hover:text-color-accent hover:brightness-150 lg:text-base`}
                        >
                            Kontak
                        </a>
                    </div>

                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className={`group inline-flex items-center justify-center p-2 ${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} transition-all duration-300 hover:text-color-accent`}
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
                                            className="origin-right transform transition-all duration-300 group-hover:scale-x-125"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16"
                                        />
                                        <path
                                            className="origin-center transform transition-all duration-500 group-hover:scale-x-110"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 12h16"
                                        />
                                        <path
                                            className="origin-left transform transition-all duration-700 group-hover:scale-x-125"
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

                {isOpen && (
                    <div className="bg-color-primary md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <div>
                                <button
                                    onClick={() => toggleSubMenu('isProfile')}
                                    className="w-full px-4 py-2 text-left uppercase text-color-secondary transition-all duration-300 hover:text-color-accent"
                                >
                                    <span>Profil Sekolah</span>
                                    <span className="float-right">
                                        {subMenuOpen.isProfile ? '▼' : '▶'}
                                    </span>
                                </button>
                                {subMenuOpen.isProfile && (
                                    <div className="pl-4">
                                        <NavLink
                                            href="/sejarah"
                                            text="Visi, Misi, dan Sejarah Sekolah"
                                        />
                                        <NavLink
                                            href="/staffs"
                                            text="Tenaga Pendidik"
                                        />
                                    </div>
                                )}
                            </div>

                            <div>
                                <button
                                    onClick={() => toggleSubMenu('isBerita')}
                                    className="w-full px-4 py-2 text-left uppercase text-color-secondary transition-all duration-300 hover:text-color-accent"
                                >
                                    <span>Berita</span>
                                    <span className="float-right">
                                        {subMenuOpen.isBerita ? '▼' : '▶'}
                                    </span>
                                </button>
                                {subMenuOpen.isBerita && (
                                    <div className="pl-4">
                                        <NavLink href="/news/1" text="news 1" />
                                    </div>
                                )}
                            </div>

                            <a
                                href="/#ekstrakurikuler"
                                onClick={(e) =>
                                    handleNavClick(e, 'ekstrakurikuler')
                                }
                                className="block px-4 py-2 text-color-secondary transition-all duration-300 hover:text-color-accent"
                            >
                                Ekstrakurikuler
                            </a>
                            <a
                                href="/#prestasi"
                                onClick={(e) => handleNavClick(e, 'prestasi')}
                                className="block px-4 py-2 text-color-secondary transition-all duration-300 hover:text-color-accent"
                            >
                                Prestasi
                            </a>
                            <Link
                                href="/modul"
                                className="block px-4 py-2 text-color-secondary transition-all duration-300 hover:text-color-accent"
                            >
                                Modul
                            </Link>
                            <a
                                href="/#kontak"
                                onClick={(e) => handleNavClick(e, 'kontak')}
                                className="block px-4 py-2 text-color-secondary transition-all duration-300 hover:text-color-accent"
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
