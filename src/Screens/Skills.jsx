import { skillsData } from "../skillsData";

export default function Skills() {
  return (
    <main className="scroll-smooth bg-neutral-900 min-h-screen text-neutral-100 flex flex-col gap-2 md:mx-10 md:border-x md:border-x-neutral-700/60 lg:mx-15  xl:mx-60">
      <section className="px-4 md:px-8 lg:px-10 text-neutral-50 flex flex-col gap-4 mt-10 **:duration-300 **:ease-linear">
        <header>
          <h1 className="text-3xl font-medium mt-5">Skills</h1>
          <p className="py-4 text-neutral-400">
            What I love to do, and what I do best.
          </p>
        </header>
        <main className="flex flex-col gap-10">
          {skillsData.map((item) => {
            return (
              <article className="">
                <h2>{item.title}</h2>
                <p className="text-sm my-4 text-neutral-400 font-light">
                  {item.description}
                </p>
              </article>
            );
          })}
        </main>
      </section>
    </main>
  );
}
