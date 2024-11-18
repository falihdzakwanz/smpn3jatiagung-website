import { News } from "@/types/news";
import { Link } from "@inertiajs/react";

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
        <div className="flex w-full flex-col items-start justify-start p-4 gap-4 md:flex-row border-b-2 border-b-color-primary">
            <div className="flex items-center md:w-1/4 rounded-xl overflow-hidden">
                <img
                    src={gambar || ""}
                    alt={`Berita - ${id}`}
                    className="object-cover max-w-80 max-h-48"
                />
            </div>
            <div>
                <h2 className="mb-4 font-bold uppercase md:text-2xl text-color-primary">
                    {judul}
                </h2>
                <p className="mb-2 text-justify text-sm md:text-base text-color-primary">
                    {truncateAfterFourDots(deskripsi)}
                </p>
                <Link href={route('news.show', id)} className="font-bold text-color-primary text-sm md:text-base">
                    Read More <span>&#187;</span>
                </Link>
            </div>
        </div>
    );
}

export default Card;
