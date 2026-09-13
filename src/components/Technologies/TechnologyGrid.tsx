import type { Technology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
    technologies: Technology[];
    selectedTechnologies: Technology[];
    onAddToStack: (technology: Technology) => void;
}

const TechnologyGrid = ({
    technologies,
    selectedTechnologies,
    onAddToStack,
}: TechnologyGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
                const isAdded = selectedTechnologies.some(
                    (selectedTechnology) => selectedTechnology.id === technology.id
                );

                return (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        isAdded={isAdded}
                        onAddToStack={onAddToStack}
                    />
                );
            })}
        </div>
    );
};

export default TechnologyGrid;