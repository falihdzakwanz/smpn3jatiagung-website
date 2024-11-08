const Card = (props: any) => {
    const { id, imageSrc, title } = props;

    return (
        <div key={id} className="flex flex-col justify-center items-center gap-2 md:gap-4">
            <div className="max-h-max w-full overflow-hidden rounded-xl">
                <img
                    src={imageSrc}
                    alt="Prestasi"
                    className="aspect-square w-full overflow-hidden rounded-xl object-cover"
                />
            </div>
            <div>
                <h2 className="font-bold text-sm md:text-xl text-center text-color-accent">{title}</h2>
            </div>
        </div>
    );
}

export default Card;