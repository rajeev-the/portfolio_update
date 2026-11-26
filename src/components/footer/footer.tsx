import React from "react";
import Link from "next/link";
import { config } from "@/data/config";

function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
        <div>
          <span className="font-semibold text-slate-800">{config.author}</span>
          <span className="text-slate-400 ml-2">{"— Software Developer"}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {config.social.github && (
            <a
              href={config.social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              {"GitHub"}
            </a>
          )}
          {config.social.linkedin && (
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              {"LinkedIn"}
            </a>
          )}
          {config.social.leetcode && (
            <a
              href={config.social.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              {"LeetCode"}
            </a>
          )}
          <a
            href={`mailto:${config.email}`}
            className="hover:text-blue-600 transition-colors"
          >
            {"Email"}
          </a>
          <span className="text-slate-400">{"© 2026"}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
