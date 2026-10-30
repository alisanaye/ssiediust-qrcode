# Implementation Plan: Image and Icon Button Redirect Launchpad

**Branch**: `001-redirect-launchpad` | **Date**: 2026-10-30 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-redirect-launchpad/spec.md`

## Summary

Build a responsive, accessible link launchpad for the Industrial Engineering Scientific Association (SSIEDIUST). The UI replicates the provided design ("Android Compact - 1.png"), displaying four prominent gradient banner buttons with local brand logos, plus a three-item compact social row (Telegram, Instagram, LinkedIn). All components strictly leverage Figma SDS tokens (`theme.css`), layout primitives (`Section`, `Flex`), and semantic anchor redirect elements (`AnchorOrButton`).

## Technical Context

**Language/Version**: TypeScript 5.9, React 18.3, HTML5 (semantic `<a>` links), CSS3 custom properties

**Primary Dependencies**: `react`, `react-dom`, `react-aria-components`, `clsx`, `vite`

**Storage**: Static declarative data registry in `src/data/links.ts`

**Testing**: Runnable Node.js assert validation script (`tests/verify-links.mjs`) checking URL safety, schema compliance, and asset presence

**Target Platform**: Responsive Web (Mobile-first Android/iOS viewports 360px–412px up to full desktop)

**Project Type**: Single-page application (SPA) link launchpad

**Performance Goals**: <1.5s initial paint, <50KB gzip JS payload, 60fps animations/hover effects

**Constraints**: WCAG 2.1 AA accessible, safe redirection (`rel="noopener noreferrer"`, HTTPS/HTTP schemes), zero bloat

**Scale/Scope**: 1 primary launchpad view with 7 interactive redirect destinations and asset fallbacks

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle I: Figma SDS Alignment**: PASS. Utilizes `--sds-color-*`, `--sds-size-space-*`, `--sds-size-radius-*`, and SDS `Flex`/`Section` primitives.
- **Principle II: Declarative & Safe Redirection**: PASS. All destinations use semantic anchor tags with validated HTTP/HTTPS protocols and `rel="noopener noreferrer"`.
- **Principle III: Lightweight Platform-First Architecture**: PASS. No complex state machines, backend services, or heavy CSS frameworks. Zero unnecessary dependencies.
- **Principle IV: Accessible & Touch-Friendly Interactions**: PASS. Minimum 44x44px touch targets, explicit `aria-label`, visible focus indicators, native RTL flow.
- **Principle V: Contract Verification & Quality Standards**: PASS. Complete JSON schema contract (`contracts/launchpad-items.schema.json`) and automated verification script.

## Project Structure

### Documentation (this feature)

```text
specs/001-redirect-launchpad/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── launchpad-items.schema.json
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
src/
├── data/
│   ├── links.ts         # Launchpad link registry & data items
│   └── types/
│       └── launchpad.ts # LaunchpadItem and LaunchpadTheme types
├── ui/
│   ├── components/
│   │   ├── BannerButton.tsx   # Large gradient card with brand logo & label
│   │   ├── CompactButton.tsx  # Compact social pill/square button with icon
│   │   └── Launchpad.tsx      # Main launchpad container & layout
│   ├── layout/          # SDS layout components (Flex, Section)
│   ├── primitives/      # SDS primitive components (Button, Text, Image, Icon)
│   └── icons/           # SDS icons + social icons
├── App.tsx              # Root application view
├── main.tsx             # Entry point
└── index.css            # Global CSS importing SDS theme tokens

image/                   # Project brand assets (logos & graphics)
├── 23441242341.png      # Achar Sanaye emblem
├── iefm.png             # IE FM Podcast graphic
├── logo-ssiediust 2.png # Main SSIEDIUST logo
└── photo_2022-10-29_19-48-07.jpg # Jobs & Internship graphic

tests/
└── verify-links.mjs     # Standalone link contract verification self-check
```

**Structure Decision**: Single React project layout utilizing existing SDS directories (`src/ui`, `src/data`, `image/`) without unnecessary directory nesting.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | Fully adheres to Constitution and minimal diff principles |
