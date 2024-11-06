const ArticleSection = (props: any) => {
    const { title, text } = props; 
    return (
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold md:text-4xl capitalize text-color-primary">
                    {title}
                </h1>
                <p className="whitespace-pre-wrap text-justify text-color-primary">
                    {text}
                </p>
            </div>
    );
};

export default ArticleSection;