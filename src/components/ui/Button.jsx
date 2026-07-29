export default function Button({ children }) {
    return (
        <button className="bg-[#1E66F5] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#1558d6] transition">
            {children}
        </button>
    );
}