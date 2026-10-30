export type LaunchpadItemType = "banner" | "compact";

export type LaunchpadTheme =
  | "teal-blue"
  | "crimson-purple"
  | "telegram"
  | "instagram"
  | "linkedin";

export interface LaunchpadItem {
  /** Unique stable identifier matching ^[a-z0-9-]+$ */
  id: string;

  /** Display title in Persian (2-100 characters) */
  title: string;

  /** Target URL (HTTP/HTTPS only) */
  url: string;

  /** Display layout category */
  type: LaunchpadItemType;

  /** Visual gradient / brand styling preset */
  theme: LaunchpadTheme;

  /** Optional path to brand logo / graphic image */
  imageSrc?: string;

  /** Optional icon component identifier */
  iconName?: "telegram" | "instagram" | "linkedin";

  /** Accessibility label for screen readers (min 4 characters) */
  ariaLabel: string;
}
