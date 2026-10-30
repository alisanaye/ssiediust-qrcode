# Data Model: Association News and Announcements Section

**Feature**: `002-association-news-section`
**Date**: 2026-10-30

## Entities & Interfaces

### 1. `NewsItem` (Core Entity)

Represents an individual news announcement link in the association feed.

```typescript
export interface NewsItem {
  /** Unique stable identifier matching ^news-[a-z0-9-]+$ */
  id: string;

  /** Headline title text in Persian */
  title: string;

  /** Verified target URL (strictly https://) */
  url: string;

  /** Accessible label for screen readers */
  ariaLabel: string;

  /** Optional publication date or badge */
  date?: string;
}
```

### 2. Validation Rules & Invariants

- **`id`**: Must be unique alphanumeric kebab-case string (`^news-[a-z0-9-]+$`).
- **`title`**: Non-empty Persian text, length 10–120 characters.
- **`url`**: Must be a valid absolute URI starting with `https://t.me/ssiediust/`.
- **`ariaLabel`**: Must be descriptive, explaining the announcement topic.

### 3. Default Dataset Catalog

| ID | Title | Verified URL | Accessible Description |
|----|-------|--------------|------------------------|
| `news-24th-members` | اعضای دوره 24 ام انجمن علمی اعلام شدند!! | `https://t.me/ssiediust/6686` | مشاهده اعلام نتایج و اعضای دوره ۲۴ام انجمن علمی |
| `news-ai-sessions` | دومین جلسات آشنایی با ابزار های هوش‌مصنوعی توسط انجمن علمی برگزار شد | `https://t.me/ssiediust/6690` | جزئیات برگزاری دومین جلسه آشنایی با هوش مصنوعی |
| `news-tanin-7` | نشریه طنین پیشرفت هفتم را از اینجا بخوانید | `https://t.me/ssiediust/6482` | مطالعه و دانلود شماره هفتم نشریه طنین پیشرفت |
