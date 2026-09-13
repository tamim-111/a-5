import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
    technology: Technology;
    isAdded: boolean;
    onAddToStack: (technology: Technology) => void;
}

const TechnologyCard = ({
    technology,
    isAdded,
    onAddToStack,
}: TechnologyCardProps) => {
    return (
        <article className="card h-full border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md">
            <div className="card-body p-5">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-base-200 p-3">
                        <img
                            src={technology.icon}
                            alt={`${technology.name} logo`}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <span className="badge badge-secondary">
                        {technology.badge}
                    </span>
                </div>

                {/* Technology Name */}
                <h2 className="card-title mt-3 text-xl">
                    {technology.name}
                </h2>

                {/* Description */}
                <p className="text-sm leading-6 text-base-content/60">
                    {technology.description}
                </p>

                {/* Category + Difficulty */}
                <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="badge badge-outline">
                        {technology.category}
                    </span>

                    <span className="badge badge-ghost">
                        {technology.difficulty}
                    </span>
                </div>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-warning">★</span>

                    <span className="text-sm font-medium">
                        {technology.rating}
                    </span>
                </div>

                {/* Add Button */}
                <div className="card-actions mt-3">
                    <button
                        type="button"
                        disabled={isAdded}
                        onClick={() => onAddToStack(technology)}
                        className={`btn w-full rounded-full ${isAdded
                                ? "btn-disabled"
                                : "brand-gradient border-0 text-white hover:opacity-90"
                            }`}
                    >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default TechnologyCard;