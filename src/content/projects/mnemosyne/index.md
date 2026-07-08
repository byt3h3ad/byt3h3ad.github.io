---
title: "mnemosyne"
description: "Archives your Raindrop.io bookmarks to the Wayback Machine and writes the archive links back as notes."
date: "Jun 6 2026"
repoURL: "https://github.com/byt3h3ad/mnemosyne"
tags:
  - Go
  - SQLite
---

Bookmarks rot. Links die, pages get rewritten, and one day the thing you saved is just gone. mnemosyne fixes that by quietly archiving every Raindrop.io bookmark to the Wayback Machine and writing the resulting archive.org link back into the bookmark's notes, so it's always one click away.

It runs as a three-stage pipeline — fetch bookmarks from Raindrop, submit URLs to the Internet Archive's SPN2 API, sync the archive links back — with progress tracked in a local SQLite database so re-runs only process what's new. A `--dry-run` flag previews changes without touching anything, and `status` shows where things stand without hitting either API.
