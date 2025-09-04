import Article from "../HomeSections/Article";
import Contact from "../HomeSections/Contact";
import Footer from "../Footer";
import Hero from "../HomeSections/Hero";
import Images from "../HomeSections/Images";
import Work from "../HomeSections/Work";

export default function Home() {
  return (
    <main className="scroll-smooth bg-neutral-900 min-h-screen text-neutral-100 flex flex-col gap-2 md:border-x md:border-x-neutral-700/60 md:mx-10 lg:mx-15 xl:mx-60">
      <Hero />
      <Images />
      <div className="xl:flex xl:flex-row-reverse xl:mx-20 lg:flex lg:flex-row-reverse lg:mx-4">
        <div className="lg:flex lg:flex-col lg:w-full xl:w-2/3">
          <Contact />
          <Work />
        </div>
        <Article />
      </div>
    </main>
  );
}
