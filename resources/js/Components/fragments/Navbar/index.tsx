import { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavLink from './NavLink';

interface SubMenuOpen {
    isProfile: boolean;
    isBerita: boolean;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [subMenuOpen, setSubMenuOpen] = useState<SubMenuOpen>({
        isProfile: false,
        isBerita: false,
    });

    const toggleSubMenu = (menu: keyof SubMenuOpen) => {
        setSubMenuOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    const id = 1;

    return (
        <nav className="font-inter-bold h-20 w-full bg-color-primary">
            <div className="block h-full md:flex md:flex-row md:items-center md:justify-between">
                <div className="flex h-full w-full items-center justify-between px-4 py-2">
                    <NavbarLogo text={'SPANTIJA'} />
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md bg-color-secondary p-2 text-color-accent hover:text-color-primary focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={!isOpen ? 'block' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={isOpen ? 'block' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={`${isOpen ? 'block' : 'hidden'} w-full bg-color-primary uppercase md:flex md:items-center md:justify-center text-xs md:text-sm`}
                >
                    <div className="group block h-full bg-color-primary md:relative md:flex md:items-center md:justify-center">
                        <button
                            className="flex w-full items-center justify-start gap-1 border-b border-b-color-secondary px-4 py-2 uppercase tracking-widest text-color-secondary md:min-w-max md:border-none"
                            onClick={() => toggleSubMenu('isProfile')}
                        >
                            Profil Sekolah
                            {subMenuOpen.isProfile ||
                            window.innerWidth > 768 ? (
                                <span className="text-2xl">&#9662;</span>
                            ) : (
                                <span className="ml-1 text-xs">&#9650;</span>
                            )}
                        </button>
                        <div
                            className={`${subMenuOpen.isProfile ? 'hidden' : 'block'} w-full px-4 capitalize md:absolute md:left-0 md:top-full md:hidden md:w-48 md:flex-col md:px-0 md:group-hover:flex`}
                        >
                            <NavLink
                                href="/visimisi"
                                text="Visi, Misi, dan Sejarah Sekolah"
                            />
                            <NavLink href="/staff" text="Tenaga Pendidik" />
                        </div>
                    </div>
                    <div className="group block h-full bg-color-primary md:relative md:flex md:items-center md:justify-center">
                        <button
                            className="flex w-full items-center justify-start gap-1 border-b border-b-color-secondary px-4 py-2 uppercase tracking-widest text-color-secondary md:border-none"
                            onClick={() => toggleSubMenu('isBerita')}
                        >
                            Berita
                            {subMenuOpen.isBerita || window.innerWidth > 768 ? (
                                <span className="text-2xl">&#9662;</span>
                            ) : (
                                <span className="ml-1 text-xs">&#9650;</span>
                            )}
                        </button>
                        <div
                            className={`${subMenuOpen.isBerita ? 'hidden' : 'block'} w-full bg-color-primary px-4 capitalize md:absolute md:left-0 md:top-full md:hidden md:w-48 md:px-0 md:group-hover:flex`}
                        >
                            <NavLink href={`/news/${id}`} text={`news ${id}`} />
                        </div>
                    </div>
                    <NavLink
                        href="/ekstrakurikuler/detail"
                        text="Ekstrakurikuler"
                    />
                    <NavLink href="/prestasi" text="Prestasi" />
                    <NavLink href="/modul" text="Modul" />
                    <NavLink href="/#kontak" text="Kontak" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
