"use client";

import { ScrollPortraitWallDemo } from "./scroll-portrait-wall";
import Team from "./team";
import { Quote } from "./quote";

export function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ScrollPortraitWallDemo />
      <Team />
      <Quote />
    </div>
  );
}
