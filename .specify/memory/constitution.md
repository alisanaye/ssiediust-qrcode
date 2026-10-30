<!--
Sync Impact Report:
- Version change: [CONSTITUTION_VERSION] (uninitialized template) → 1.0.0 (initial ratification)
- List of modified principles:
  - [PRINCIPLE_1_NAME] → I. Figma SDS (Simple Design System) Alignment
  - [PRINCIPLE_2_NAME] → II. Declarative & Safe Redirection
  - [PRINCIPLE_3_NAME] → III. Lightweight Platform-First Architecture
  - [PRINCIPLE_4_NAME] → IV. Accessible & Touch-Friendly Interactions
  - [PRINCIPLE_5_NAME] → V. Contract Verification & Quality Standards
- Added sections:
  - Technical & Security Constraints
  - Development Workflow & Quality Gates
- Removed sections: None
- Follow-up TODOs: None
-->

# ssiediust-qrcode Constitution

## Core Principles

### I. Figma SDS (Simple Design System) Alignment
The user interface MUST strictly consume and adhere to the Figma Simple Design System (SDS) tokens and primitive specifications. Hardcoded color hexes, pixel paddings, or bespoke font definitions are forbidden; all UI styling MUST bind directly to `--sds-color-*`, `--sds-size-space-*`, and `--sds-font-*` CSS custom properties. Layout compositions MUST utilize SDS layout primitives (`Section`, `Flex`, `Grid`) to ensure visual consistency and maintainability.

### II. Declarative & Safe Redirection
The core application capability is a collection of image/icon buttons that redirect users to designated target URLs upon interaction. All redirection destinations MUST be declaratively configured with validated URLs. Link rendering MUST utilize native semantic anchor elements (`<a>` or SDS `AnchorOrButton`) rather than programmatic window mutations whenever possible. Untrusted URLs MUST be sanitized to allow only safe protocols (`https:`, `http:`), strictly disallowing unsafe schemes (`javascript:`, `data:`). External links MUST enforce `rel="noopener noreferrer"`.

### III. Lightweight Platform-First Architecture
The codebase MUST adhere to minimal-diff and minimal-dependency engineering: native browser features and stdlib APIs take precedence over external libraries. State management and routing MUST remain lean; static configurations and pure CSS states MUST be preferred over unnecessary framework layers. Any introduced dependency must justify its existence against native alternatives.

### IV. Accessible & Touch-Friendly Interactions
Every clickable icon and image button MUST provide unambiguous accessibility affordances. Buttons lacking visible text MUST declare an explicit `aria-label` or accessible text element describing destination and purpose. Interactive click/touch targets MUST satisfy a minimum hit area of 44x44 CSS pixels across responsive viewports. Visual focus indicators (`var(--sds-size-stroke-focus-ring)`) MUST remain distinct and unsuppressed for keyboard navigation.

### V. Contract Verification & Quality Standards
All link registries, button configurations, and URL resolution pipelines MUST be accompanied by executable verification tests. Target links and metadata configurations MUST fail fast during automated checks if URLs are invalid, missing, or malformed. Critical user interactions MUST verify proper redirection semantics before release.

## Technical & Security Constraints

- **Technology Stack**: React 18, TypeScript, Vite, and Figma SDS CSS tokens/primitives.
- **Security**: Strict URL protocol enforcement (only HTTP/HTTPS). Protection against reverse tabnabbing and open redirection vulnerabilities.
- **Responsiveness**: Mobile-first grid and flex layouts adapting cleanly between narrow mobile screens and wide desktop displays.
- **Performance**: Zero runtime bundle bloat; initial payload optimized for instant load times.

## Development Workflow & Quality Gates

- **Lint & Type Check**: All code MUST pass strict TypeScript compilation (`tsc --noEmit`) with zero errors.
- **Accessibility Gate**: Automated or manual validation ensuring all interactive elements satisfy WCAG 2.1 AA criteria.
- **Review Requirement**: Any change to button layouts, target URLs, or design system components requires validation against SDS token guidelines.

## Governance

This constitution serves as the authoritative source of engineering standards and architectural principles for the `ssiediust-qrcode` repository. Any modification to core principles requires an explicit version bump:
- **MAJOR**: Incompatible changes to core principles, security baselines, or governance structure.
- **MINOR**: Addition of new principles, features, or architectural constraints.
- **PATCH**: Clarifications, formatting, and non-semantic documentation revisions.

Amendments must be documented with rationale and verified against existing specs.

**Version**: 1.0.0 | **Ratified**: 2026-10-30 | **Last Amended**: 2026-10-30
