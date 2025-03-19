---
title: "Concerts in Town"
description: "All the local concerts scraped directly from Spotify internal API"
date: "Jan 18 2025"
demoURL: "https://concerts.adhiraj.tech/"
repoURL: "https://github.com/byt3h3ad/concerts"
tags:
  - NextJS 15
  - TypeScript
  - TailwindCSS
status: "archived"
---

I was doomscrolling twtr (like everyday) and came across [this tweet](https://x.com/kognise7/status/1880391651455299813). I thought it was a cool idea and decided to build it just for Bangalore. It started off as Concerts in Bangalore, and showed it to my friends. The idea was well received and I got a lot of requests to add more cities. So I decided to make it a generic Concerts in Town website with their requested cities. I can implement a search feature for all cities, but I love my Spotify account and don't want to get banned.

I used NextJS 15 for both the frontend and backend. The data is cached for 24 hours.

Want me to add a new location? Create an issue in the github repo or if you're tech savvy enough, go to [open.spotify.com/concerts](https://open.spotify.com/concerts), open the `Networks` tab, and go get the `geoHash` and `geonameId` of your location.

![](https://i.imgur.com/opKFlsq.png)

Add it to `config.ts` and make a PR. Or add it in the issue itself. Whatever but just gimme the things and I'll happily add them.

Praying that spotify gods don't ban me.

_Update 18 Mar 2025: I did not get banned but Spotify did block the endpoint :( Project has been archived. Was a good run._
