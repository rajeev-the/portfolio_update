"use client";

import React from "react";
import Galaxy from "./Galaxy";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030305]">
      <Galaxy
        density={1}
        glowIntensity={0.3}
        flareIntensity={1}
        starSpeed={0.5}
        mouseRepulsion
        clickWarp
        starColors={[]}
        hueShift={140}
        saturation={0}
        starSize={1}
        twinkleIntensity={0.3}
        speed={1}
        rotationSpeed={0.1}
        layers={3}
        dpr={1.25}
        direction="forward"
        repulsionStrength={2}
        mouseInteraction
        intro
        lightMode={false}
        transparent={false}
        backgroundColor="#030305"
        className="w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;
