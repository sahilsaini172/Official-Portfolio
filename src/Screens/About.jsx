export default function About() {
  return (
    <main className="scroll-smooth bg-neutral-900 min-h-screen text-neutral-100 flex flex-col gap-2 md:mx-10 md:border-x md:border-x-neutral-700/60 lg:mx-15 xl:mx-60">
      <section className="px-4 md:px-8 lg:px-10 xl:px-30 text-neutral-50 flex flex-col gap-4 mt-10 **:duration-300 **:ease-linear">
        <main className="flex flex-col ">
          <div className="xl:flex xl:flex-row-reverse lg:flex lg:flex-row-reverse">
            <img
              src="../public/Imgs/about-pic.png"
              alt=""
              className="w-[300px] aspect-square object-top-right object-cover rounded-xl rotate-2 lg:w-1/3 lg:h-fit lg:flex-1"
            />
            <div className="xl:mr-20 lg:mr-10">
              <h1 className="text-3xl mt-10 font-medium lg:text-4xl xl:text-5xl">
                A bit about me
              </h1>
              <p className="mt-4 text-neutral-400 font-light lg:text-sm">
                I'm Sahil Saini from Rohtak, Haryana. This site showcases some
                of my personal projects, work, and abilities as a frontend
                developer.
                <br />
                <br />I have strong skills in HTML, CSS, JavaScript, and React,
                which I use to build engaging and responsive user interfaces. I
                also bring valuable experience from internships as a UI/UX
                designer, blending design thinking with technical
                implementation.
                <br />
                <br /> Outside of development, I enjoy book reading and
                continuously learning new things to expand my knowledge and
                skills.
                <br />
                <br /> Through this portfolio, I aim to highlight my passion for
                creating great digital experiences and demonstrate my growth as
                a frontend developer. Feel free to explore my work and connect!
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-col gap-4 mt-10 border-b pb-5 border-b-neutral-700/60">
                <a
                  href="https://github.com/sahilsaini172"
                  className="flex items-center gap-3 text-sm text-neutral-200"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="w-6 h-6 fill-current text-neutral-400 hover:text-neutral-200 duration-300 ease-linear"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2  .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01  1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95  0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12  0 0 .67-.21 2.2.82a7.55 7.55 0 012-.27c.68.003 1.36.092  2 .27  1.53-1.04  2.2-.82  2.2-.82.44 1.1.16  1.92.08  2.12.51.56.82 1.27.82  2.15  0  3.07-1.87  3.75-3.65  3.95.29.25.54.73.54 1.48  0 1.07-.01  1.93-.01 2.2  0 .21.15.46.55.38A8.01  8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/sahil-saini-866646318/"
                  className="flex items-center gap-3 text-sm text-neutral-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current text-neutral-400 hover:text-neutral-200 duration-300 ease-linear"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <a
              href="mailto:sahilmanisaini8398@gmail.com"
              className="flex items-center gap-3 text-sm text-neutral-200 pt-8 pb-20 "
            >
              <i class="fa-solid fa-envelope text-lg text-neutral-500"></i>
              sahilmanisaini8398@gmail.com
            </a>
          </div>
        </main>
      </section>
    </main>
  );
}
