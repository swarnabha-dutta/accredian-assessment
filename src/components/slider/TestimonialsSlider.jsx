"use client";

import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import useTestimonials from "@/hooks/useTestimonials";

const TestimonialsSlider = () => {
    // 3 testimonials -> 2 slides
    const totalSlides = testimonials.length - 1;

    const { current } = useTestimonials(totalSlides);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Desktop */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
                <TestimonialCard {...testimonials[current]} />
                <TestimonialCard {...testimonials[current + 1]} />
            </div>

            {/* Mobile */}
            <div className="md:hidden">
                <TestimonialCard {...testimonials[current]} />
            </div>
        </div>
    );
};

export default TestimonialsSlider;