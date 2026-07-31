"use client";

import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { X } from "lucide-react";

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

const EnquiryModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        domain: "",
        candidates: "",
        delivery: "",
        location: "",
    });

    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);


        await new Promise((resolve) => setTimeout(resolve, 2000));

        setLoading(false);

        await Swal.fire({
            icon: "error",
            title: "Oops! Something went wrong",
            text: "We couldn't submit your request at the moment. Please try again shortly or contact support if the issue persists.",
            confirmButtonColor: "#6C5CE7",
            confirmButtonText: "OK",
        });

        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            domain: "",
            candidates: "",
            delivery: "",
            location: "",
        });

        // Close modal
        onClose();
    };

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[1200px] overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 z-20 cursor-pointer text-gray-500 hover:text-black"
                >
                    <X size={34} />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Image */}

                    <div className="relative hidden lg:block min-h-[760px]">
                        <Image
                            src="/images/cta/enquire-banner.png"
                            alt="Enquire Banner"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Right Form */}
                    <div className="flex flex-col justify-center px-12 py-10">
                        <h2 className="mb-10 text-5xl font-bold text-[#111827]">
                            Enquire Now
                        </h2>


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
                                    className="w-full border-b border-gray-300 pb-3 text-lg outline-none placeholder:text-gray-400 focus:border-[#2973E8] text-[#000]"
                                />

                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email"
                                    className="w-full border-b border-gray-300 pb-3 text-lg outline-none placeholder:text-gray-400 focus:border-[#2973E8] text-[#000]"
                                />

                                {/* Phone */}
                                <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
                                    <span className="text-[#000]">🇮🇳{" "} +91</span>



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
                                    <option value="">Select Domain</option>

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

                                {/* Delivery Mode */}
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
                                    className={`mt-4 flex w-full items-center justify-center rounded-xl py-4 text-xl font-semibold text-white transition duration-300 ${loading
                                        ? "cursor-not-allowed bg-[#7AAAF8]"
                                        : "cursor-pointer bg-[#2973E8] hover:bg-[#165fd4]"
                                        }`}
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="mr-3 h-6 w-6 animate-spin text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />

                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
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
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EnquiryModal;