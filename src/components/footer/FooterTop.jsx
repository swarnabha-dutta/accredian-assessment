"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import EnquiryModal from "@/components/modal/EnquiryModal";
import FooterSocials from "./FooterSocials";

const FooterTop = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                {/* Left */}
                <div className="flex flex-col items-center gap-6 lg:items-start">
                    <Image
                        src="/images/footer/footer-company-logo.png"
                        alt="Accredian"
                        width={180}
                        height={50}
                        priority
                    />

                    <FooterSocials />
                </div>

                {/* Right */}
                <div className="flex flex-col items-center gap-5 text-center lg:items-end lg:text-right">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">
                            Ready to Upskill?
                        </h3>

                        <p className="mt-2 text-lg text-gray-600">
                            Speak with our advisor and discover the right learning path for
                            your career.
                        </p>
                    </div>

                    <Button onClick={() => setIsModalOpen(true)}>
                        Enquire Now
                    </Button>
                </div>
            </div>

            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default FooterTop;