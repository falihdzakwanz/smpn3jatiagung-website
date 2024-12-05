interface Proptypes {
    title: string;
    text: string;
}

const ArticleSection = (props: Proptypes) => {
    const { title, text } = props;
    return (
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4">
            <h1 className="font-libre-bold text-2xl font-bold capitalize text-color-primary md:text-4xl">
                {title}
            </h1>
            <p className="whitespace-pre-wrap text-justify text-color-primary md:text-lg">
                {text}
            </p>
        </div>
    );
};

export default ArticleSection;
