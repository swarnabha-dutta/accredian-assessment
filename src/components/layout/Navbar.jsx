"use client";

import Image from "next/image";
import { NAV_LINKS } from "@/constants/navbar";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeHash, setActiveHash] = useState("#home");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const hash = `#${entry.target.id}`;
                        setActiveHash(hash);
                        history.replaceState(null, "", hash);
                    }
                });
            },
            {
                threshold: 0.4,
                rootMargin: "-80px 0px -40% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                <a href="#home">
                    <Image
                        src="/images/common/logo-company.png"
                        alt="Accredian Logo"
                        width={150}
                        height={45}
                        priority
                    />
                </a>

                <nav className="flex items-center gap-8 text-sm font-medium">
                    {NAV_LINKS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`border-b-2 pb-1 transition-all duration-300 ${activeHash === item.href
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent text-gray-700 hover:text-blue-600"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}