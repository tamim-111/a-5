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
        <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            {/* Top: Icon + Badge */}
            <div className="flex items-start justify-between">
                <img
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                    className="h-8 w-8 object-contain"
                />

                <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-500">
                    {technology.badge}
                </span>
            </div>

            {/* Technology Name */}
            <h2 className="mt-4 text-[17px] font-semibold text-slate-900">
                {technology.name}
            </h2>

            {/* Description */}
            <p className="mt-2 min-h-[66px] text-[12px] leading-5 text-slate-500">
                {technology.description}
            </p>

            {/* Divider */}
            <div className="my-4 border-t border-slate-100" />

            {/* Category + Difficulty + Rating */}
            <div className="flex items-center justify-between gap-2 text-[10px] text-slate-500">
                <span className="rounded-md bg-slate-50 px-2 py-1">
                    {technology.category}
                </span>

                <span>{technology.difficulty}</span>

                <span className="flex items-center gap-1 font-medium text-slate-700">
                    <span className="text-amber-400">★</span>
                    {technology.rating}
                </span>
            </div>

            {/* Add Button */}
            <button
                type="button"
                disabled={isAdded}
                onClick={() => onAddToStack(technology)}
                className={`mt-4 h-9 w-full rounded-lg text-xs font-medium transition-all ${isAdded
                    ? "cursor-not-allowed bg-slate-300 text-slate-500"
                    : "bg-slate-950 text-white hover:bg-slate-800 cursor-pointer"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </article>
    );
};

export default TechnologyCard;