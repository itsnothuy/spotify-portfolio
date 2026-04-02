import React from "react";
import { siteConfig } from "@/src/config/site";

export default function Footer() {
  return (
    <footer className="max-lg:col-span-1  max-lg:row-span-1 col-span-6 items-center text-center mb-10">
      <p className="text-spotify-light-gray max-md:text-sm">
        &copy; {siteConfig.owner.name}&apos;s portfolio {new Date().getFullYear()}
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-3">
        Built with Next.js, TailwindCSS, and Aceternity UI.
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-3">
        Original template by{" "}
        <a
          href="https://github.com/LuaanNguyen"
          className="text-spotify-green font-semibold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luan Nguyen
        </a>
        {" "}•{" "}
        <a
          href="https://github.com/LuaanNguyen/portfolio"
          className="text-spotify-green font-semibold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </p>
    </footer>
  );
}
