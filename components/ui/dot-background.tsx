import { cn } from "@/lib/utils";
import React from "react";

export function DotBackground({
  children,
  className,
}: {
  children: React.ReactElement;
  className?: string;
}) {
  return (
    <div className="min-h-[44.5rem] max-h-max w-full p-10 lg:rounded-[1rem] overflow-hidden dark:bg-[#232323] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div
        className={cn(
          "absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
          className
        )}
      ></div>
      <div
        className={cn(
          "text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
        )}
      >
        {children}
      </div>
    </div>
  );
}
