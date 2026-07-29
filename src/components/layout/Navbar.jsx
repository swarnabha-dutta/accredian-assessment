import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navbar";

const Navbar = () => {
    return (
        <header className="w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/common/logo-company.png"
                        alt="Accredian Logo"
                        width={150}
                        height={45}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-8 text-sm font-medium">
                    {NAV_LINKS.map((item, index) => (
                        <Link
                            key={item}
                            href="#"
                            className={`transition-colors duration-200 hover:text-blue-600 ${index === 0
                                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                                : "text-gray-700"
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;