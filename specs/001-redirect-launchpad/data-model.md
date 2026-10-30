# Data Model: Image and Icon Button Redirect Launchpad

**Feature**: `001-redirect-launchpad`
**Date**: 2026-10-30

## Entities & Interfaces

### 1. `LaunchpadItem` (Core Entity)

Represents an individual interactive redirect button within the launchpad.

```typescript
export type LaunchpadItemType = "banner" | "compact";

export type LaunchpadTheme =
  | "teal-blue"      // Main association channel gradient
  | "crimson-purple" // IE FM Podcast gradient
  | "telegram"       // Telegram brand blue
  | "instagram"      // Instagram brand magenta/purple
  | "linkedin";      // LinkedIn brand blue

export interface LaunchpadItem {
  /** Unique stable identifier */
  id: string;

  /** Display title in Persian */
  title: string;

  /** Target URL (HTTP/HTTPS only) */
  url: string;

  /** Display format */
  type: LaunchpadItemType;

  /** Visual gradient / brand styling preset */
  theme: LaunchpadTheme;

  /** Optional path to brand logo / graphic image */
  imageSrc?: string;

  /** Optional icon component identifier */
  iconName?: "telegram" | "instagram" | "linkedin";

  /** Accessibility label for screen readers */
  ariaLabel: string;
}
```

### 2. Validation Rules & Invariants

- **`id`**: Must be unique alphanumeric kebab-case string (`^[a-z0-9-]+$`).
- **`title`**: Non-empty string, length 2–80 characters.
- **`url`**: Must be a valid absolute URI starting strictly with `https://` or `http://`.
- **`type`**: Must be either `"banner"` or `"compact"`.
- **`ariaLabel`**: Must be descriptive, explaining both identity and destination action.
- **`imageSrc`**: If provided, must resolve to an existing local project asset.

### 3. Default Dataset Catalog

| ID | Title | Type | Theme | Graphic / Icon | Default URL |
|----|-------|------|-------|----------------|-------------|
| `ssiediust-main` | کانال انجمن علمی مهندسی صنایع | `banner` | `teal-blue` | `image/logo-ssiediust 2.png` | `https://t.me/ssiediust` |
| `social-telegram` | تلگرام | `compact` | `telegram` | IconTelegram | `https://t.me/ssiediust` |
| `social-instagram` | اینستاگرام | `compact` | `instagram` | IconInstagram | `https://instagram.com/ssiediust` |
| `social-linkedin` | لینکدین | `compact` | `linkedin` | IconLinkedin | `https://linkedin.com/company/ssiediust` |
| `ssiediust-jobs` | کانال جابز (جهت کاریابی و کارآموزی) | `banner` | `teal-blue` | `image/photo_2022-10-29_19-48-07.jpg` | `https://t.me/ssiediust_jobs` |
| `ssiediust-iefm` | چنل پادکست IE FM | `banner` | `crimson-purple` | `image/iefm.png` | `https://t.me/IEFM_Podcast` |
| `ssiediust-achar` | کانال آچار صنایع | `banner` | `teal-blue` | `image/23441242341.png` | `https://t.me/Achar_sanaye` |
