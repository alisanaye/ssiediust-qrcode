# Research: Association News and Announcements Section

**Feature**: `002-association-news-section`
**Date**: 2026-10-30

## Research Findings & Architectural Decisions

### 1. News Data Layer Architecture

- **Decision**: Colocate news items in a dedicated JSON catalog at `src/data/news.json` with a strongly typed accessor in `src/data/news.ts`.
- **Rationale**:
  - Allows easy editing of news announcements without modifying UI rendering logic.
  - Can be validated via standalone automated test scripts (`tests/verify-news.mjs`).
  - Keeps initial bundle overhead to less than 1KB.
- **Alternatives Considered**:
  - *Hardcoding in JSX*: Fails automated link validation and makes ongoing news updates error-prone.
  - *External Telegram RSS/API scraping*: Telegram channels require bot tokens or server-side scraping proxies, adding excessive runtime infrastructure complexity (violates YAGNI & Constitution Principle III).

### 2. Deep Navy Container & Visual Status Bullets

- **Decision**: Style the news container with a full-bleed or max-width deep navy background (`#002060` matching the reference design "Android Compact -2.png"). Represent bullet points as custom circular badges with a vivid neon-green fill (`#00e676` / `#10b981`).
- **Rationale**:
  - Provides a striking visual separation from the upper resource cards.
  - Custom SVG/CSS bullets avoid browser-dependent default list bullet styling inconsistencies.
  - Guarantees high text contrast (>7:1 ratio) exceeding WCAG 2.1 AA requirements.
- **Alternatives Considered**:
  - *Default browser `<ul>/<li>` disc bullets*: Vary in size and alignment across Android Chrome, iOS Safari, and desktop browsers, often looking misaligned with Persian fonts.

### 3. Accessible Semantic Markup & Touch Hit Areas

- **Decision**: Use a semantic `<section aria-labelledby="news-heading">` containing `<ul role="list">` and anchor links (`<a>` with `target="_blank"` and `rel="noopener noreferrer"`). Ensure each list item has a minimum touch target height of 44px with a 12px gap.
- **Rationale**:
  - Semantic HTML guarantees screen reader users can discover the news section via landmark and list navigation.
  - Meets mobile touch target requirements for one-handed thumb navigation.
