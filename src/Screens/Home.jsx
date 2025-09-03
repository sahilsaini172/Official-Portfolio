import Article from "../Sections/Article";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import Hero from "../Sections/Hero";
import Images from "../Sections/Images";
import Work from "../Sections/Work";

export default function Home() {
  return (
    <main className="scroll-smooth bg-neutral-900 min-h-screen text-neutral-100 flex flex-col gap-2">
      <Hero />
      <Images />
      <Contact />
      <Work />
      <Article />
      <Footer />
    </main>
  );
}
