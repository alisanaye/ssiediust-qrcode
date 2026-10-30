import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const content = fs.readFileSync(path.join(rootDir, "src", "data", "links.json"), "utf8");
const links = JSON.parse(content);

const banners = links.filter((l) => l.type === "banner");
assert.equal(banners.length, 4, "Must have exactly 4 banner items");

const requiredBannerIds = [
  "ssiediust-main",
  "ssiediust-jobs",
  "ssiediust-iefm",
  "ssiediust-achar"
];

for (const id of requiredBannerIds) {
  const item = banners.find((b) => b.id === id);
  assert(item, `Missing expected banner button: ${id}`);
  assert(item.title.length > 5, `Banner title should be meaningful for ${id}`);
  assert(item.url.startsWith("https://t.me/"), `Expected telegram channel URL for ${id}, got ${item.url}`);
  assert(item.imageSrc, `Banner ${id} must specify an imageSrc`);

  const rawPath = item.imageSrc.replace(/^\//, "");
  const filePath = path.join(rootDir, "public", rawPath);
  assert(fs.existsSync(filePath), `Image file missing: ${filePath}`);
}

console.log("✓ User Story 1 contract test passed: all 4 banner links verified.");
