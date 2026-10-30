# Implementation Plan: Association News and Announcements Section

**Branch**: `002-association-news-section` | **Date**: 2026-10-30 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/002-association-news-section/spec.md`

## Summary

Add a dedicated "خبرهای جدید:" (Latest News) announcement section directly beneath the resource cards matching "Android Compact -2.png". The section displays three specific association announcements with bright green status bullets on a deep navy background (`#002060`), linking out to verified Telegram posts (`https://t.me/ssiediust/6686`, `https://t.me/ssiediust/6690`, `https://t.me/ssiediust/6482`) via semantic `AnchorOrButton` with `rel="noopener noreferrer"`.

## Technical Context

**Language/Version**: TypeScript 5.9, React 18.3, CSS3 Custom Properties

**Primary Dependencies**: `react`, `react-dom`, `react-aria-components`, `clsx`, `vite`

**Storage**: Static JSON configuration in `src/data/news.json`

**Testing**: Runnable Node.js assert validation script (`tests/verify-news.mjs`) checking schema, link format, and protocol safety

**Target Platform**: Responsive Web (Mobile-first Android/iOS viewports 360px–412px up to full desktop)

**Project Type**: Single-page application UI component enhancement

**Performance Goals**: <5ms rendering time, <1KB data footprint, 60fps hover interactions

**Constraints**: WCAG 2.1 AA text contrast (≥4.5:1), min 44px touch targets, safe redirection (`rel="noopener noreferrer"`)

**Scale/Scope**: 1 news feed section displaying 3 announcements with green status indicators

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle I: Figma SDS Alignment**: PASS. Utilizes `--sds-color-*`, `--sds-size-space-*`, and `--sds-font-*` CSS tokens.
- **Principle II: Declarative & Safe Redirection**: PASS. All destinations use semantic anchor tags with validated HTTPS protocols and `rel="noopener noreferrer"`.
- **Principle III: Lightweight Platform-First Architecture**: PASS. Static JSON, zero new dependencies, native CSS.
- **Principle IV: Accessible & Touch-Friendly Interactions**: PASS. Minimum 44x44px touch targets, high-contrast text, visible focus rings, native RTL.
- **Principle V: Contract Verification & Quality Standards**: PASS. Schema contract (`contracts/news-schema.json`) and test script (`tests/verify-news.mjs`).

## Project Structure

### Documentation (this feature)

```text
specs/002-association-news-section/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── news-schema.json
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
src/
├── data/
│   ├── news.json        # Curated news announcement data
│   ├── news.ts          # Strongly-typed news data export
│   └── types/
│       └── news.ts      # NewsItem interface
├── ui/
│   └── components/
│       ├── NewsSection.tsx   # Dedicated deep navy news container & list
│       └── newsSection.css  # Deep navy background, green bullets, typography
tests/
└── verify-news.mjs      # Test asserting news data validity and URL safety
```

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | Fully adheres to Constitution and minimal diff principles |
