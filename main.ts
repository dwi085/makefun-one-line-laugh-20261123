// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
// Writes one funny line (a single sentence, <= 200 chars) to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My bank app just congratulated me for saving money, which is bold for an app that watched me spend $40 on a candle that smells like 'rain'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-200 chars,
// not only whitespace, exactly one line. Fail loudly rather than ship invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} chars, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
