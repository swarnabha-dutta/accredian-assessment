const SVGPath = () => {
    return (
        <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 520"
            preserveAspectRatio="none"
        >
            <path
                d="
        M70 260
        C70 80 330 80 330 260
        S590 440 590 260
        S850 80 850 260
        S1130 440 1130 260
        "
                fill="none"
                stroke="#2C87D3"
                strokeWidth="6"
                strokeLinecap="round"
            />

            {/* Top Dots */}

            <circle cx="330" cy="150" r="10" fill="#2C87D3" />
            <circle cx="590" cy="370" r="10" fill="#2C87D3" />
            <circle cx="850" cy="150" r="10" fill="#2C87D3" />
            <circle cx="1070" cy="390" r="10" fill="#2C87D3" />
        </svg>
    );
};

export default SVGPath;