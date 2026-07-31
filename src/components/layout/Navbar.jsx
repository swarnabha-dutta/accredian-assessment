"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/constants/navbar";

export default function Navbar() {
    const [activeHash, setActiveHash] = useState("#home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
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

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
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

                    {/* Tablet + Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden text-gray-900"
                        aria-label="Open Menu"
                    >
                        <Menu size={38} />
                    </button>
                </div>
            </header>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30"
                />
            )}

            {/* Drawer */}
            <aside
                className={`fixed top-0 right-0 z-50 h-screen w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-6">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X size={40} />
                    </button>
                </div>

                <nav className="flex flex-col px-8 pb-10">
                    {NAV_LINKS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className={`py-4 text-2xl transition-colors duration-300 ${activeHash === item.href
                                ? "font-semibold text-blue-600"
                                : "text-gray-800 hover:text-blue-600"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
}