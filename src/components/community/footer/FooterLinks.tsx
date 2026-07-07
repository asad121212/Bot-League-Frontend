import type { FooterLinkGroup } from "@/types";

interface FooterLinksProps {
  groups: FooterLinkGroup[];
}

export default function FooterLinks({
  groups,
}: FooterLinksProps) {
  return (
    <div>
      <h3 className="mb-6 font-display text-2xl font-bold uppercase text-white">
        Quick Links
      </h3>

      <div className="grid grid-cols-2 gap-x-16">
        {groups.map((group) => (
          <ul
            key={group.id}
            className="space-y-4"
          >
            {group.links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted transition hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}