import CourseCard from "../cards/CourseCard";
import courseSegmentation from "@/data/courseSegmentation";

export default function CourseSegmentation() {
    return (
        <section
            id="course-segmentation"
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl lg:text-6xl font-bold">
                        <span className="text-[#000]">Tailored{" "}</span>
                        <span className="text-[#2563EB]">
                            Course Segmentation
                        </span>
                    </h2>

                    <p className="mt-5 text-lg text-gray-700">
                        Explore{" "}
                        <span className="text-[#2563EB]">
                            Custom-fit Courses
                        </span>{" "}
                        Designed to Address Every Professional Focus
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {courseSegmentation.map((course) => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            image={course.image}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}