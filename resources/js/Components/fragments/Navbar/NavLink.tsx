import { Link } from "@inertiajs/react";

const NavLink = (props: any) => {
    const { text, href } = props; 
    return (
        <Link
            href={href}
            className="block text-color-secondary hover:text-color-accent bg-color-primary px-4 py-2 border-b border-b-color-secondary md:border-none"
        >
            {text}
        </Link>
    );
}

export default NavLink;