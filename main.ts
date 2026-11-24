import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One Line of Earned Pride: one quiet earned-pride line, 1 to 240 characters.
const LINE =
  "At 6 a.m. the old caretaker finally got the school boiler to hold its heat, and he stood in the warm hallway a minute longer than he needed to, just listening.";
const MAX_CHARS = 240;

function main(): void {
  // Revision: also reject line breaks and blank text, matching the sealed gate exactly.
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("entry must be a single non-empty line");
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry is ${LINE.length} characters, outside 1-${MAX_CHARS}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
}

main();
