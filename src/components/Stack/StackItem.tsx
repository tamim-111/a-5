import type { Technology } from "../../types/technology";

interface StackItemProps {
    technology: Technology;
    onRemove: (technologyId: string) => void;
}

const StackItem = ({
    technology,
    onRemove,
}: StackItemProps) => {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 p-3">
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-base-200 p-2">
                <img
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                    className="h-full w-full object-contain"
                />
            </div>

            {/* Information */}
            <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold">
                    {technology.name}
                </h3>

                <p className="text-xs text-base-content/60">
                    {technology.category}
                </p>
            </div>

            {/* Remove */}
            <button
                type="button"
                onClick={() => onRemove(technology.id)}
                className="btn btn-ghost btn-sm btn-square text-error"
                aria-label={`Remove ${technology.name}`}
            >
                ✕
            </button>
        </div>
    );
};

export default StackItem;