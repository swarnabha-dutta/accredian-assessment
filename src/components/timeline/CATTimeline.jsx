import Image from "next/image";

const CATTimeline = () => {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <Image
                src="/images/cat/catV2.svg"
                alt="CAT Framework"
                width={1400}
                height={560}
                priority
                className="
          h-auto
          w-full
          select-none
          object-contain
        "
            />
        </div>
    );
};

export default CATTimeline;