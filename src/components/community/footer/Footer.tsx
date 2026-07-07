import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

import { footerLinkGroups, socialLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border px-5 py-12 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
          <FooterLinks groups={footerLinkGroups} />

          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </footer>
  );
}