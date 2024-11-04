import { Link } from "@inertiajs/react";

const Card = (props: any) => {
    const { id, title, body } = props;

    return (
        <div className="flex flex-col items-center justify-center px-4 gap-4 md:flex-row">
            <div className="flex items-center md:w-1/4">
                <img
                    src="https://www.dummyimage.com/450x300/000/fff&text=LOGO"
                    alt="Logo"
                    className="object-cover max-w-full max-h-60"
                />
            </div>
            <div>
                <h2 className="mb-4 font-bold uppercase md:text-2xl">
                    {title}
                </h2>
                <p className="mb-2 text-justify md:text-base">{body}</p>
                <Link href={route('news.show', id)} className="font-bold">
                    Read More <span>&#187;</span>
                </Link>
            </div>
        </div>
    );
}

export default Card;