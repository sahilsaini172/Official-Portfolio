import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-8 px-8 pt-10 pb-15 border-t border-t-neutral-700/50 fixed w-full bottom-0 bg-neutral-900">
      <nav className="flex justify-center items-center gap-8 text-sm text-neutral-300">
        <FooterNavItem title="About" />
        <FooterNavItem title="Projects" />
        <FooterNavItem title="Articles" />
        <FooterNavItem title="Skills" />
      </nav>
      <small className="text-xs text-neutral-500">&copy; 2025 Smarty </small>
    </footer>
  );
}

export function FooterNavItem({ title }) {
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
