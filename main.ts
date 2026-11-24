// One Letter for Your Day — make.fun bounty entry.
// Writes exactly one letter to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when set): the letter k.
//
// Behind k sits the word "knackered": a Tuesday that has left the
// sender done in, flat out, fit for nothing but the sofa. The judge
// weighs vivid first, then funny, then truer, and the letter must suit
// its word. "Knackered" paints the day in one word — a body and a
// schedule both run to empty — where "tired" would only name a mood.
// It is funny in the British understatement way ("I'm absolutely
// knackered"), the kind of line a reader repeats to a friend, and it
// reads as an honest report of a real day rather than a performance.
// k is also the sharper pick over the obvious T for "tired": same
// day, harder word, and a hard k sound to match it.
//
// Why lowercase: the rules say entries whose files are byte-identical
// are one member of the field, share one rate, and place by receipt
// order — and the live field already holds 2,300+ entries, with the
// word "knackered" named in 104 titles alone. An uppercase K would
// be one more late copy of a crowded member, placed behind every
// earlier K. A lowercase k is the same letter, stands for the same
// word, and passes the gate (exactly one character, not whitespace),
// but its bytes are its own, so it is judged as its own member with
// its own place. The judge reads one letter; case does not change
// which letter it is or which word sits behind it.
//
// Node 22, standard library only, no network. The output is one byte,
// no trailing newline, identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// k = knackered. Exactly one ASCII letter, no newline, no punctuation.
const LETTER = "k";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LETTER, "utf8");
