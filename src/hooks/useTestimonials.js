"use client";

import { useCallback, useEffect, useState } from "react";

const useTestimonials = (totalSlides) => {
    const [current, setCurrent] = useState(0);

    // Next Slide
    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    // Previous Slide
    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    // Go To Specific Slide
    const goTo = useCallback((index) => {
        setCurrent(index);
    }, []);

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(next, 5000);

        return () => clearInterval(interval);
    }, [next]);

    return {
        current,
        next,
        prev,
        goTo,
    };
};

export default useTestimonials;