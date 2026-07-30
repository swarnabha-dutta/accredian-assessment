import { HERO } from "@/constants/home";
import Image from "next/image";
import Button from "../ui/Button";
import { CircleCheck } from "lucide-react";

const Home = () => {
    return (
        <section
            id="home"
            className="scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div
                    className="
            relative
            bg-[#EEF5FF]
            rounded-3xl
            shadow-lg
            flex
            items-center
            justify-between
            overflow-visible
            min-h-[380px]
            px-12
            py-8
          "
                >
                    {/* Left Content */}
                    <div className="w-[45%]">
                        <h1 className="text-[64px] font-bold leading-none text-black">
                            {HERO.title.line1}
                            <br />

                            <span className="text-[#1E66F5]">
                                {HERO.title.blue1}
                            </span>{" "}
                            {HERO.title.line2}

                            <br />

                            {HERO.title.line3}{" "}

                            <span className="text-[#1E66F5]">
                                {HERO.title.blue2}
                            </span>
                        </h1>

                        <p className="mt-8 text-[18px] leading-8 text-gray-800 max-w-md">
                            {HERO.description}
                        </p>

                        <div className="flex gap-6 mt-8">
                            {HERO.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2"
                                >
                                    <CircleCheck
                                        size={18}
                                        className="text-green-500"
                                    />

                                    <span className="text-sm text-gray-700">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <Button>{HERO.buttonText}</Button>
                        </div>
                    </div>

                    {/* Right Image */}

                    <div className="absolute bottom-0 -right-4 flex items-end h-full">
                        <Image
                            src="/images/home/hero.png"
                            alt="Enterprise Professionals"
                            width={620}
                            height={620}
                            className="h-[520px] w-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;