import { Link } from '@inertiajs/react';

const NavLink = (props: any) => {
    const { text, href } = props;
    const isActive =
        window.location.pathname === href ||
        (href.includes('#') &&
            window.location.hash === href.substring(href.indexOf('#')));

    return (
        <Link
            href={href}
            className="group relative block border-b border-b-color-secondary px-4 py-2 capitalize text-color-secondary hover:bg-color-secondary hover:text-color-accent md:border-none"
        >
            <span className="relative">
                {text}
                <span
                    className={`bg-current absolute -bottom-1 left-0 h-0.5 w-full origin-left transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
                />
            </span>
        </Link>
    );
};

export default NavLink;
