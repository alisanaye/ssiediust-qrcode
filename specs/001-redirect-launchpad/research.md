# Research: Image and Icon Button Redirect Launchpad

**Feature**: `001-redirect-launchpad`
**Date**: 2026-10-30

## Research Findings & Architectural Decisions

### 1. Link Registry Representation & Type Safety

- **Decision**: Define a declarative, strictly-typed configuration array in `src/data/links.ts` that exports validated link items conforming to a TypeScript interface `LaunchpadItem`.
- **Rationale**:
  - Eliminates runtime network fetches for static association links.
  - Enables compile-time verification of required fields (titles, URLs, image paths, and accessible labels).
  - Keeps initial page bundle tiny and load times near instantaneous (<50ms execution).
- **Alternatives Considered**:
  - *Dynamic CMS / REST API*: Unnecessary infrastructure complexity (violates YAGNI & Constitution Principle III).
  - *Hardcoded JSX elements*: Difficult to maintain and test systematically; fails automated link validation checks.

### 2. Figma SDS Token Alignment & Visual Card Design

- **Decision**: Implement the banner cards and compact social buttons using SDS `Flex` and `AnchorOrButton` components, styled via `--sds-color-*`, `--sds-size-radius-*`, and `--sds-size-space-*` CSS tokens.
- **Rationale**:
  - Matches the reference visual layout ("Android Compact - 1.png") with rounded pill cards, soft elevation, and distinct gradient themes.
  - The banner cards feature an RTL horizontal flex layout: Persian title text aligned on the right, visual brand badge/graphic on the left/right in a rounded white badge container.
  - Compact social row arranges Telegram, Instagram, and LinkedIn in a 3-column equal-width flex grid with brand-consistent hues.
- **Alternatives Considered**:
  - *Raw unstyled `<button>` or custom CSS grid framework*: Violates Constitution Principle I (Figma SDS alignment) and introduces inconsistent styling.

### 3. Outbound Redirection & Security Protocol

- **Decision**: Render all clickable targets as semantic anchor links (`<a>` wrapped by SDS `AnchorOrButton`) with `target="_blank"` and `rel="noopener noreferrer"`. Validate all URLs to restrict protocols strictly to `https:` or `http:`.
- **Rationale**:
  - Native semantic links provide native browser behavior: middle-click, copy link address, open in background tab, and accessibility assistive support.
  - `rel="noopener noreferrer"` eliminates reverse tabnabbing and prevents leaking referrer data to destination sites.
  - Disallowing `javascript:`, `data:`, and `vbscript:` completely prevents Cross-Site Scripting (XSS) via injected links.
- **Alternatives Considered**:
  - *`window.open()` in JavaScript `onClick` handlers*: Breaks keyboard shortcuts, middle-click tab opening, and often triggers mobile browser pop-up blockers.

### 4. RTL Support & Persian Typography

- **Decision**: Set `dir="rtl"` and configure font family hierarchy defaulting to Iranian/Persian-supporting system sans-serif fonts with fallback to `Vazirmatn`, `Inter`, and `system-ui`.
- **Rationale**:
  - All button labels ("کانال انجمن علمی مهندسی صنایع", "کانال جابز", etc.) are Persian.
  - Proper RTL styling ensures visual harmony: badges, text, and icons align correctly without awkward line wrapping on small screens.
- **Alternatives Considered**:
  - *Default LTR direction with manual text align*: Causes punctuation and mixed English/Persian text (like "IE FM پادکست") to flip incorrectly.
