import { Link } from '@inertiajs/react';

interface NavbarLogoProps {
    text: string;
    className?: string;
}

const NavbarLogo = (props: NavbarLogoProps) => {
    const { text, className } = props;

    return (
        <Link href="/" className={`flex items-center gap-3 ${className}`}>
            <img
                src="https://salman-gebaeudereinigung.de/wp-content/uploads/2022/10/logo-salman.png"
                alt="Logo Sekolah"
                className="h-12 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-wider md:text-2xl">
                {text}
            </span>
        </Link>
    );
};

export default NavbarLogo;
