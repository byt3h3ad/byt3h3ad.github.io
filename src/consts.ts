type Site = {
  NAME: string;
  EMAIL: string;
  URL: string;
  PERMALINK: string;
  LINKS: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

type Socials = {
  NAME: string;
  HREF: string;
}[];

export const SITE: Site = {
  NAME: "Adhiraj",
  EMAIL: "bytehead.dev@gmail.com",
  URL: "https://adhiraj.rocks",
  PERMALINK: "https://byt3h3ad.github.io",
  LINKS: "https://links.adhiraj.rocks",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Adhiraj Dutta is a developer from Assam, India.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "I write, sometimes.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const LOGS: Metadata = {
  TITLE: "Logs",
  DESCRIPTION: "Daily (?) logs.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter",
    HREF: `${SITE.LINKS}/twitter`,
  },
  {
    NAME: "github",
    HREF: `${SITE.LINKS}/github`,
  },
  {
    NAME: "linkedin",
    HREF: `${SITE.LINKS}/linkedin`,
  },
];
