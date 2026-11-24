import React from "react";
import Link from "next/link";
import { config } from "@/data/config";

function Footer() {
  return (
    <footer className="w-full border-t border-black/[0.08] dark:border-white/[0.08] bg-[#fbf8fe] dark:bg-[#1b1b1f] py-8 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#574141] dark:text-zinc-400">
        <div>
          <span className="font-semibold text-[#1b1b1f] dark:text-white">{config.author}</span>
          <span className="text-[#8b7171] ml-2">— Built with precision &amp; pure minimal design.</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {config.social.github && (
            <a
              href={config.social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8b1e2b] dark:hover:text-[#ff9d9f] transition-colors"
            >
              GitHub
            </a>
          )}
          {config.social.linkedin && (
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8b1e2b] dark:hover:text-[#ff9d9f] transition-colors"
            >
              LinkedIn
            </a>
          )}
          {config.social.leetcode && (
            <a
              href={config.social.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8b1e2b] dark:hover:text-[#ff9d9f] transition-colors"
            >
              LeetCode
            </a>
          )}
          <a
            href={`mailto:${config.email}`}
            className="hover:text-[#8b1e2b] dark:hover:text-[#ff9d9f] transition-colors"
          >
            Email
          </a>
          <span className="text-[#8b7171]">© 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
