"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [position, setPosition] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Update active index based on the current path
  useEffect(() => {
    const currentIndex = navItems.findIndex((item) => item.link === pathname);
    setActiveIndex(currentIndex);
  }, [pathname, navItems]);

  useEffect(() => {
    if (activeIndex !== null && navRef.current) {
      const activeItem = navRef.current.children[activeIndex] as HTMLElement;
      if (activeItem) {
        setPosition(activeItem.offsetLeft + activeItem.offsetWidth / 2 - 104); // Adjust the position to center the light
      }
    }
  }, [activeIndex]);

  if (pathname.startsWith("/work")) {
    return null;
  }

  return (
    <AnimatePresence>
      {/* Animated light following the active link */}
      <motion.div
        className={cn(
          "fixed top-[1.6rem] left-1/2 transform -translate-x-1/2 h-[0.5rem] w-[2rem] bg rounded-full z-[500] dark:bg-white/80 bg-black/80 ",
          "dark:shadow-[0_0_20px_10px_rgba(255,255,255,0.2),0_0_40px_30px_rgba(255,255,255,0.1)]",
          "shadow-[0_0_20px_10px_rgba(0,0,0,0.2),0_0_40px_30px_rgba(0,0,0,0.1)]"
        )}
        animate={{ x: position }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <motion.div
        ref={navRef}
        className={cn(
          "flex max-w-max items-center justify-center fixed top-7 backdrop-blur-md inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-navMain/70 z-[5000] p-1 shadow-lg",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 px-6 py-3 justify-center text-center items-center flex space-x-1 text-neutral-600 rounded-full hover:text-neutral-500 min-w-16",
              pathname === navItem.link
                ? "dark:bg-navItem/70 bg-[#C6C6C6]/50"
                : "",
              navItem.name === "Home"
                ? "dark:hover:bg-gradient-to-r to-90% from-navItem/50 to-transparent"
                : "dark:hover:bg-gradient-to-l to-90% from-navItem/50 to-transparent"
            )}
          >
            <span className="hidden sm:block text-sm font-inter font-medium">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
