import FooterLogoAndDesc from './FooterLogoAndDesc';
import SocialMediaIcons from './SocialMediaIcons';
import SubFooter from './SubFooter';

const Footer = () => {
    return (
        <footer className="bg-color-primary py-8 font-roboto text-color-secondary">
            <div className="mx-auto px-8">
                <div className="flex flex-col items-center justify-center">
                    <FooterLogoAndDesc />

                    <SocialMediaIcons />
                </div>
            </div>
            <SubFooter />
        </footer>
    );
};

export default Footer;
