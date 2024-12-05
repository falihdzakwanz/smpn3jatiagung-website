import { Link } from '@inertiajs/react';

interface Breadcrumbs {
    breadcrumbs?: {
        text: string;
        href?: string;
    }[];
}

const Breadcrumbs = ({ breadcrumbs }: Breadcrumbs) => {
    return (
        <div className="bg-white px-6 py-4 text-xl">
            <div className="flex items-center gap-2">
                {breadcrumbs?.map((item, index) => (
                    <div key={index} className="flex items-center">
                        {index > 0 && <span className="mx-2">/</span>}
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="text-[#2B2E3C] hover:text-[#7166BA]"
                            >
                                {item.text}
                            </Link>
                        ) : (
                            <span className="text-[#2B2E3C]">{item.text}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Breadcrumbs;
