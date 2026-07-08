---
title: "Crest"
description: "A Hacker News feed showing only stories that crossed a score threshold, newest first."
date: "Jun 17 2026"
demoURL: "https://crest.byt3h3ad.workers.dev/"
repoURL: "https://github.com/byt3h3ad/crest"
tags:
  - Cloudflare Workers
  - TypeScript
  - D1
---

I got tired of scrolling through HN's front page hoping to catch something good before it fell off. Crest flips that: it only shows stories once they cross a score threshold (150 points by default), sorted by when they crossed it, not when they were posted — so a story from 3 days ago that just tipped over 150 points still shows up as new.

Runs entirely on Cloudflare Workers' free tier. A cron job polls HN every 10 minutes and writes to D1, and a static page reads off a small JSON API. There's also an RSS feed of the latest 30 qualifying stories for anyone who wants it in their reader.

Threshold, window, and page size are all tunable via environment variables if 150 points isn't your speed.
