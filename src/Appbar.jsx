import { useState } from "react";

export default function Appbar() {
  return (
    <header className="p-4 flex justify-end items-center">
      <Menu />
    </header>
  );
}

export function Menu() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div
        onClick={() => setToggle(!toggle)}
        className="px-4 py-3 rounded-full text-sm text-neutral-200  bg-neutral-800 w-fit border border-neutral-700/50 flex justify-center items-center gap-2 hover:[&_i]:text-neutral-400 ease-linear duration-300 hover:border-neutral-600"
      >
        <h2>Menu</h2>
        <i class="fa-solid fa-caret-down text-neutral-600 text-xs duration-300 ease-linear"></i>
      </div>
      <OverlayMenu toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export function OverlayMenu({ toggle, setToggle }) {
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`select-none fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center z-50 duration-300 ease-linear ${
        toggle ? null : "hidden"
      } `}
    >
      <div className="flex flex-col bg-transparent m-8 w-full">
        <div className="flex flex-col bg-neutral-900 border border-neutral-700/60 mx-4 rounded-3xl">
          <div className="flex text-neutral-400 justify-between items-center p-4">
            <p className="text-sm ">Navigation</p>
            <button onClick={() => setToggle(!toggle)}>
              <i class="fa-solid fa-xmark text-neutral-300"></i>
            </button>
          </div>
          <nav className="p-4">
            <li>about</li>
          </nav>
        </div>
      </div>
    </div>
  );
}
