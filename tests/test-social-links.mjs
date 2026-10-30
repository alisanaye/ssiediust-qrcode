import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const content = fs.readFileSync(path.join(rootDir, "src", "data", "links.json"), "utf8");
const links = JSON.parse(content);

const compact = links.filter((l) => l.type === "compact");
assert.equal(compact.length, 3, "Must have exactly 3 compact social items");

const requiredIcons = ["telegram", "instagram", "linkedin"];
const foundIcons = compact.map((c) => c.iconName);

for (const icon of requiredIcons) {
  assert(foundIcons.includes(icon), `Missing social icon item: ${icon}`);
}

for (const item of compact) {
  assert(item.title.length > 2, `Social title too short for ${item.id}`);
  assert(item.url.startsWith("https://"), `Social url must be secure HTTPS for ${item.id}`);
  assert(item.ariaLabel.length > 5, `Social ariaLabel must be descriptive for ${item.id}`);
}

console.log("✓ User Story 2 contract test passed: all 3 compact social links verified.");
