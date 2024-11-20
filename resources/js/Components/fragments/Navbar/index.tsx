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
            className={`fixed left-0 right-0 top-0 z-50 h-24 w-full bg-color-primary font-inter-bold text-sm uppercase tracking-wider shadow-lg transition-all duration-300 md:text-base ${isScrolled || !isHomePage ? 'bg-color-primary' : 'md:bg-opacity-0 md:backdrop-blur-sm'}`}
        >
            <div className="block h-full md:flex md:flex-row md:items-center md:justify-between md:px-8 lg:px-16">
                <div className="flex h-full w-full items-center justify-between px-4">
                    <NavbarLogo
                        text="SPANTIJA"
                        className={
                            !isScrolled && isHomePage
                                ? 'text-color-white'
                                : 'text-color-secondary'
                        }
                    />

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

                <div
                    className={`${isOpen ? 'block' : 'hidden'} h-full items-center space-x-0 md:flex lg:space-x-1`}
                >
                    <div className="group block md:h-full bg-color-primary md:relative md:flex md:items-center md:justify-center md:bg-opacity-0">
                        <button
                            className="flex w-full items-center justify-start gap-1 border-b border-b-color-secondary px-4 py-2 uppercase text-color-secondary transition-all duration-300 hover:text-color-accent hover:brightness-150 md:min-w-52 md:border-none"
                            onClick={() => toggleSubMenu('isProfile')}
                        >
                            Profil Sekolah
                            <span className="ml-1 text-sm md:text-base">
                                {subMenuOpen.isProfile ||
                                window.innerWidth > 768
                                    ? '▼'
                                    : '▶'}
                            </span>
                        </button>
                        <div
                            className={`${subMenuOpen.isProfile ? 'hidden' : 'block'} w-full bg-color-primary px-4 md:absolute md:left-0 md:top-full md:hidden md:w-48 md:flex-col md:px-0 md:group-hover:flex`}
                        >
                            <NavLink
                                href="/sejarah"
                                text="Visi, Misi, dan Sejarah Sekolah"
                            />
                            <NavLink href="/staffs" text="Staff" />
                        </div>
                    </div>

                    <div className="w-full bg-color-primary md:flex md:bg-opacity-0">
                        <Link
                            href="/berita"
                            className={`px-4 py-2 md:${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} block border-b border-b-color-secondary text-sm text-color-secondary transition-all duration-300 hover:text-color-accent hover:brightness-150 md:border-none lg:text-base`}
                        >
                            Berita
                        </Link>
                        <a
                            href="/#ekstrakurikuler"
                            onClick={(e) =>
                                handleNavClick(e, 'ekstrakurikuler')
                            }
                            className={`px-4 py-2 md:${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} block border-b border-b-color-secondary text-sm text-color-secondary transition-all duration-300 hover:text-color-accent hover:brightness-150 md:border-none lg:text-base`}
                        >
                            Ekstrakurikuler
                        </a>
                        <a
                            href="/#prestasi"
                            onClick={(e) => handleNavClick(e, 'prestasi')}
                            className={`px-4 py-2 md:${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} block border-b border-b-color-secondary text-sm text-color-secondary transition-all duration-300 hover:text-color-accent hover:brightness-150 md:border-none lg:text-base`}
                        >
                            Prestasi
                        </a>
                        <Link
                            href="/modul"
                            className={`px-4 py-2 md:${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} block border-b border-b-color-secondary text-sm text-color-secondary transition-all duration-300 hover:text-color-accent hover:brightness-150 md:border-none lg:text-base`}
                        >
                            Modul
                        </Link>
                        <a
                            href="/#kontak"
                            onClick={(e) => handleNavClick(e, 'kontak')}
                            className={`px-4 py-2 md:${isHomePage && !isScrolled ? 'text-color-white' : 'text-color-secondary'} block border-b border-b-color-secondary text-sm text-color-secondary transition-all duration-300 hover:text-color-accent hover:brightness-150 md:border-none lg:text-base`}
                        >
                            Kontak
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
