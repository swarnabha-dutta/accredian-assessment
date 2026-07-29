import Image from "next/image";

export default function ClientLogo({ logo, name }) {
    return (
        <div className="flex items-center justify-center">
            <Image
                src={logo}
                alt={name}
                width={180}
                height={80}
                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
        </div>
    );
}