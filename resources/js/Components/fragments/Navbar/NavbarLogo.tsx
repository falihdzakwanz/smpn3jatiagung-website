import { Link } from '@inertiajs/react';

interface NavbarLogoProps {
    text: string;
    isHomePage: boolean;
    className?: string;
}

const NavbarLogo = (props: NavbarLogoProps) => {
    const { text, isHomePage, className } = props;

    const Logo = () => (
        <>
            <img
                src="https://salman-gebaeudereinigung.de/wp-content/uploads/2022/10/logo-salman.png"
                alt="Logo Sekolah"
                className="h-12 w-auto object-contain"
            />
            <span className="text-xl md:text-2xl font-bold tracking-wider">{text}</span>
        </>
    );

    return (
        <>
            {isHomePage ? (
                <a href="/" className={`flex items-center gap-3 ${className}`}>
                    <Logo />
                </a>
            ) : (
                <Link
                    href="/"
                    className={`flex items-center gap-3 ${className}`}
                >
                    <Logo />
                </Link>
            )}
        </>
    );
};

export default NavbarLogo;
