import { STATS } from "@/constants/stats";
import StatCard from "../cards/StatCard";

export default function Stats() {
    return (
        <section className="py-28">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="text-center">
                    <h2 className="text-5xl font-bold">
                        <span className="text-[#000]">Our</span> <span className="text-[#1E6FF2]">Track Record</span>
                    </h2>

                    <p className="mt-5 text-xl">

                        <span className="text-[#1E6FF2]">
                            <span className="text-[#000]">The Numbers Behind Our Success</span>
                        </span>
                    </p>
                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-12 md:grid-cols-3">
                    {STATS.map((item, index) => (
                        <StatCard
                            key={item.id}
                            value={item.value}
                            description={item.description}
                            showDivider={index !== STATS.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}