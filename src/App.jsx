import Images from "../src/Sections/Images";
import Hero from "../src/Sections/Hero";
import Appbar from "./Appbar";
import Contact from "./Sections/Contact";
import Work from "./Sections/Work";

function App() {
  return (
    <main className="scroll-smooth bg-neutral-900 min-h-screen text-neutral-100 flex flex-col gap-2">
      <Appbar />
      <Hero />
      <Images />
      <Contact />
      <Work/>
    </main>
  );
}

export default App;
