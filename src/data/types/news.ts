export interface NewsItem {
  /** Unique stable identifier matching ^news-[a-z0-9-]+$ */
  id: string;

  /** Headline title text in Persian */
  title: string;

  /** Verified target URL (strictly https://t.me/ssiediust/\d+) */
  url: string;

  /** Accessible label for screen readers */
  ariaLabel: string;

  /** Optional publication date or badge */
  date?: string;
}
