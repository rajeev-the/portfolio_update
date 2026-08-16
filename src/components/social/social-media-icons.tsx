"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin, SiLeetcode, SiX } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"20"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"20"} color={"#fff"} />,
  },
  {
    name: "LeetCode",
    href: config.social.leetcode,
    icon: <SiLeetcode size={"20"} color={"#f89f1b"} />,
  },
  {
    name: "Twitter",
    href: config.social.twitter,
    icon: <SiX size={"20"} color={"#fff"} />,
  },
].filter((b) => Boolean(b.href && b.href.trim().length > 0));

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex items-center gap-1">
      {show &&
        BUTTONS.map((button) => (
          <Link
            href={button.href || "#"}
            key={button.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={button.name}
          >
            <Button variant={"ghost"} size="icon" className="size-9 text-foreground hover:text-cyan-400">
              {button.icon}
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
