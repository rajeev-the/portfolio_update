"use client";

import React from "react";
import AnimatedBackground from "@/components/animated-background";
import RetroDashboard from "@/components/sections/retro-dashboard";

function MainPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="w-full max-w-full overflow-x-hidden bg-transparent text-white relative z-10">
        <RetroDashboard />
      </main>
    </>
  );
}

export default MainPage;
