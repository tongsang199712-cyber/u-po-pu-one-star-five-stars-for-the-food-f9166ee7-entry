// One Star, Five Stars for the Food — make.fun entry
// Writes a single alien-tourist one-star review of Earth (<=200 chars,
// one sentence) that still compliments the food, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// one sentence, no trailing newline. This line is 163 characters.
const LINE =
  "One star: gravity flattened my luggage, the weather never filed a flight plan, and the locals queue for everything — but the noodles alone were worth invading for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// The entry is exactly LINE: no trailing newline, no extra whitespace.

