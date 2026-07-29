export default function StatCard({
    value,
    description,
    showDivider,
}) {
    return (
        <div className="relative flex flex-col items-center px-8 text-center">
            <div className="rounded-full bg-[#DCEBFF] px-6 py-2">
                <span className="text-[36px] font-bold text-[#1E6FF2]">
                    {value}
                </span>
            </div>

            <p className="mt-6 max-w-[300px] text-lg leading-8 text-[#111827]">
                {description}
            </p>

            {showDivider && (
                <div className="absolute right-0 top-0 h-full w-px bg-gray-200" />
            )}
        </div>
    );
}