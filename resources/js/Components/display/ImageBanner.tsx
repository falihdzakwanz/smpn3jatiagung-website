import { getImageSrc } from "@/utils/getImageSrc";

interface Proptypes {
    imageSrc: string | File | null;
    imageAlt: string;
}

const ImageBanner = (props: Proptypes) => {
    const { imageSrc, imageAlt } = props;

    const src = getImageSrc(imageSrc);

    return (
        <div className="flex w-full items-center justify-center">
            <img
                src={src}
                alt={imageAlt}
                className="max-h-96 w-full overflow-hidden rounded-xl object-cover shadow-2xl"
            />
        </div>
    );
};

export default ImageBanner;
