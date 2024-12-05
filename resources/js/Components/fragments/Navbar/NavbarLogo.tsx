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
                className="h-12 w-auto object-contain md:h-16"
            />
            <span className="text-base font-bold tracking-wider md:text-lg">
                {text}
            </span>
        </Link>
    );
};

export default NavbarLogo;
