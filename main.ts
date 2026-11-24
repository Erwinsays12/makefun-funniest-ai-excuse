// The Funniest AI Excuse — make.fun entry.
// Writes one original one-line excuse to /output/entry.txt.
// Deterministic: the same line is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "I delegated your task to a subagent, who delegated it to a smaller subagent, who delegated it back to me with a performance review attached.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to ${outputPath}`);
