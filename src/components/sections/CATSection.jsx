import CATTimeline from "../timeline/CATTimeline";

const CATSection = () => {
    return (
        <section
            id="cat"
            className="bg-[#F7FAFF] py-16 md:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                        <span className="text-[#000]">The{" "}</span>
                        <span className="text-[#1677FF]">
                            CAT Framework
                        </span>
                    </h2>

                    <p className="mt-5 text-base text-gray-600 md:text-lg">
                        Our Proven Approach to{" "}
                        <span className="text-[#1677FF] font-medium">
                            Learning Excellence
                        </span>
                    </p>

                </div>

                <div className="mt-12 md:mt-16 lg:mt-20">
                    <CATTimeline />
                </div>

            </div>
        </section>
    );
};

export default CATSection;