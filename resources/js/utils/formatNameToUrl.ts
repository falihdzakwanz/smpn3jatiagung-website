export const formatNameToUrl = (nama: string): string => {
    return nama.replace(/\s+/g, '-').toLowerCase();
};
