export default function Button({
    children,
    onClick,
    type = "button",
    className = "",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-[#1E66F5] text-white px-8 py-3 rounded-lg font-semibold shadow-md transition hover:bg-[#1558d6] ${className}`}
            style={{ "cursor": "pointer" }}
        >
            {children}
        </button>
    );
}