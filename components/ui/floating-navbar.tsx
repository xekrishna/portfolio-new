"use client";
import React from "react";
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
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "flex max-w-max items-center justify-center fixed top-7 backdrop-blur-md inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-navMain/70 z-[5000] p-1 shadow-lg",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 px-6 py-2 justify-center text-center items-center flex space-x-1 text-neutral-600  rounded-full hover:text-neutral-500 min-w-16",
              pathname === navItem.link ? "bg-navItem/70" : "", navItem.name === 'Home' ? 'dark:hover:bg-gradient-to-r to-90% from-navItem/50 to-transparent' : 'dark:hover:bg-gradient-to-l to-90% from-navItem/50 to-transparent' 
            )}
          >
            <span className="hidden sm:block text-sm font-inter font-medium">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
