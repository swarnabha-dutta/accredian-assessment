"use client";

import { ChevronDown } from "lucide-react";

const FAQItem = ({ faq, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-6 text-left cursor-pointer"
            >
                <h3
                    className={`text-[18px] md:text-[20px] font-semibold leading-snug transition-colors duration-300 ${isOpen ? "text-[#2973E8]" : "text-[#111827]"
                        }`}
                >
                    {faq.question}
                </h3>

                <ChevronDown
                    size={24}
                    className={`shrink-0 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"
                    }`}
            >
                <p className="pr-8 text-[17px] leading-8 text-gray-800">
                    {faq.answer}
                </p>
            </div>
        </div>
    );
};

export default FAQItem;