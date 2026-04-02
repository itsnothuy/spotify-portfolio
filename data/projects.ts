export type personalProject = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
};

export type personalProjectType = personalProject[];

export const personalProjects: personalProjectType = [
  {
    href: "https://github.com/triton-inference-server/server",
    imageSrc: "/nvidia.webp",
    imageAlt: "NVIDIA (Triton Server) Open Source Contributor",
    title: "NVIDIA (Triton Server) - Open Source Contributor",
    description:
      "Fixed a production-critical health endpoint bug returning HTTP 200 when Python backend processes were crashed in Issue 8604",
    tech: ["C++", "Python", "gRPC", "HTTP"],
    featured: true,
  },
  {
    href: "https://github.com/facebook/react/",
    imageSrc: "/meta.webp",
    imageAlt: "Meta (React) Open Source Contributor",
    title: "Meta (React) - Open Source Contributor",
    description:
      "Diagnosed a React Compiler/runtime incompatibility in Issue 35770 and implemented a fix with Jest config and 14 unit tests to prevent regression, improving test reliability and stability for the React ecosystem.",
    tech: ["TypeScript", "React", "Jest"],
    featured: true,
  },
  {
    href: "https://github.com/microsoft/rushstack",
    imageSrc: "/microsoft.webp",
    imageAlt: "Microsoft (Rushstack) Open Source Contributor",
    title: "Microsoft (Rushstack) - Open Source Contributor",
    description:
      "Analyzed a bug that broke the concurrent weighted tasks and consumed 100% CPU in Issue 5607, and implemented a fix by optimizing the task scheduling algorithm and adding 9 unit tests to ensure stability and performance of the Rushstack build system.",
    tech: ["TypeScript", "Node.js", "Jest"],
    featured: true,
  },
  {
    href: "https://interview-prep-eight-lake.vercel.app/",
    imageSrc: "/Inteviewprep.gif",
    imageAlt: "InterviewPrep",
    title: "InterviewPrep (Gemini AI Hackathon Finalist 🏆)",
    description:
      "InterviewPrep is an AI-powered platform that generates personalized coding interview questions and provides real-time feedback on solutions, helping users prepare effectively for FAANG technical interviews.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "TailwindCSS"],
    featured: true,
  },
  {
    href: "",
    imageSrc: "/kontask.gif",
    imageAlt: "Kontask Website",
    title: "Kontask (DePauw 2025 Pitch Competition Top 6 🏆)",
    description:
      "Kontask is an online local platform AI-powered with RAG for Greencastle to connect customers with suitable local businesses.",
    tech: ["Next.js", "TypeScript", "RAG", "TailwindCSS"],
    featured: true,
  },
  {
    href: "",
    imageSrc: "/youtube.webp",
    imageAlt: "Youtube Browser Extension",
    title: "Youtube Browser Extension (4850+ Users Impressions on Chrome Web Store)",
    description:
      "A Chrome extension that enhances the YouTube experience by analyzing video content and providing real-time insights, such as likes/dislikes ratio.",
    tech: ["JavaScript", "Chrome Extension API", "YouTube Data API"],
    featured: true,
  },
];
