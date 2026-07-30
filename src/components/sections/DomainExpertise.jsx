import DomainCard from "../cards/DomainCard";
import domainExpertise from "@/data/domainExpertise";

export default function DomainExpertise() {
    return (
        <section
            id="domain-expertise"
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl lg:text-6xl font-bold">
                        <span className="text-[#000]">Our{" "}</span>
                        <span className="text-[#2563EB]">
                            Domain Expertise
                        </span>
                    </h2>

                    <p className="mt-5 text-lg text-gray-600">
                        <span className="text-[#2563EB]">
                            Specialized Programs
                        </span>{" "}
                        Designed to Fuel Innovation
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {domainExpertise.map((item) => (
                        <DomainCard
                            key={item.id}
                            title={item.title}
                            Icon={item.icon}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}