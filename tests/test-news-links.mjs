import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const content = fs.readFileSync(path.join(rootDir, "src", "data", "news.json"), "utf8");
const news = JSON.parse(content);

const expectedLinks = [
  "https://t.me/ssiediust/6686",
  "https://t.me/ssiediust/6690",
  "https://t.me/ssiediust/6482"
];

for (let i = 0; i < expectedLinks.length; i++) {
  assert.equal(news[i].url, expectedLinks[i], `News item ${i} URL mismatch`);
  assert(news[i].title.length > 5, `News item ${i} title missing`);
}

console.log("✓ User Story 1 news contract test passed: all 3 news links matched.");
