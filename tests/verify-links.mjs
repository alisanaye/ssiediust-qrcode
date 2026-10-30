import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

// Read and parse src/data/links.json or extract from src/data/links.ts
const linksFilePath = path.join(rootDir, "src", "data", "links.json");

assert(fs.existsSync(linksFilePath), `links.json must exist at ${linksFilePath}`);

const content = fs.readFileSync(linksFilePath, "utf8");
const links = JSON.parse(content);

assert(Array.isArray(links), "Links registry must be an array");
assert(links.length >= 7, `Expected at least 7 launchpad links, found ${links.length}`);

const seenIds = new Set();
const validThemes = ["teal-blue", "crimson-purple", "telegram", "instagram", "linkedin"];
const validTypes = ["banner", "compact"];
const validIcons = ["telegram", "instagram", "linkedin"];

for (const item of links) {
  // id validation
  assert(typeof item.id === "string" && /^[a-z0-9-]+$/.test(item.id), `Invalid id: ${item.id}`);
  assert(!seenIds.has(item.id), `Duplicate link id: ${item.id}`);
  seenIds.add(item.id);

  // title validation
  assert(typeof item.title === "string" && item.title.trim().length >= 2, `Invalid title for ${item.id}`);

  // url validation (protocol enforcement)
  assert(typeof item.url === "string", `Missing url for ${item.id}`);
  assert(/^https?:\/\//i.test(item.url), `Insecure or invalid URL scheme for ${item.id}: ${item.url}`);
  new URL(item.url); // Must parse without throwing

  // type validation
  assert(validTypes.includes(item.type), `Invalid type ${item.type} for ${item.id}`);

  // theme validation
  assert(validThemes.includes(item.theme), `Invalid theme ${item.theme} for ${item.id}`);

  // ariaLabel validation
  assert(typeof item.ariaLabel === "string" && item.ariaLabel.trim().length >= 4, `Missing/short ariaLabel for ${item.id}`);

  // asset validation
  if (item.imageSrc) {
    const rawPath = item.imageSrc.replace(/^\.?\//, "");
    const diskPath = path.join(rootDir, rawPath);
    const publicPath = path.join(rootDir, "public", rawPath);
    assert(
      fs.existsSync(diskPath) || fs.existsSync(publicPath),
      `imageSrc not found on disk for ${item.id}: ${item.imageSrc}`
    );
  }

  if (item.iconName) {
    assert(validIcons.includes(item.iconName), `Invalid iconName ${item.iconName} for ${item.id}`);
  }
}

console.log(`✓ All ${links.length} launchpad links successfully verified against schema.`);
