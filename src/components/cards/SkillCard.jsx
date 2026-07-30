export default function SkillCard({
    Icon,
    title,
    description,
}) {
    return (
        <div className="flex gap-5 items-start">

            <Icon
                size={56}
                className="text-white shrink-0"
                strokeWidth={2}
            />

            <div>

                <h3 className="text-3xl font-bold text-white">
                    {title}
                </h3>

                <p className="mt-3 text-white/90 leading-8 text-lg">
                    {description}
                </p>

            </div>

        </div>
    );
}