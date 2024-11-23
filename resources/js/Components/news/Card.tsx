import { News } from "@/types/news";
import { formatNameToUrl } from "@/utils/formatNameToUrl";
import { getImageSrc } from "@/utils/getImageSrc";
import { Link } from "@inertiajs/react";
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
        <div className="flex w-full flex-col items-start justify-start gap-4 border-b-2 border-b-color-primary p-4 md:flex-row">
            <div className="flex w-full max-h-48 max-w-80 items-center overflow-hidden rounded-xl md:w-1/4">
                {gambar ? (
                    <img
                        src={getImageSrc(gambar)}
                        alt={`Berita - ${id}`}
                        className="max-h-48 max-w-80 object-cover w-full"
                    />
                ) : (
                    <FiImage className="max-w-80 max-h-48 w-full h-1/2" />
                )}
            </div>

            <div>
                <h2 className="mb-4 font-bold uppercase text-color-primary md:text-2xl">
                    {judul}
                </h2>
                <p className="mb-2 text-justify text-sm text-color-primary md:text-base">
                    {truncateAfterFourDots(deskripsi)}
                </p>
                <Link
                    href={route('news.show', formatNameToUrl(judul))}
                    className="text-sm font-bold text-color-primary md:text-base"
                >
                    Read More <span>&#187;</span>
                </Link>
            </div>
        </div>
    );
}

export default Card;
