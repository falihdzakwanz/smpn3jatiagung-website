import FooterLogoAndDesc from './FooterLogoAndDesc';
import SocialMediaIcons from './SocialMediaIcons';
import SubFooter from './SubFooter';

const Footer = () => {
    return (
        <footer className="bg-color-primary py-8 text-color-secondary font-roboto">
            <div className="mx-auto px-4">
                <div className="flex flex-col items-start justify-between md:gap-8 md:flex-row">
                    <FooterLogoAndDesc />
                    <div className="flex w-full flex-col items-center gap-x-8 md:w-1/2 md:flex-row md:items-start">
                        <div>
                            <div className="flex flex-col items-center gap-2 md:mb-0 md:mr-4 md:items-start md:text-lg">
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
                            <SocialMediaIcons />
                        </div>
                    </div>
                </div>
            </div>
            <SubFooter />
        </footer>
    );
};

export default Footer;
