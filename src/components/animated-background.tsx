"use client";

import React from "react";
import Particles from "./Particles";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Ambient Electric Violet & Cyan glowing nebulae */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-violet-600/20 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] bg-cyan-500/20 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: "10s" }} />
      <div className="absolute -bottom-32 left-1/4 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "12s" }} />

      {/* Cyber Tech Matrix Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial fade mask over grid for high-end depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />

      {/* Floating Canvas Particles */}
      <Particles
        className="absolute inset-0"
        quantity={60}
        ease={50}
        staticity={35}
        refresh={false}
      />
    </div>
  );
};

export default AnimatedBackground;
