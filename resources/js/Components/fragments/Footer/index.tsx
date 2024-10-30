import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white py-8 shadow-md">
            <div className="mx-auto px-4">
                <div className="flex flex-col items-start justify-between md:flex-row">
                    <div className="flex w-full flex-row items-center gap-4 mb-4 md:w-1/2">
                        <img
                            src="https://www.dummyimage.com/100x100/000/fff&text=LOGO"
                            alt="Logo"
                            className="mb-4 h-20 w-20 md:mb-0 md:mr-4"
                        />
                        <div>
                            <h2 className="text-xl font-bold">SPANTIJA</h2>
                            <p className="text-sm text-justify">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Repellendus dolore
                                consequuntur accusantium quisquam veritatis quis
                                totam molestiae optio iste architecto.
                            </p>
                        </div>
                    </div>

                    <div className="mx-8 hidden h-24 border-l border-gray-700 md:block"></div>

                    <div className="flex w-full flex-col items-center md:w-1/2 md:flex-row md:items-start">
                        <div>
                            <div className="mb-6 flex flex-col items-center md:mb-0 md:mr-4 md:items-start">
                                <a
                                    href="#"
                                    className="mb-2 text-black hover:text-gray-700"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="mb-2 text-black hover:text-gray-700"
                                >
                                    Terms Of Use
                                </a>
                                <a
                                    href="#"
                                    className="text-black hover:text-gray-700"
                                >
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <a
                                    href="#"
                                    className="text-black hover:text-gray-700"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="#"
                                    className="text-black hover:text-gray-700"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="#"
                                    className="text-black hover:text-gray-700"
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t pt-4">
                <p className="text-center text-sm">
                    &copy; 2024, All Rights Reserved by SPANTIJA
                </p>
            </div>
        </footer>
    );
};

export default Footer;
