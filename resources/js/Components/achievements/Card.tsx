import { Achievement } from '@/types/achievement';

const Card = (props: Achievement) => {
    const { id, gambar, judul, created_at } = props;

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', options);
    };

    return (
        <div
            key={id}
            className="group flex transform flex-col items-center justify-center gap-2 rounded-xl bg-color-accent p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-color-accent md:gap-4"
        >
            <div className="max-h-max w-full overflow-hidden rounded-xl">
                <img
                    src={`storage/${gambar}`}
                    alt="Prestasi"
                    className="aspect-square w-full overflow-hidden rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="flex flex-col gap-2 self-start">
                <h2 className="line-clamp-2 text-left text-base font-bold text-color-secondary transition-colors duration-300 group-hover:text-color-white md:text-2xl">
                    {judul}
                </h2>
                <p className="text-left text-xs text-color-secondary/90 transition-colors duration-300 group-hover:text-color-white/90 md:text-base">
                    {formatDate(created_at)}
                </p>
            </div>
        </div>
    );
};

export default Card;
