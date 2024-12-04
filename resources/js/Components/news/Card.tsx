import { News } from '@/types/news';
import { formatNameToUrl } from '@/utils/formatNameToUrl';
import { getImageSrc } from '@/utils/getImageSrc';
import { Link } from '@inertiajs/react';
import { FiImage } from 'react-icons/fi';

const Card = (props: News) => {
    const { id, judul, deskripsi, gambar } = props;

    const truncateAfterFourDots = (text: string) => {
        let dotCount = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '.') {
                dotCount++;
                if (dotCount === 4) {
                    return text.substring(0, i + 1);
                }
            }
        }
        return text;
    };

    return (
        <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl border-b-2 bg-color-accent p-4 md:flex-row">
            <div className="flex h-52 w-full max-w-80 items-center overflow-hidden rounded-md md:w-1/4">
                {gambar ? (
                    <img
                        src={getImageSrc(gambar)}
                        alt={`Berita - ${id}`}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <FiImage className="h-full w-full max-w-80" />
                )}
            </div>

            <div className="flex w-full flex-col justify-between md:min-h-52 md:w-3/4">
                <div>
                    <h2 className="mb-4 font-bold uppercase tracking-wide text-color-secondary md:text-2xl">
                        {judul}
                    </h2>
                    <p className="mb-2 text-justify text-sm text-color-secondary md:text-base">
                        {truncateAfterFourDots(deskripsi)}
                    </p>
                </div>
                <div className="mt-auto flex justify-end">
                    <Link
                        href={route('news.show', formatNameToUrl(judul))}
                        className="text-sm font-bold text-color-secondary md:text-base hover:text-color-gray transition-all duration-300"
                    >
                        Read More <span>&#187;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
