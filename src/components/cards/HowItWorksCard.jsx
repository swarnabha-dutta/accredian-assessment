"use client";

export default function HowItWorksCard({
    step,
    title,
    description,
    Icon,
}) {
    return (
        <div
            className="
                relative
                flex
                h-[350px]
                flex-col
                items-center
                rounded-2xl
                border
                border-[#8CB9FF]
                bg-[#EDF4FD]
                px-8
                pt-12
                pb-8
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                text-[#000]
            "
        >
            {/* Step */}

            <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#2F80ED] bg-white text-lg font-bold">
                {step}
            </div>

            {/* Icon */}

            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#2F80ED] shadow-lg">
                <Icon
                    size={34}
                    strokeWidth={2}
                    className="text-white"
                />
            </div>

            {/* Title */}

            <h3 className="mt-8 text-center text-[20px] font-bold text-[#111827]">
                {title}
            </h3>

            {/* Description */}

            <p className="mt-5 text-center text-[16px] leading-8 text-[#4B5563]">
                {description}
            </p>
        </div>
    );
}