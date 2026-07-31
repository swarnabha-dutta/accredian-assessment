"use client";

import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { X } from "lucide-react";
import EnquiryForm from "../form/EnquiryForm";

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

    const loading = false;

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

        await Swal.fire({
            icon: "success",
            title: "Button Working",
            text: "Loading disabled for testing",
        });
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
                        <h2 className="text-4xl md:text-[56px] font-bold leading-none text-[#111827] ">
                            Enquire Now
                        </h2>


                        <EnquiryForm
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            loading={loading}

                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EnquiryModal;