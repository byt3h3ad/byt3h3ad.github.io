# byt3h3ad's home

## 🚀 Project Structure

```
/
├── .gitignore
├── astro.config.mjs
├── CNAME
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tailwind.config.cjs
├── tsconfig.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── avatar.jpg
│   ├── favicon.svg
│   └── projects/
│       ├── codekon-dark.svg
│       ├── codekon-help.png
│       └── codekon-light.svg
└── src/
    ├── consts.ts
    ├── env.d.ts
    ├── components/
    │   ├── ArrowCard.astro
    │   ├── BackToPrev.astro
    │   ├── BackToTop.astro
    │   ├── Container.astro
    │   ├── Footer.astro
    │   ├── FormattedDate.astro
    │   ├── Head.astro
    │   ├── Header.astro
    │   ├── Link.astro
    │   └── Social.astro
    ├── content/
    │   ├── config.ts
    │   ├── blog/
    │   │   ├── bat-cat-alternative/
    │   │   │   └── index.md
    │   │   ├── curious-case-of-257/
    │   │   │   └── index.md
    │   │   ├── jsx-have-one-parent/
    │   │   │   └── index.md
    │   │   └── spa-vs-non-spa/
    │   │       └── index.md
    │   ├── logs/
    │   │   ├── 2024-07-15.md
    │   │   └── 2024-07-16.md
    │   ├── projects/
    │   │   ├── codekon/
    │   │   │   └── index.md
    │   │   ├── hn-daily-api/
    │   │   │   └── index.md
    │   │   ├── memento-mori/
    │   │   │   └── index.md
    │   │   ├── randomhn/
    │   │   │   └── index.md
    │   │   ├── stumbleuponhn/
    │   │   │   └── index.md
    │   │   └── twt-highlighter/
    │   │       └── index.md
    │   └── work/
    │       ├── agrijod.md
    │       ├── covid19india.md
    │       ├── fests.md
    │       ├── gdsc.md
    │       ├── hacks.md
    │       └── quiz.md
    ├── layouts/
    │   ├── Layout.astro
    │   └── PageLayout.astro
    ├── lib/
    │   └── utils.ts
    └── pages/
        ├── about.astro
        ├── index.astro
        ├── blog/
        │   ├── index.astro
        │   └── [...slug].astro
        ├── logs/
        │   └── index.astro
        ├── projects/
        │   ├── index.astro
        │   └── [...slug].astro
        └── work/
            └── index.astro
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
