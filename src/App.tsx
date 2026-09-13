import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";
import TechnologyGrid from "./components/Technologies/TechnologyGrid";
import StackSidebar from "./components/Stack/StackSidebar";

import type { Technology } from "./types/technology";
import Hero from "./components/hero/hero";
import Footer from "./components/Footer/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>(
    []
  );

  const [loading, setLoading] = useState(true);

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  // Load technologies from JSON
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Failed to load technologies:", error);

        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
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
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemoveFromStack = (technologyId: string) => {
    const technology = selectedTechnologies.find(
      (technology) => technology.id === technologyId
    );

    setSelectedTechnologies((currentStack) =>
      currentStack.filter(
        (technology) => technology.id !== technologyId
      )
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.success("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <main>
        <Hero />

        {/* Technologies Section */}
        <section
          id="technologies"
          className="bg-base-200/40 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Explore The{" "}
                <span className="brand-gradient-text">
                  Technologies
                </span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-base-content/60 sm:text-base">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {/* Technologies + Stack */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
              {loading ? (
                <div className="flex min-h-80 items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <span className="loading loading-spinner loading-lg text-primary"></span>

                    <p className="text-sm text-base-content/60">
                      Loading technologies...
                    </p>
                  </div>
                </div>
              ) : (
                <TechnologyGrid
                  technologies={technologies}
                  selectedTechnologies={selectedTechnologies}
                  onAddToStack={handleAddToStack}
                />
              )}

              <StackSidebar
                selectedTechnologies={selectedTechnologies}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;