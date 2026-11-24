"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import LeetcodeSection from "@/components/sections/leetcode";
import ContactSection from "@/components/sections/contact";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className="w-full max-w-full overflow-x-hidden bg-[#1b1b1f] text-[#fbf8fe]">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <LeetcodeSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
