"use client";

const TestimonialDots = ({ total, current, goTo }) => {
    return (
        <div className="mt-8 flex items-center justify-center gap-3">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => goTo(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${current === index
                            ? "bg-blue-600 scale-110"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                />
            ))}
        </div>
    );
};

export default TestimonialDots;