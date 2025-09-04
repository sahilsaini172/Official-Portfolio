import { useState } from "react";
import { Link } from "react-router";

export default function Appbar() {
  return (
    <header className="p-4 flex justify-end sm:justify-center md:justify-center items-center md:bg-neutral-900 md:mx-10 md:border-x md:border-x-neutral-700/60 lg:mx-15 xl:mx-60 nth-of-type-:hidden">
      <div>
        <Menu />
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
}

export function Navbar() {
  return (
    <div className="flex bg-neutral-800 w-fit items-center justify-center px-8 gap-4 rounded-full text-sm font-light border border-neutral-700/60 xs:max-sm:hidden max-sm:hidden">
      <MdNavItem title="About" />
      <MdNavItem title="Projects" />
      <MdNavItem title="Skills" />
      <MdNavItem title="Articles" />
    </div>
  );
}

export function Menu() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div
        onClick={() => setToggle(!toggle)}
        className="px-4 py-3 rounded-full text-sm text-neutral-200  bg-neutral-800 w-fit border border-neutral-700/50 flex justify-center items-center gap-2 hover:[&_i]:text-neutral-400 ease-linear duration-300 hover:border-neutral-600 md:hidden sm:hidden"
      >
        <h2>Menu</h2>
        <i className="fa-solid fa-caret-down text-neutral-600 text-xs duration-300 ease-linear"></i>
      </div>

      <OverlayMenu toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export function OverlayMenu({ toggle, setToggle }) {
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`pointer select-none fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center z-50 duration-300 ease-linear ${
        toggle ? null : "hidden"
      } `}
    >
      <div className="flex flex-col bg-transparent m-8 w-full">
        <div className="flex flex-col bg-neutral-900 border border-neutral-700/60 mx-4 rounded-3xl">
          <div className="flex text-neutral-400 justify-between items-center px-6 py-4">
            <p className="text-sm ">Navigation</p>
            <button onClick={() => setToggle(!toggle)}>
              <i className="fa-solid fa-xmark text-neutral-300"></i>
            </button>
          </div>
          <nav className="px-6 pb-6 font-light text-neutral-300 flex flex-col">
            <NavItem title="about" />
            <NavItem title="projects" />
            <NavItem title="skills" />
            <NavItem title="articles" last={true} />
          </nav>
        </div>
      </div>
    </div>
  );
}

export function NavItem({ title, last = false }) {
  let path = title.toLowerCase();
  let newTitle = path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <Link
      to={"/" + path}
      className={`py-3 ${
        last ? null : "border-b border-b-neutral-700"
      } hover:text-neutral-100`}
    >
      {newTitle}
    </Link>
  );
}

export function MdNavItem({ title }) {
  let path = title.toLowerCase();
  let newTitle = path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <Link
      to={"/" + path}
      className={`py-3 hover:text-indigo-400 duration-200 ease-linear`}
    >
      {newTitle}
    </Link>
  );
}
