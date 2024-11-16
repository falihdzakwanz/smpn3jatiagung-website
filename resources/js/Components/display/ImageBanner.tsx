interface Proptypes {
    imageSrc: string | null;
    imageAlt: string;
}

const ImageBanner = (props: Proptypes) => {
    const { imageSrc, imageAlt } = props;
    return (
        <>
            <div className="flex w-full items-center justify-center">
                <img
                    src={imageSrc || ""}
                    alt={imageAlt}
                    className="max-h-96 w-full overflow-hidden rounded-xl object-cover shadow-2xl"
                />
            </div>
        </>
    );
};

export default ImageBanner;
