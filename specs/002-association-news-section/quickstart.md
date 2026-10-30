# Quickstart: Association News and Announcements Section

**Feature**: `002-association-news-section`
**Date**: 2026-10-30

## Automated Verification

1. **Verify News Schema & URL Safety**:
   ```bash
   node tests/verify-news.mjs
   ```
   *Expected outcome*: Confirms all 3 news announcements conform to schema, link to authorized `t.me/ssiediust/` posts, and possess complete Persian metadata.

2. **Run TypeScript & Build Verification**:
   ```bash
   pnpm tsc --noEmit
   pnpm build
   ```
   *Expected outcome*: Zero errors.

## Manual UI Verification Flow

1. **Visual Contrast & Layout Check ("Android Compact -2.png")**:
   - Scroll below the "کانال آچار صنایع" card.
   - Verify the deep navy blue section appears with "خبرهای جدید:" header.
   - Verify 3 list items render with bright green bullet points on the right (in RTL).
   - Verify text is white, crisp, and properly formatted with Vazirmatn font.

2. **Click & Redirection Test**:
   - Click "اعضای دوره 24 ام انجمن علمی اعلام شدند!!" -> Opens `https://t.me/ssiediust/6686` in new tab.
   - Click "دومین جلسات آشنایی با ابزار های هوش‌مصنوعی توسط انجمن علمی برگزار شد" -> Opens `https://t.me/ssiediust/6690`.
   - Click "نشریه طنین پیشرفت هفتم را از اینجا بخوانید" -> Opens `https://t.me/ssiediust/6482`.
