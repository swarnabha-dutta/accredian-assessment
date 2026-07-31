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
    const inputClass =
        "w-full border-b border-[#D4D8E1] pb-4 text-[18px] text-[#1F2937] outline-none placeholder:text-[#9CA3AF] focus:border-[#2973E8]";

    const selectClass =
        "w-full border-b border-[#D4D8E1] bg-transparent pb-4 text-[18px] text-[#374151] outline-none focus:border-[#2973E8]";

    return (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <fieldset className="space-y-6">
                {/* Name */}
                <input
                    disabled={loading}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className={inputClass}
                />

                {/* Email */}
                <input
                    disabled={loading}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className={inputClass}
                />

                {/* Phone */}
                <div className="flex items-center border-b border-[#D4D8E1] pb-4">
                    <div className="mr-4 flex items-center gap-2 text-[18px] text-[#111827]">
                        <span>🇮🇳</span>
                        <span>+91</span>
                    </div>

                    <input
                        disabled={loading}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 text-[18px] text-[#1F2937] outline-none"
                    />
                </div>

                {/* Company */}
                <input
                    disabled={loading}
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className={inputClass}
                />

                {/* Domain */}
                <select
                    disabled={loading}
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className={selectClass}
                >
                    <option value="">Select Domain</option>

                    {domains.map((domain) => (
                        <option key={domain} value={domain}>
                            {domain}
                        </option>
                    ))}
                </select>

                {/* Candidates */}
                <input
                    disabled={loading}
                    type="number"
                    name="candidates"
                    value={formData.candidates}
                    onChange={handleChange}
                    placeholder="Enter No. of candidates"
                    className={inputClass}
                />

                {/* Delivery */}
                <select
                    disabled={loading}
                    name="delivery"
                    value={formData.delivery}
                    onChange={handleChange}
                    className={selectClass}
                >
                    <option value="">Select Mode of Delivery *</option>

                    {deliveryModes.map((mode) => (
                        <option key={mode} value={mode}>
                            {mode}
                        </option>
                    ))}
                </select>

                {/* Location */}
                <input
                    disabled={loading}
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Eg: Gurgaon, Delhi, India"
                    className={inputClass}
                />
            </fieldset>

            {/* Submit Button */}
            <button
                type="submit"
                style={{
                    backgroundColor: "#2973E8",
                    color: "#fff",
                    opacity: 1,
                }}
            >
                Submit
            </button>
        </form>
    );
}