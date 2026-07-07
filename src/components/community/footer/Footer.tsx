import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

import { footerLinkGroups, socialLinks } from "@/data/siteData";


export default function Footer() {
  return (
    <footer className="border-t border-surface-border px-10 py-12">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

        {/* Right Side */}

        <div className="flex flex-1 justify-between">
          <FooterLinks groups={footerLinkGroups} />

          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </footer>
  );
}