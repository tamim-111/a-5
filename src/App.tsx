import Hero from "./components/hero/hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Other sections will be added here */}
      </main>
    </>
  );
}

export default App;