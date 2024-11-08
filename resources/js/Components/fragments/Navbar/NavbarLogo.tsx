const NavbarLogo = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center">
            <img
                src="https://www.dummyimage.com/400x200/000/fff&text=LOGO"
                alt="Logo"
                className="mr-2 h-8 w-8"
            />
            <span className="text-base font-bold uppercase tracking-widest text-color-secondary md:text-xl">
                {text}
            </span>
        </div>
    );
};

export default NavbarLogo;
