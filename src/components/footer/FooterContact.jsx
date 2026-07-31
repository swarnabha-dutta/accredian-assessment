import { contactInfo } from "@/constants/footer";

const FooterContact = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
                Contact Us
            </h3>

            <div className="space-y-4 text-xl text-gray-700">
                <p className="leading-relaxed">
                    <span className="font-medium text-gray-900">Email us:</span>{" "}
                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-blue-600 transition-colors duration-300 hover:underline"
                    >
                        {contactInfo.email}
                    </a>
                </p>

                <p className="leading-relaxed">
                    <span className="font-medium text-gray-900">Office Address:</span>{" "}
                    {contactInfo.address}
                </p>
            </div>
        </div>
    );
};

export default FooterContact;