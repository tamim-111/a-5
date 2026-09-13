import type { Technology } from "../../types/technology";

import StackItem from "./StackItem";

interface StackSidebarProps {
    selectedTechnologies: Technology[];
    onRemove: (technologyId: string) => void;
    onRemoveAll: () => void;
}

const StackSidebar = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll,
}: StackSidebarProps) => {
    const selectedCount = selectedTechnologies.length;

    return (
        <aside className="card h-fit border border-base-300 bg-base-100 shadow-sm lg:sticky lg:top-24">
            <div className="card-body p-5">
                {/* Header */}
                <div>
                    <h2 className="text-xl font-bold">Your Stack</h2>

                    <p className="mt-1 text-sm text-base-content/60">
                        {selectedCount}{" "}
                        {selectedCount === 1
                            ? "Technology"
                            : "Technologies"}{" "}
                        Selected
                    </p>
                </div>

                {/* Empty State */}
                {selectedCount === 0 ? (
                    <div className="flex min-h-40 items-center justify-center text-center">
                        <p className="max-w-xs text-sm leading-6 text-base-content/50">
                            Your stack is empty. Add technologies from
                            the list to build your stack.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Selected Technologies */}
                        <div className="mt-4 flex flex-col gap-3">
                            {selectedTechnologies.map((technology) => (
                                <StackItem
                                    key={technology.id}
                                    technology={technology}
                                    onRemove={onRemove}
                                />
                            ))}
                        </div>

                        {/* Remove All */}
                        <button
                            type="button"
                            onClick={onRemoveAll}
                            className="btn btn-error btn-outline mt-5 w-full rounded-md"
                        >
                            Remove All
                        </button>
                    </>
                )}
            </div>
        </aside>
    );
};

export default StackSidebar;