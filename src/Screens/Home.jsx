import Article from "../HomeSections/Article";
import Contact from "../HomeSections/Contact";
import Footer from "../Footer";
import Hero from "../HomeSections/Hero";
import Images from "../HomeSections/Images";
import Work from "../HomeSections/Work";

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
