export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-8 px-8 pt-10 pb-15 border-t border-t-neutral-700/50">
      <nav className="flex justify-center items-center gap-8 text-sm text-neutral-300">
        <span>Article</span>
        <span>Projects</span>
        <span>Article</span>
        <span>Article</span>
      </nav>
      <small className="text-xs text-neutral-500">&copy; 2025 Smarty </small>
    </footer>
  );
}
