import Image from "next/image";

export default function CourseCard({
    title,
    description,
    image,
}) {
    return (
        <div
            className="
      overflow-hidden
      rounded-2xl
      bg-white
      border
      border-gray-200
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
        >
            <div className="overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>

            <div className="p-7 text-center">

                <h3 className="text-3xl font-bold text-[#2563EB]">
                    {title}
                </h3>

                <p className="mt-4 text-gray-700 leading-8 text-lg">
                    {description}
                </p>

            </div>
        </div>
    );
}