import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-color-primary py-8 text-color-secondary">
            <div className="mx-auto px-4">
                <div className="flex flex-col items-start justify-between md:gap-8 md:flex-row">
                    <div className="mb-4 flex w-full flex-row items-center gap-4 border-r-color-secondary md:w-1/2 md:border-r md:pr-8">
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
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Repellendus dolore
                                consequuntur accusantium quisquam veritatis quis
                                totam molestiae optio iste architecto.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col items-center md:w-1/2 md:flex-row md:items-start">
                        <div>
                            <div className="mb-6 flex flex-col items-center gap-2 md:mb-0 md:mr-4 md:items-start md:text-lg">
                                <a href="#" className="hover:text-color-accent">
                                    About
                                </a>
                                <a href="#" className="hover:text-color-accent">
                                    Terms Of Use
                                </a>
                                <a href="#" className="hover:text-color-accent">
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="mt-2 flex gap-12">
                                <a href="#" className="hover:text-color-accent">
                                    <FaFacebook className="text-2xl md:text-4xl" />
                                </a>
                                <a href="#" className="hover:text-color-accent">
                                    <FaInstagram className="text-2xl md:text-4xl" />
                                </a>
                                <a href="#" className="hover:text-color-accent">
                                    <FaYoutube className="text-2xl md:text-4xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t pt-4">
                <p className="text-center text-sm">
                    &copy; Copyright 2024, All Rights Reserved by SPANTIJA
                </p>
            </div>
        </footer>
    );
};

export default Footer;
