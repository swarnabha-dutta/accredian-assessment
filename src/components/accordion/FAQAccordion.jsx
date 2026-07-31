"use client";

import { useEffect, useState } from "react";
import FAQItem from "./FAQItem";

const FAQAccordion = ({ faqs, category }) => {
    const [openIndex, setOpenIndex] = useState(0);

    // Reset to first question whenever category changes
    useEffect(() => {
        setOpenIndex(0);
    }, [category]);

    const handleToggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="w-full">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={faq.question}
                    faq={faq}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default FAQAccordion;