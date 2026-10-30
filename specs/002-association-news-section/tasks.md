---
description: "Task list for Association News and Announcements Section implementation"
---

# Tasks: Association News and Announcements Section

**Input**: Design documents from `/specs/002-association-news-section/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Test tasks included using lightweight Node.js assert scripts (`tests/verify-news.mjs`) per Constitution Principle V.
**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Test harness and schema validator setup

- [X] T001 [P] Create automated news validation script in `tests/verify-news.mjs` validating announcements against `specs/002-association-news-section/contracts/news-schema.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core data models and news catalog that MUST be complete before user stories can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T002 Define `NewsItem` interface in `src/data/types/news.ts` with constraints verbatim from `data-model.md` (`id`: `^news-[a-z0-9-]+$`, `title`: 10–150 chars, `url`: `^https://t\\.me/ssiediust/\\d+$`)
- [X] T003 [P] Implement declarative news dataset in `src/data/news.json` and export typed items in `src/data/news.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View and Navigate Latest News Bulletins (Priority: P1) 🎯 MVP

**Goal**: Render the "خبرهای جدید:" section displaying the 3 specific association announcements with direct safe redirects to their Telegram posts.

**Independent Test**: Click each of the 3 news items and verify navigation to `https://t.me/ssiediust/6686`, `https://t.me/ssiediust/6690`, and `https://t.me/ssiediust/6482` in a new tab.

### Tests for User Story 1

- [X] T004 [P] [US1] Create automated contract test in `tests/test-news-links.mjs` asserting all 3 required news posts exist and have valid HTTPS URLs

### Implementation for User Story 1

- [X] T005 [US1] Implement `NewsSection` component in `src/ui/components/NewsSection.tsx` rendering header "خبرهای جدید:" and news links using SDS `AnchorOrButton`
- [X] T006 [US1] Integrate `NewsSection` into `src/ui/components/Launchpad.tsx` placed beneath the resource cards

**Checkpoint**: At this point, User Story 1 is fully functional and testable independently as an MVP.

---

## Phase 4: User Story 2 - High-Contrast Visual Styling and Touch Accessibility (Priority: P2)

**Goal**: Style the news section with a deep navy background, custom circular green bullets, RTL layout, ≥44px touch targets, and high-contrast text.

**Independent Test**: Inspect the news section on mobile viewport (412px), verify touch target sizes, confirm contrast against navy background, and cycle through via keyboard `Tab`.

### Implementation for User Story 2

- [X] T007 [P] [US2] Implement CSS styles in `src/ui/components/newsSection.css` providing deep navy background (`#002060`), vibrant green bullet markers (`#00e676`), ≥44px touch target heights, and focus ring outlines
- [X] T008 [US2] Enforce accessibility attributes (`role="list"`, `role="listitem"`, `aria-label`, `target="_blank"`, `rel="noopener noreferrer"`) in `src/ui/components/NewsSection.tsx`

**Checkpoint**: Both user stories are now complete, accessible, and verified.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Verification, quality gates, and final artifact checks

- [X] T009 [P] Run contract verification test suite: `node tests/verify-news.mjs` and `node tests/test-news-links.mjs`
- [X] T010 Run strict TypeScript compilation check: `pnpm tsc --noEmit`
- [X] T011 Build production bundle: `pnpm build` and validate against `specs/002-association-news-section/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion (T002, T003)
- **User Story 2 (Phase 4)**: Depends on US1 completion (styles and polishes `NewsSection.tsx`)
- **Polish (Phase 5)**: Depends on all user stories complete

### Parallel Opportunities

- T001 and T003 can run in parallel
- T002 and T004 can run in parallel
- T007 can be authored in parallel with T005
- T009 can run in parallel with type check T010

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 (Setup) & Phase 2 (Foundational).
2. Implement Phase 3 (User Story 1): `NewsSection` + integration into `Launchpad.tsx`.
3. Validate User Story 1 independently.

### Incremental Delivery
1. Add User Story 2 (High-contrast styling & touch accessibility).
2. Run Phase 5 checks (`verify-news.mjs`, `tsc --noEmit`, `pnpm build`).
