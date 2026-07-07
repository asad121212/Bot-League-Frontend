import type { NavLink } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  links,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
        isOpen ? "max-h-96 border-t border-surface-border" : "max-h-0"
      }`}
    >
      <ul className="flex flex-col gap-5 bg-surface px-6 py-6">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              onClick={onClose}
              className="block text-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}