// Everyday Things, Two Lines, Longer Run — entry program (Node 22, stdlib only).
// Writes one original two-line explanation to /output/entry.txt.
// Line 1 explains a queue to a 10-year-old through one analogy: a train made
// of people. Line 2 says what the analogy maps and what it leaves out.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'A queue is a train made of people, where everyone is their own carriage and the whole train only moves when the person at the front steps off.\n' +
  'It maps the waiting in order and moving one at a time, but leaves out that train carriages are joined together and cannot wander off to buy an ice cream.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// Gate check (rules: entry.txt must be UTF-8, 1-400 characters, not only
// whitespace, exactly two lines): the file is 296 characters / 296 bytes,
// byte-identical every run, with no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${ENTRY.length}`);
}
if (ENTRY.split('\n').length !== 2 || ENTRY.trim().length === 0) {
  throw new Error('entry must be exactly two non-empty lines');
}
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
