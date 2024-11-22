type Proptypes = {
    images: string[];
};

const ActivityImages = (props: Proptypes) => {
    const { images } = props;

    return (
        <div className="mt-4 flex flex-wrap justify-center gap-12">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="max-h-72 transform rounded-xl bg-color-accent p-4 transition duration-300 ease-in-out hover:scale-105"
                >
                    <img
                        src={`${image}`}
                        alt={`Foto Kegiatan ${index + 1}`}
                        className="aspect-square h-64 overflow-hidden rounded-md object-cover shadow-lg transition duration-300 ease-in-out hover:shadow-2xl"
                    />
                </div>
            ))}
        </div>
    );
};

export default ActivityImages;
