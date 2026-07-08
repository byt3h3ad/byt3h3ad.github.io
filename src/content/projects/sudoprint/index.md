---
title: "sudoprint"
description: "Print-ready sudoku, straight from your terminal to your printer."
date: "Jun 13 2026"
repoURL: "https://github.com/byt3h3ad/sudoprint"
tags:
  - Go
---

A single, dependency-light Go binary that generates batches of sudoku puzzles as clean, print-ready PDFs — two puzzles per A4 sheet, no ads, no watermarks, no wasted space.

Every puzzle is verified to have exactly one solution before it's ever drawn, clues are carved out in 180°-symmetric pairs so the pattern looks intentional rather than random, and a seed fully determines a batch — same seed, same puzzles, byte-for-byte, forever. Difficulty is reported honestly too: if a "hard" puzzle lands at 26 clues instead of the 24 target, the tool tells you.

```bash
./sudoprint -n 5 -d medium -o ./out
```

Ships prebuilt binaries for Linux, macOS, and Windows, or build it yourself with `go build`.
