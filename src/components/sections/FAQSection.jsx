"use client";

import { useState } from "react";
import EnquiryModal from "../modal/EnquiryModal";
import { faqCategories } from "@/data/faq";
import FAQAccordion from "../accordion/FAQAccordion";
import Button from "../ui/Button";

const FAQSection = () => {
    const [activeCategory, setActiveCategory] = useState("course");

    const [open, setOpen] = useState(false);

    const activeFAQs =
        faqCategories.find(
            (category) => category.id === activeCategory
        )?.faqs || [];

    return (
        <>
            <section
                id="faqs"
                className="bg-white py-20 md:py-24 scroll-mt-24"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Heading */}
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold text-[#111827] md:text-5xl">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-12 lg:flex-row">
                        {/* Left Side */}
                        <div className="lg:w-[320px] shrink-0">
                            <div className="space-y-5">
                                {faqCategories.map((category) => {
                                    const active = activeCategory === category.id;

                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`w-full cursor-pointer rounded-xl border px-6 py-5 text-left text-lg font-semibold transition-all duration-300 ${active
                                                ? "border-[#2973E8] bg-[#2973E8] text-white shadow-lg"
                                                : "border-gray-200 bg-white text-gray-800 hover:border-[#2973E8] hover:text-[#2973E8] hover:shadow-md"
                                                }`}
                                        >
                                            {category.title}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
                            <FAQAccordion
                                faqs={activeFAQs}
                                category={activeCategory}
                            />
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-14 flex justify-center">
                        <Button onClick={() => setOpen(true)}>
                            Enquire Now
                        </Button>
                    </div>
                </div>
            </section>

            <EnquiryModal
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default FAQSection;