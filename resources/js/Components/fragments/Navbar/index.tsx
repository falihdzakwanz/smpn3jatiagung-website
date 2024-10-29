import { Link } from '@inertiajs/react';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
    return (
        <nav className="h-20 bg-white shadow-md">
            <div className="flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <NavbarLogo text={'SPANTIJA'} />
                <div className="flex h-full items-center justify-center bg-white">
                    <div className="group relative flex h-full items-center justify-center">
                        <button className="mx-4 flex items-center justify-center text-black hover:text-gray-700">
                            Profil Sekolah
                            <span className="ml-1">&#9662;</span>
                        </button>
                        <div className="invisible absolute left-0 top-full hidden w-48 rounded-md bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-200 group-hover:visible group-hover:flex group-hover:flex-col group-hover:opacity-100">
                            <Link
                                href="#"
                                className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                                Sejarah
                            </Link>
                            <Link
                                href="#"
                                className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                                Visi & Misi
                            </Link>
                        </div>
                    </div>
                    <div className="group relative flex h-full items-center justify-center">
                        <button className="mx-4 flex items-center justify-center text-black hover:text-gray-700">
                            Berita
                            <span className="ml-1">&#9662;</span>
                        </button>
                        <div className="invisible absolute left-0 top-full hidden w-48 rounded-md bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-200 group-hover:visible group-hover:flex group-hover:flex-col group-hover:opacity-100">
                            <Link
                                href="#"
                                className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                                Berita Terkini
                            </Link>
                            <Link
                                href="#"
                                className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                                Pengumuman
                            </Link>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="mx-4 text-black hover:text-gray-700"
                    >
                        Ekstrakurikuler
                    </Link>
                    <Link
                        href="#"
                        className="mx-4 text-black hover:text-gray-700"
                    >
                        Prestasi
                    </Link>
                    <Link
                        href="#"
                        className="mx-4 text-black hover:text-gray-700"
                    >
                        Kontak
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
