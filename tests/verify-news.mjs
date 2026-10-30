import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const newsFilePath = path.join(rootDir, "src", "data", "news.json");
assert(fs.existsSync(newsFilePath), `news.json must exist at ${newsFilePath}`);

const content = fs.readFileSync(newsFilePath, "utf8");
const news = JSON.parse(content);

assert(Array.isArray(news), "News dataset must be an array");
assert.equal(news.length, 3, `Expected exactly 3 news items, found ${news.length}`);

const seenIds = new Set();

for (const item of news) {
  // id validation
  assert(typeof item.id === "string" && /^news-[a-z0-9-]+$/.test(item.id), `Invalid id: ${item.id}`);
  assert(!seenIds.has(item.id), `Duplicate news id: ${item.id}`);
  seenIds.add(item.id);

  // title validation
  assert(typeof item.title === "string" && item.title.trim().length >= 10, `Invalid title for ${item.id}`);

  // url validation (protocol & domain enforcement)
  assert(typeof item.url === "string", `Missing url for ${item.id}`);
  assert(/^https:\/\/t\.me\/ssiediust\/\d+$/.test(item.url), `Invalid Telegram news URL format: ${item.url}`);

  // ariaLabel validation
  assert(typeof item.ariaLabel === "string" && item.ariaLabel.trim().length >= 10, `Missing/short ariaLabel for ${item.id}`);
}

console.log(`✓ All ${news.length} news items verified against schema.`);
