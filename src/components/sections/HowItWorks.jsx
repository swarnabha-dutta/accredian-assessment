"use client";

import SectionContainer from "../ui/SectionContainer";
import HowItWorksCard from "../cards/HowItWorksCard";
import { howItWorksData } from "@/constants/howItWorks";

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="py-24"
        >
            <SectionContainer>

                {/* Heading */}

                <div className="text-center">

                    <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
                        <span className="text-[#000]">How We{" "}</span>
                        <span className="text-[#2F80ED]">
                            Deliver Results
                        </span>{" "}
                        <span className="text-[#000]">That Matter?</span>
                    </h2>

                    <p className="mt-5 text-lg text-gray-600 lg:text-xl">
                        A Structured Three-Step Approach to{" "}
                        <span className="text-[#2F80ED]">
                            Skill Development
                        </span>
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {howItWorksData.map((item) => (

                        <HowItWorksCard
                            key={item.id}
                            step={item.id}
                            title={item.title}
                            description={item.description}
                            Icon={item.icon}
                        />

                    ))}

                </div>

            </SectionContainer>
        </section>
    );
}