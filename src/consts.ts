type Site = {
  NAME: string;
  EMAIL: string;
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

export const SOCIALS: Socials = [
  {
    NAME: "twitter",
    HREF: "https://x.com/byt3h3ad",
  },
  {
    NAME: "github",
    HREF: "https://github.com/byt3h3ad",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/byt3h3ad",
  },
];
