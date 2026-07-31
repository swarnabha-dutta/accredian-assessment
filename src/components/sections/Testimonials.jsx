"use client";

import { testimonials } from "@/data/testimonials";
import useTestimonials from "@/hooks/useTestimonials";
import TestimonialsSlider from "../slider/TestimonialsSlider";
import TestimonialDots from "../slider/TestimonialDots";

const Testimonials = () => {
    const totalSlides = testimonials.length - 1;

    const { current, goTo } = useTestimonials(totalSlides);

    return (
        <section
            id="testimonials"
            className="mx-auto max-w-7xl px-6 py-20"
        >
            {/* Heading */}
            <div className="mb-14 text-center">
                <h2 className="text-5xl font-bold text-[#0F172A]">
                    <span className="text-[#000]">Testimonials from{" "}</span>
                    <span className="text-[#2563EB]">Our Partners</span>
                </h2>

                <p className="mt-3 text-2xl text-[#1F2937]">
                    What <span className="text-[#2563EB]">Our Clients</span> Are Saying
                </p>
            </div>

            {/* Slider */}
            <TestimonialsSlider />

            {/* Pagination */}
            <TestimonialDots
                total={totalSlides}
                current={current}
                goTo={goTo}
            />
        </section>
    );
};

export default Testimonials;