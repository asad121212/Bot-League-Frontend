import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import type { SocialLink, SocialPlatform } from "@/types";

interface Props {
  links: SocialLink[];
}

const iconMap: Record<SocialPlatform, LucideIcon> = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
};

export default function SocialLinks({
  links,
}: Props) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-6 font-display text-2xl font-bold uppercase text-white">
        Social Media
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {links.map((link) => {
          const Icon = iconMap[link.platform];

          return (
            <a
              key={link.id}
              href={link.href}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-surface-border transition hover:border-brand hover:text-brand"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}