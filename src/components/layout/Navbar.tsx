import { navLinks } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface-border bg-surface/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">
            Login
          </Button>
          <Button variant="primary" size="sm">
            Register Now
          </Button>
        </div>
      </nav>
    </header>
  );
}
