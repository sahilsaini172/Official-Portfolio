export default function Article() {
  return (
    <article className="flex flex-col gap-2 p-4 mt-10 hover:bg-neutral-700/25 duration-200 rounded-xl">
      <span className="flex items-center gap-2 text-sm text-neutral-500 font-light">
        <div className="h-4 w-1 rounded-full bg-neutral-400"></div>
        <time datetime="2025-08-01">September 1, 2025</time>
      </span>
      <h3 className="text-lg">
        Introduction to React — Building Dynamic User Interfaces
      </h3>
      <p className="text-neutral-400 font-light line-clamp-3">
        React is a popular JavaScript library designed to build dynamic and
        interactive user interfaces, primarily for single-page applications
        (SPAs). Developed by Facebook engineer Jordan Walke, React
        revolutionizes how developers create web applications by introducing a
        component-based architecture and an efficient rendering process.
      </p>
      <button className="py-1 w-fit text-indigo-400 text-sm hover:*:translate-x-0.5 flex items-center">
        Read More
        <i class="fa-solid fa-caret-right duration-200 ease-linear"></i>
      </button>
    </article>
  );
}
