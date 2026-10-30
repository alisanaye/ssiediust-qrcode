import React from "react";
import { launchpadLinks } from "../../data/links";
import type { LaunchpadItem } from "../../data/types/launchpad";
import { BannerButton } from "./BannerButton";
import { CompactButton } from "./CompactButton";
import "./launchpad.css";

export const Launchpad: React.FC = () => {
  const mainBanner = launchpadLinks.find((l) => l.id === "ssiediust-main");
  const jobsBanner = launchpadLinks.find((l) => l.id === "ssiediust-jobs");
  const iefmBanner = launchpadLinks.find((l) => l.id === "ssiediust-iefm");
  const acharBanner = launchpadLinks.find((l) => l.id === "ssiediust-achar");

  const socialLinks: LaunchpadItem[] = [
    launchpadLinks.find((l) => l.id === "social-linkedin"),
    launchpadLinks.find((l) => l.id === "social-instagram"),
    launchpadLinks.find((l) => l.id === "social-telegram"),
  ].filter(Boolean) as LaunchpadItem[];

  return (
    <div className="launchpad-container">
      {/* Primary Association Banner */}
      {mainBanner && <BannerButton item={mainBanner} />}

      {/* Compact Social Channels Row */}
      <nav className="compact-row" aria-label="شبکه‌های اجتماعی">
        {socialLinks.map((social) => (
          <CompactButton key={social.id} item={social} />
        ))}
      </nav>

      {/* Jobs & Internships Banner */}
      {jobsBanner && <BannerButton item={jobsBanner} />}

      {/* IE FM Podcast Banner */}
      {iefmBanner && <BannerButton item={iefmBanner} />}

      {/* Achar Sanaye Educational Banner */}
      {acharBanner && <BannerButton item={acharBanner} />}
    </div>
  );
};
