import { Link } from '@inertiajs/react';

const NavLink = (props: any) => {
    const { text, href } = props; 
    const isActive = window.location.pathname === href || 
                    (href.includes('#') && window.location.hash === href.substring(href.indexOf('#')));
                    
    return (
        <Link
            href={href}
            className="block text-color-secondary hover:text-color-accent hover:bg-color-secondary relative px-4 py-2 border-b border-b-color-secondary md:border-none group"
        >
            <span className="relative">
                {text}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300
                            ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
                />
            </span>
        </Link>
    );
};

export default NavLink;
