const FooterLogoAndDesc = () => {
    return (
        <div className="mb-4 flex w-full flex-row items-center gap-4">
            <img
                src="https://www.dummyimage.com/100x100/000/fff&text=LOGO"
                alt="Logo"
                className="mb-4 h-20 w-20 md:mb-0 md:mr-4"
            />
            <div>
                <h2 className="text-xl font-bold tracking-widest md:text-2xl">
                    SPANTIJA
                </h2>
                <p className="text-justify text-sm md:text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus dolore consequuntur accusantium quisquam
                    veritatis quis totam molestiae optio iste architecto.
                </p>
            </div>
        </div>
    );
}

export default FooterLogoAndDesc;