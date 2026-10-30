# Quickstart: Image and Icon Button Redirect Launchpad

**Feature**: `001-redirect-launchpad`
**Date**: 2026-10-30

This document defines runnable validation scenarios proving the redirect launchpad functions end-to-end according to the design specification.

## Prerequisites

- Node.js (v18+)
- pnpm installed

## Setup & Run Commands

1. **Verify TypeScript & Types**:
   ```bash
   pnpm tsc --noEmit
   ```
   *Expected outcome*: Zero errors.

2. **Execute Link Contract & Data Validation Self-Check**:
   ```bash
   node tests/verify-links.mjs
   ```
   *Expected outcome*: All launchpad items pass URL validation, image asset resolution, and aria-label completeness.

3. **Start Development Preview Server**:
   ```bash
   pnpm dev
   ```
   *Expected outcome*: Vite starts at `http://localhost:8000` (or configured port).

4. **Production Build**:
   ```bash
   pnpm build
   ```
   *Expected outcome*: Bundle compiled to `dist/` with zero warnings or errors.

## Manual UI Verification Flow

1. **Mobile Viewport Test (375px - 412px)**:
   - Open browser developer tools and toggle Device Toolbar (e.g. Pixel 7 / iPhone 14).
   - Verify all 4 banner buttons render with rounded corners, gradient backgrounds, and right-aligned Persian typography.
   - Verify the 3 compact social buttons render in a single horizontal row.
   - Verify no horizontal scrollbar appears.

2. **Redirect Activation Test**:
   - Tap/click "کانال انجمن علمی مهندسی صنایع" -> verify opens Telegram channel link in a new tab with `rel="noopener noreferrer"`.
   - Tap/click "اینستاگرام" -> verify opens Instagram link in a new tab.
   - Tap/click "چنل پادکست IE FM" -> verify opens Podcast link in a new tab.

3. **Accessibility & Keyboard Navigation**:
   - Press `Tab` repeatedly to cycle through every button sequentially.
   - Verify clear focus ring outline on each focused item.
   - Press `Enter` or `Space` on any focused item to trigger the link.
