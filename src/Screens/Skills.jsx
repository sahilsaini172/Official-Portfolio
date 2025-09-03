import { skillsData } from "../skillsData";

export default function Skills() {
  return (
    <main className="scroll-smooth bg-neutral-900 min-h-screen text-neutral-100 flex flex-col gap-2">
      <section className="mb-[300px] px-4 text-neutral-50 flex flex-col gap-4 mt-10 **:duration-300 **:ease-linear">
        <header>
          <h1 className="text-3xl font-medium mt-5">Skills</h1>
          <p className="py-4 text-neutral-400">
            What I love to do, and what I do best.
          </p>
        </header>
        <main className="flex flex-col gap-10">
          {skillsData.map((item) => {
            return (
              <article>
                <h2>{item.title}</h2>
                <p className="text-sm mt-4 text-neutral-400 font-light">
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
