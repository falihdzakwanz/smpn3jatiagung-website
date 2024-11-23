export const getImageSrc = (imageSrc: string | File | null): string => {
    return imageSrc instanceof File ? URL.createObjectURL(imageSrc) : imageSrc || '';
};
