import { footerLinks } from "@/constants/footer";

const FooterLinks = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
                Accredian
            </h3>

            <nav className="flex flex-col gap-4">
                {footerLinks.map(({ title, href }) => (
                    <a
                        key={title}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit text-xl text-gray-700 transition-colors duration-300 hover:text-blue-600"
                    >
                        {title}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default FooterLinks;