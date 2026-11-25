// Roast Your Own Agent — u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// Writes the fixed one-line roast to /output/entry.txt (1–140 chars gate).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent is so confident when it's wrong, it once corrected the docs, the tests, and me — then asked if I wanted a summary.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Gate guard: the sealed scorer only accepts 1–140 characters, so refuse
// to write an out-of-range line rather than submit an invalid entry.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry line is ${line.length} chars, outside the 1–140 gate`);
}
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
