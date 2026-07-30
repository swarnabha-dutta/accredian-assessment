import Image from "next/image";
import SkillCard from "../cards/SkillCard";
import strategicSkills from "@/data/strategicSkills";

export default function StrategicSkill() {
    return (
        <section
            id="strategic-skill"
            className="py-24 bg-white"
        >
            <div className="max-w-[1500px] mx-auto px-6">

                <div
                    className="
                        bg-[#2F6FE4]
                        rounded-[28px]
                        px-16
                        pt-14
                        pb-0
                        min-h-[540px]
                        overflow-hidden
                    "
                >
                    <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 h-full">

                        {/* LEFT */}

                        <div className="flex flex-col justify-between">

                            <div>

                                <p className="text-[22px] font-medium text-white">
                                    Who Should Join?
                                </p>

                                <h2 className="mt-5 text-5xl lg:text-6xl font-bold leading-tight text-white max-w-[540px]">
                                    Strategic Skill Enhancement
                                </h2>

                            </div>

                            {/* IMAGE */}

                            <div className="flex items-end mt-10">

                                <Image
                                    src="/images/strategic-skills/professionals.png"
                                    alt="Professionals"
                                    width={620}
                                    height={620}
                                    priority
                                    className="
                                        w-[520px]
                                        h-auto
                                        object-contain
                                        object-bottom
                                        -mb-1
                                    "
                                />

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="grid sm:grid-cols-2 gap-x-14 gap-y-16 items-start self-center">

                            {strategicSkills.map((item) => (
                                <SkillCard
                                    key={item.id}
                                    Icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}