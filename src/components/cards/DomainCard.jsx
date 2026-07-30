export default function DomainCard({ title, Icon }) {
    return (
        <div
            className="
        bg-white
        rounded-2xl
        shadow-md
        border
        border-gray-100
        p-8
        flex
        flex-col
        items-center
        justify-center
        gap-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
        >
            <Icon
                size={52}
                className="text-[#2563EB]"
                strokeWidth={2}
            />

            <h3 className="text-2xl font-semibold text-black text-center">
                {title}
            </h3>
        </div>
    );
}