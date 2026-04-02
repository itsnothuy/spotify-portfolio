import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { siteConfig } from "@/src/config/site";

export default function SocialLinks() {
  return (
    <>
      {socialMedias.map((social) => (
        <a
          href={social.url}
          className="text-3xl hover:text-spotify-green"
          key={social.title}
          target={social.url.startsWith("mailto:") ? undefined : "_blank"}
          rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={social.ariaLabel}
        >
          {social.icon}
        </a>
      ))}
    </>
  );
}

type socialMediasProps = {
  title: string;
  url: string;
  icon: ReactNode;
  ariaLabel: string;
}[];

const socialMedias: socialMediasProps = [
  {
    title: "Github",
    url: siteConfig.socials.github,
    icon: <FaGithub />,
    ariaLabel: "Visit the GitHub profile",
  },
  {
    title: "Linkedin",
    url: siteConfig.socials.linkedin,
    icon: <FaLinkedin />,
    ariaLabel: "Visit the LinkedIn profile",
  },
  {
    title: "Facebook",
    url: siteConfig.socials.facebook,
    icon: <FaSquareFacebook />,
    ariaLabel: "Visit the Facebook profile",
  },
  {
    title: "Email",
    url: `mailto:${siteConfig.contact.email}`,
    icon: <MdEmail />,
    ariaLabel: "Send an email",
  },
].filter((social) => Boolean(social.url));
