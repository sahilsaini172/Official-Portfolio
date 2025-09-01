export default function Appbar() {
  return (
    <header className="p-4 flex justify-end items-center">
      <Menu />
    </header>
  );
}

export function Menu() {
  return (
    <div className="px-4 py-3 rounded-full text-sm text-neutral-200  bg-neutral-800 w-fit border border-neutral-700/50 flex justify-center items-center gap-2 hover:[&_i]:text-neutral-400 ease-linear duration-300 hover:border-neutral-600">
      <h2>Menu</h2>
      <i class="fa-solid fa-caret-down text-neutral-600 text-xs duration-300 ease-linear"></i>
    </div>
  );
}
