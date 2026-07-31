import Image from "next/image";

const TestimonialCard = ({ logo, company, review }) => {
    return (
        <article
            className="
        w-full
        min-h-[300px]
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-12
        transition-shadow
        duration-300
        hover:shadow-md
      "
        >
            {/* Company Logo */}
            <div className="mb-10">
                <Image
                    src={logo}
                    alt={company}
                    width={60}
                    height={60}
                    className="object-contain"
                />
            </div>

            {/* Review */}
            <p className="text-[18px] leading-10 text-[#374151]">
                "{review}"
            </p>
        </article>
    );
};

export default TestimonialCard;