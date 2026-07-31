export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    className = "",
}) {
    const variants = {
        primary:
            "bg-[#1E66F5] text-white hover:bg-[#1558D6]",

        secondary:
            "bg-white text-[#2A6EE8] hover:bg-gray-100",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
        px-8 py-3
        rounded-xl
        font-semibold
        shadow-md
        transition-all
        duration-200
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </button>
    );
}