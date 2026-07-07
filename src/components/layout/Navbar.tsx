import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-surface-border bg-surface/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <Logo />

        {/* Desktop Navigation */}
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

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="secondary" size="sm">
            Login
          </Button>

          <Button variant="primary" size="sm">
            Register Now
          </Button>

          <button
            onClick={toggleMenu}
            className="rounded-md p-2 text-ink-primary transition hover:bg-surface-muted md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        links={navLinks}
        onClose={closeMenu}
      />
    </header>
  );
}