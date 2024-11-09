interface NavbarLogoProps {
    text: string;
    className?: string;
}

const NavbarLogo = ({ text, className = '' }: NavbarLogoProps) => {
    return (
        <a href="/" className={`flex items-center gap-3 ${className}`}>
            <img
                src="https://salman-gebaeudereinigung.de/wp-content/uploads/2022/10/logo-salman.png"
                alt="Logo Sekolah"
                className="h-12 w-auto object-contain"
            />
            <span className="font-bold text-2xl">{text}</span>
        </a>
    );
};

export default NavbarLogo;