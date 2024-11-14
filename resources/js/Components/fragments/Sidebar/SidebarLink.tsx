import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface Proptypes extends PropsWithChildren {
    href: string;
    title: string;
}

const SidebarLink = (props: Proptypes) => {
    const { href, children, title } = props;
    const currentPath = window.location.pathname.replace('/dashboard', '');
    const active = currentPath.toLowerCase() === `/${title.toLowerCase()}`;

    return (
        <Link
            href={href}
            className={`flex h-14 w-full items-center justify-start px-8 py-4 gap-x-4 text-2xl font-roboto tracking-wide transition duration-200 ease-in-out hover:bg-color-secondary hover:text-color-accent ${active && "bg-color-primary"}`}
        >
            {children}
            <h2 className="uppercase">{title}</h2>
        </Link>
    );
};

export default SidebarLink;
