import { Link } from '@inertiajs/react';

const NavLink = (props: any) => {
    const { text, href } = props;
    return (
        <Link
            href={href}
            className="block border-b border-b-color-secondary bg-color-primary px-4 py-2 tracking-widest text-color-secondary hover:text-color-accent md:border-none"
        >
            {text}
        </Link>
    );
};

export default NavLink;
