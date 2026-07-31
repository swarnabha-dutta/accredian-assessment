import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";
import FooterTop from "./FooterTop";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <FooterTop />

                <div className="my-12 border-t border-gray-200" />

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <FooterLinks />

                    <FooterContact />
                </div>

                <div className="mt-12">
                    <FooterCopyright />
                </div>
            </div>
        </footer>
    );
};

export default Footer;