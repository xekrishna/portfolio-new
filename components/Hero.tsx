"use client";

import { BsArrowDown } from "react-icons/bs";
import { DotBackground } from "./ui/dot-background";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <main className="w-full mt-[1px] relative">
      {/* Desktop Version (lg and above) */}
      <div className="hidden lg:block">
        <div className="w-full h-full absolute bg-gradient-to-b from-transparent from-60% dark:to-black to-white z-[100] rounded-xl dark:shadow-[0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3)] shadow-[0px_-10px_20px_rgba(0,0,0,0.3),10px_0px_20px_rgba(0,0,0,0.3),-10px_0px_20px_rgba(0,0,0,0.3)] overflow-hidden" />
        <DotBackground className="flex items-end">
          <div className="relative w-full max-h-[100vh] lg:h-[80vh] h-[90vh] overflow-hidden">
            <div className="w-full h-[50%] bottom-0 absolute bg-gradient-to-b from-transparent from-60% dark:to-black/80 to-white z-[100] rounded-3xl rounded-b-none" />
            <div className="flex flex-col lg:h-[580vh] w-[65rem] lg:mt-[5%] rounded-3xl rounded-b-none p-2 pb-0 border dark:border-white/10 border-black/10 tracking-tight bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] dark:from-[#282828] dark:to-[#101010] from-[#EFEFEF] to-[#C6C6C6] overflow-hidden relative">
              <motion.div
                className="absolute -top-20 left-0 lg:h-[1200px] lg:w-20 bg-white/10 backdrop-blur-md z-50 rotate-45"
                initial={{ x: -1000, rotate: 20 }}
                animate={{ x: 2000 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 3,
                  ease: "linear",
                  repeatDelay: 9,
                }}
              />
              <div className="bg-[#898989]/50 w-full h-10 rounded-t-2xl dark:border-white/20 border-black/20 border flex items-center px-5 gap-3">
                <div className="h-3 w-3 rounded-full bg-[#F46C5D] shadow-[0_0_10px_10px_#F46C5D30]"></div>
                <div className="h-3 w-3 rounded-full bg-[#F3BD4E] shadow-[0_0_10px_10px_#F3BD4E30]"></div>
                <div className="h-3 w-3 rounded-full bg-[#57C353] shadow-[0_0_10px_10px_#57C35330]"></div>
              </div>
              <div className="flex flex-col px-10 pt-10 border border-b-0 dark:border-white/20 border-black/20 w-full flex-1 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] dark:from-[#282828] dark:to-[#101010] from-[#EFEFEF] to-[#C6C6C6]">
                <h1 className="font-inter font-semibold leading-none text-balance dark:text-white text-black drop-shadow-lg">
                  Dream Beyond, <br /> Create the{" "}
                  <i className="font-rozha font-medium text-transparent text-7xl bg-clip-text dark:bg-gradient-to-b bg-gradient-to-t from-white dark:from-50% to-40% dark:to-80% to-black">
                    {" "}
                    future.{" "}
                  </i>
                  <br />
                  <span className="text-4xl font-inter font-medium">
                    Build what
                    <i className="font-rozha font-medium text-transparent text-4xl bg-clip-text dark:bg-gradient-to-b bg-gradient-to-t dark:from-white from-white/50 dark:from-50% to-40% dark:to-80% to-black">
                      {" "}
                      doesn&#8217;t exist yet.
                    </i>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </DotBackground>
      </div>

      {/* Mobile Version (below lg) */}
      <div className="lg:hidden mt-20 h-[50vh] relative">
        <div className="w-full h-full absolute bg-gradient-to-b from-transparent from-60% dark:to-black to-white z-[1]" />

        <div className="flex flex-col justify-center items-start gap-4 px-4 py-8">
          <div className="flex items-center gap-4 px-2">
            <div className="h-3 w-3 dark:bg-white bg-black rounded-full dark:shadow-[0_0_10px_7px_#FFFFFF30] shadow-[0_0_10px_7px_#00000030]" />
            <span className="uppercase font-instrument dark:text-white/70 text-sm">
              Mayank Bisht
            </span>
          </div>
          <h1
            className={cn(
              " font-inter text-5xl font-semibold leading-none text-balance dark:text-white text-black drop-shadow-lg",
              " drop-shadow-custom"
            )}
          >
            Dream Beyond, <br />
            <span className="text-5xl font-inter font-medium">
              inspire bold &
              <i className="font-rozha font-medium text-transparent text-5xl bg-clip-text dark:bg-gradient-to-b bg-gradient-to-t dark:from-white from-white/50 dark:from-50% to-40% dark:to-80% to-black">
                {" "}
                create.
              </i>
            </span>
          </h1>
        </div>
      </div>

      {/* Common Arrow Animation */}
      <motion.div
        className="absolute h-10 z-[1000000] flex justify-center items-center w-[95%] bottom-20 transform -translate-x-1/2"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
      >
        <BsArrowDown className="dark:text-white text-black/80 text-5xl" />
      </motion.div>
    </main>
  );
};

export default Hero;
