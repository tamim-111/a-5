import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import TechnologyGrid from "./components/Technologies/TechnologyGrid";
import StackSidebar from "./components/Stack/StackSidebar";

import type { Technology } from "./types/technology";
import Hero from "./components/hero/hero";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>(
    []
  );

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  // Load technologies from JSON
  useEffect(() => {
    const loadTechnologies = async () => {
      const response = await fetch("/data/technologies.json");

      if (!response.ok) {
        throw new Error("Failed to load technologies");
      }

      const data: Technology[] = await response.json();

      setTechnologies(data);
    };

    loadTechnologies();
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (selectedTechnology) =>
        selectedTechnology.id === technology.id
    );

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((currentStack) => [
      ...currentStack,
      technology,
    ]);
  };

  // Remove one technology
  const handleRemoveFromStack = (technologyId: string) => {
    setSelectedTechnologies((currentStack) =>
      currentStack.filter(
        (technology) => technology.id !== technologyId
      )
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Technologies Section */}
        <section
          id="technologies"
          className="bg-base-200/40 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Explore{" "}
                <span className="brand-gradient-text">
                  Technologies
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-base-content/60 sm:text-base">
                Explore popular technologies and build a
                stack that fits your next project.
              </p>
            </div>

            {/* Technologies + Stack */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
              <TechnologyGrid
                technologies={technologies}
                selectedTechnologies={selectedTechnologies}
                onAddToStack={handleAddToStack}
              />

              <StackSidebar
                selectedTechnologies={selectedTechnologies}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;