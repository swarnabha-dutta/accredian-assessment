"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "../ui/Button";
import EnquiryModal from "../modal/EnquiryModal";

import { CTA_CONTENT } from "@/constants/cta";

export default function CTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="px-5 py-16">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#1F6FE5]">

                    {/* Background Circles */}

                    <div className="absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-white/10"></div>

                    <div className="absolute -right-10 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-white/10"></div>

                    <div className="absolute right-20 top-1/2 h-[240px] w-[240px] -translate-y-1/2 rounded-full border border-white/10"></div>

                    <div className="relative z-10 flex flex-col items-center justify-between gap-10 px-10 py-10 lg:flex-row">

                        {/* Left */}

                        <div className="flex items-center gap-6">

                            <Image
                                src="/images/cta/enquire-banner.png"
                                alt="Contact"
                                width={90}
                                height={90}
                                priority
                            />

                            <div>

                                <h2 className="text-3xl font-bold text-white">
                                    {CTA_CONTENT.title}
                                </h2>

                                <p className="mt-2 text-lg text-white">
                                    {CTA_CONTENT.subtitle}
                                </p>

                            </div>

                        </div>

                        {/* Right */}

                        <Button
                            variant="secondary"
                            onClick={() => setIsModalOpen(true)}
                            className="px-10 py-4 text-[18px]"
                        >
                            {CTA_CONTENT.buttonText}
                        </Button>

                    </div>

                </div>
            </section>

            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}