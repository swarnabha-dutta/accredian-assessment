import Image from "next/image";

export default function AccredianEdge() {
    return (
        <section
            id="accredian-edge"
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-bold">
                        <span className="text-[#000]">The</span>
                        <span className="text-[#2563EB]">
                            Accredian{" "} Edge
                        </span>
                    </h2>

                    <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
                        Enterprise learning ecosystem designed to upskill teams,
                        streamline learning journeys and measure business impact.
                    </p>
                </div>

                {/* Process Image */}

                <div className="flex justify-center">
                    <Image
                        src="/images/accredian-edge/accredian-edge-full-process.svg"
                        alt="Accredian Edge"
                        width={1500}
                        height={800}
                        className="w-full h-auto"
                    />
                </div>

            </div>
        </section>
    );
}