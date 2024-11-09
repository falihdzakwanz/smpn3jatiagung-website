// File: /resources/js/hooks/useScrollTo.ts
export const useScrollTo = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return scrollTo;
};