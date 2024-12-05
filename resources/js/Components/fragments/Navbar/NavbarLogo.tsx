import { Link } from '@inertiajs/react';

interface NavbarLogoProps {
    text: string;
    className?: string;
}

const NavbarLogo = (props: NavbarLogoProps) => {
    const { text, className } = props;

    return (
        <Link href="/" className={`flex items-center gap-1 ${className}`}>
            <img
                src="/images/logo-sekolah.png"
                alt="Logo Sekolah"
                className="h-12 md:h-16 w-auto object-contain"
            />
            <span className="text-base font-bold tracking-wider md:text-lg">
                {text}
            </span>
        </Link>
    );
};

export default NavbarLogo;
