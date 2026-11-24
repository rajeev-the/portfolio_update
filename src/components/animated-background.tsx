"use client";

import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#fbf8fe] dark:bg-[#1b1b1f]">
      {/* Subtle warm earthen ambient tint */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#8b1e2b]/[0.025] rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#a43a43]/[0.02] rounded-full blur-[140px]" />

      {/* Subtle engineering precision grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 30, 43, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 30, 43, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

