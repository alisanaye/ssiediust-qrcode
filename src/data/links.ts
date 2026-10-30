import linksData from "./links.json";
import type { LaunchpadItem } from "./types/launchpad";

export const launchpadLinks: LaunchpadItem[] = linksData as LaunchpadItem[];

export const bannerLinks = launchpadLinks.filter((item) => item.type === "banner");
export const compactLinks = launchpadLinks.filter((item) => item.type === "compact");
