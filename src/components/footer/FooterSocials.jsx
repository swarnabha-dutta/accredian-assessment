import { socialLinks } from "@/constants/footer";

const FooterSocials = () => {
    return (
        <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-700 transition-colors duration-300 hover:text-blue-600"
                >
                    <Icon className="h-6 w-6" />
                </a>
            ))}
        </div>
    );
};

export default FooterSocials;