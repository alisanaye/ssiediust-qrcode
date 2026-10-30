---
description: "Task list for Image and Icon Button Redirect Launchpad implementation"
---

# Tasks: Image and Icon Button Redirect Launchpad

**Input**: Design documents from `/specs/001-redirect-launchpad/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Test tasks included using lightweight Node.js assert scripts (`tests/verify-links.mjs`) per Constitution Principle V.
**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, directory structure, and test harness setup

- [X] T001 Verify local brand image assets in `image/` (`image/logo-ssiediust 2.png`, `image/iefm.png`, `image/23441242341.png`, `image/photo_2022-10-29_19-48-07.jpg`)
- [X] T002 [P] Create automated link validation and schema test script in `tests/verify-links.mjs` validating links against `specs/001-redirect-launchpad/contracts/launchpad-items.schema.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core data models and styling infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T003 Define `LaunchpadItem`, `LaunchpadTheme`, and `LaunchpadItemType` interfaces in `src/data/types/launchpad.ts` with constraints verbatim from `data-model.md` (`id`: `^[a-z0-9-]+$`, `url`: `^https?://`, `title`: 2–100 chars, `ariaLabel`: min 4 chars)
- [X] T004 [P] Implement the declarative link catalog in `src/data/links.ts` exporting default items for SSIEDIUST main channel, jobs, podcast, achar sanaye, and social networks
- [X] T005 Configure global RTL direction, Persian typography fallback, and background tokens in `src/index.css`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Navigate via Featured Banner Buttons (Priority: P1) 🎯 MVP

**Goal**: Render prominent banner buttons for official association channels (Main Channel, Jobs, IE FM Podcast, Achar Sanaye) with logos, gradient backgrounds, and safe new-tab redirects.

**Independent Test**: Click each featured banner card and verify the browser opens the associated official channel in a new tab with `rel="noopener noreferrer"`.

### Tests for User Story 1

- [X] T006 [P] [US1] Create automated unit/contract test in `tests/test-banner-links.mjs` verifying all banner items have valid HTTPS URLs and accessible graphics

### Implementation for User Story 1

- [X] T007 [US1] Implement `BannerButton` component in `src/ui/components/BannerButton.tsx` using SDS `AnchorOrButton` with gradient styles, white badge logo container, and Persian title typography
- [X] T008 [US1] Implement `Launchpad` container component in `src/ui/components/Launchpad.tsx` rendering the list of banner items using SDS `Section` and `Flex`
- [X] T009 [US1] Mount `Launchpad` component in `src/App.tsx` and verify the P1 MVP flow renders and navigates cleanly

**Checkpoint**: At this point, User Story 1 is fully functional and testable independently as an MVP.

---

## Phase 4: User Story 2 - Access Quick Social Channels (Priority: P2)

**Goal**: Render a compact horizontal 3-button row for Telegram, Instagram, and LinkedIn with brand colors, SVG icons, and Persian labels.

**Independent Test**: Tap each compact social button (Telegram, Instagram, LinkedIn) and verify rapid navigation to the respective social profile.

### Tests for User Story 2

- [X] T010 [P] [US2] Create automated contract test in `tests/test-social-links.mjs` verifying social link targets and icon identifiers

### Implementation for User Story 2

- [X] T011 [US2] Implement `CompactButton` component in `src/ui/components/CompactButton.tsx` supporting brand colors (`telegram`, `instagram`, `linkedin`), icon slots, and Persian labels
- [X] T012 [US2] Integrate the compact social button horizontal row into `src/ui/components/Launchpad.tsx` positioned between the primary association banner and the jobs banner

**Checkpoint**: At this point, User Stories 1 AND 2 work together seamlessly.

---

## Phase 5: User Story 3 - Mobile-Optimized & Accessible Navigation (Priority: P3)

**Goal**: Ensure touch targets are at least 44x44px, keyboard focus rings are visible, screen readers announce clear labels, and compact mobile screens (360px–412px) display with zero clipping.

**Independent Test**: Navigate through all launchpad elements on a simulated 412px mobile viewport using `Tab` and `Enter`, verifying focus indicators and absence of layout breakage.

### Implementation for User Story 3

- [X] T013 [P] [US3] Create dedicated responsive and animation styles in `src/ui/components/launchpad.css` ensuring ≥44px touch heights, smooth hover scale/shadow, and focus ring outlines
- [X] T014 [US3] Enforce accessibility attributes (`aria-label`, `role="link"`, `target="_blank"`, `rel="noopener noreferrer"`) across all items in `src/ui/components/Launchpad.tsx`

**Checkpoint**: All three user stories are now complete, accessible, and fully functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Verification, quality gates, and final artifact checks

- [X] T015 [P] Run contract verification test suite: `node tests/verify-links.mjs`
- [X] T016 Run strict TypeScript compilation check: `pnpm tsc --noEmit`
- [X] T017 Build production bundle: `pnpm build` and validate against `specs/001-redirect-launchpad/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion (T003, T004, T005)
- **User Story 2 (Phase 4)**: Depends on Foundational completion (can be developed in parallel with US1, integrates into `Launchpad.tsx`)
- **User Story 3 (Phase 5)**: Depends on US1 and US2 completion to style and audit all rendered elements
- **Polish (Phase 6)**: Depends on all user stories complete

### Parallel Opportunities

- T001 and T002 can run in parallel
- T003 and T004 can run in parallel
- T006 and T010 can run in parallel (test scripts)
- T007 and T011 can run in parallel (separate component files `BannerButton.tsx` and `CompactButton.tsx`)
- T015 can run in parallel with type checking

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 (Setup) & Phase 2 (Foundational).
2. Implement Phase 3 (User Story 1): `BannerButton` + `Launchpad` + `App.tsx`.
3. Validate User Story 1 independently.

### Incremental Delivery
1. Add User Story 2 (Compact social row) -> Test social channels.
2. Add User Story 3 (Mobile responsiveness & accessibility polish).
3. Run Phase 6 checks (`verify-links.mjs`, `tsc --noEmit`, `pnpm build`).
