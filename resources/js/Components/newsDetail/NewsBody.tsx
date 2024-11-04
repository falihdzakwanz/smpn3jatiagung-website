const NewsBody = (props: any) => {
    const { title, text } = props; 
    return (
        <>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold md:text-4xl">
                    {`Detail Berita` || title}
                </h1>
                <p className="whitespace-pre-wrap text-justify">
                    {`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus assumenda officiis molestiae id, vel magni cum unde architecto temporibus eveniet dolore non a optio mollitia eligendi facilis! Voluptatum voluptatem repudiandae est odio, blanditiis debitis modi doloribus in odit reiciendis iusto officiis non eum fugiat libero ipsum, placeat consequuntur dicta, quaerat architecto. Doloremque magni unde voluptas repudiandae at magnam cupiditate laboriosam ab quas reiciendis consequuntur, accusantium illum suscipit ullam eos. Modi odit officia minus perspiciatis alias soluta distinctio iusto eos consequatur voluptate. Ab saepe facere esse, debitis eos voluptatum, officiis perspiciatis dolor illum eius suscipit sunt earum molestias. Quisquam, voluptatibus itaque.`}
                </p>
            </div>
        </>
    );
};

export default NewsBody;
