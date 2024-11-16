const ImageBanner = (props: any) => {
    const { imageSrc } = props;
    return (
        <>
            <div className="flex w-full items-center justify-center">
                <img
                    src={imageSrc}
                    alt="Berita"
                    className="max-h-96 w-full overflow-hidden rounded-xl object-cover shadow-2xl"
                />
            </div>
        </>
    );
};

export default ImageBanner;
