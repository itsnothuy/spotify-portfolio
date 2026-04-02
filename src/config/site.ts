export type SocialPlatform = "github" | "linkedin" | "x" | "facebook";

export const siteConfig = {
  siteName: "Huy Tran's Portfolio",
  siteUrl: "https://huytrn.vercel.app",
  locale: "en_US",
  owner: {
    name: "Huy Tran",
    role: "Software Engineer",
    headline: "Engineer • Architect • OS Contributor",
    description:
      "Software Engineer",
    currentCompany: {
      name: "HONEYNET",
      url: "https://honeynet.vn/",
    },
    profileIntro:
      "Hey! Welcome to my portfolio!",
    profileBody:
      "I&apos;m currently helping contribute to open-source projects as a software engineer on a daily basis.",
    focus:
      "systems and AI infrastructure, including distributed services and platforms that enable machine learning to operate in production",
    blogPrompt: "Click here for more info about me and my work.",
  },
  contact: {
    email: "",
  },
  socials: {
    github: "https://github.com/itsnothuy",
    linkedin: "https://www.linkedin.com/in/huy-trann/",
    x: "",
    facebook: "https://www.facebook.com/huytran.664457",
  },
  seo: {
    defaultTitle: "Huy Tran | Software Engineer",
    description:
      "Software Engineer",
    keywords: [
      "Huy Tran",
      "Software Engineer",
      "AI/ML",
      "Cloud Computing",
    ],
    ogImage: "/huy1.JPG",
    ogImageAlt: "Huy Tran Portfolio",
    twitterHandle: "",
  },
  blog: {
    title: "Writings",
    description: "",
    author: "Huy Tran",
  },
  footer: {
    repositoryUrl: "https://github.com/itsnothuy",
  },
  features: {
    vercelAnalytics: true,
    speedInsights: true,
  },
  widgets: {
    githubUsername: "itsnothuy",
    spotifyEmbedUrl: "https://open.spotify.com/embed/album/7txGsnDSqVMoRl6RQ9XyZP?utm_source=generator",
  },
  assets: {
    avatar: "/huy2 copy.jpg",
    favicon: "/huy1.JPG",
  },
} as const;

export function absoluteUrl(path = ""): string {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  if (!path) {
    return baseUrl;
  }

  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getSocialProfileUrls(): string[] {
  return Object.values(siteConfig.socials).filter((url) =>
    url.startsWith("http"),
  );
}

export function getNameWords(): string[] {
  return siteConfig.owner.name.split(/\s+/).filter(Boolean);
}
