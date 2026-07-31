"use client";

const domains = [
    "Product Management",
    "CFO",
    "Data Science",
    "Artificial Intelligence",
    "Human Resource",
    "Strategy & Leadership",
    "General Management",
    "Digital Transformation",
    "Business Management",
    "Finance",
    "Project Management",
    "Senior Management",
];

const deliveryModes = ["Online", "Offline"];

export default function EnquiryForm({
    formData,
    handleChange,
    handleSubmit,
    loading,
}) {
    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8"
        >
            <fieldset disabled={loading}>
                {/* Name */}
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="w-full border-b border-gray-300 pb-3 text-lg text-black outline-none placeholder:text-gray-400 focus:border-[#2973E8]"
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full border-b border-gray-300 pb-3 text-lg text-black outline-none placeholder:text-gray-400 focus:border-[#2973E8]"
                />

                {/* Phone */}
                <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
                    <span className="text-black">
                        🇮🇳 +91
                    </span>

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 outline-none"
                    />
                </div>

                {/* Company */}
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full border-b border-gray-300 pb-3 text-lg outline-none placeholder:text-gray-400 focus:border-[#2973E8]"
                />

                {/* Domain */}
                <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 bg-transparent pb-3 text-lg text-gray-700 outline-none focus:border-[#2973E8]"
                >
                    <option value="">
                        Select Domain
                    </option>

                    {domains.map((domain) => (
                        <option
                            key={domain}
                            value={domain}
                        >
                            {domain}
                        </option>
                    ))}
                </select>

                {/* Candidates */}
                <input
                    type="number"
                    name="candidates"
                    value={formData.candidates}
                    onChange={handleChange}
                    placeholder="Enter No. of candidates"
                    className="w-full border-b border-gray-300 pb-3 text-lg outline-none placeholder:text-gray-400 focus:border-[#2973E8]"
                />

                {/* Delivery */}
                <select
                    name="delivery"
                    value={formData.delivery}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 bg-transparent pb-3 text-lg text-gray-700 outline-none focus:border-[#2973E8]"
                >
                    <option value="">
                        Select Mode of Delivery *
                    </option>

                    {deliveryModes.map((mode) => (
                        <option
                            key={mode}
                            value={mode}
                        >
                            {mode}
                        </option>
                    ))}
                </select>

                {/* Location */}
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Eg: Gurgaon, Delhi, India"
                    className="w-full border-b border-gray-300 pb-3 text-lg outline-none placeholder:text-gray-400 focus:border-[#2973E8]"
                />

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`mt-4 flex w-full items-center justify-center rounded-xl py-4 text-xl font-semibold text-white transition ${loading
                        ? "cursor-not-allowed bg-[#7AAAF8]"
                        : "cursor-pointer bg-[#2973E8] hover:bg-[#165fd4]"
                        }`}
                >
                    {loading ? (
                        <>
                            <svg
                                className="mr-3 h-6 w-6 animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    className="opacity-25"
                                />

                                <path
                                    fill="currentColor"
                                    className="opacity-75"
                                    d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
                                />
                            </svg>

                            Submitting...
                        </>
                    ) : (
                        "Submit"
                    )}
                </button>
            </fieldset>
        </form>
    );
}