"use client"

import { projectData } from "@/data/projects";
import { DotBackground } from "./ui/dot-background";
import { BsArrowRight } from 'react-icons/bs';
import Browser from "./ui/browser";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Project = () => {
    const router = useRouter()

    const handleClick = (slug?: string) => {
        router.push(`work/${slug}`)
    }

  return (
    <main className="w-full h-max dark:shadow-[0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3)] shadow-[0px_-10px_20px_rgba(0,0,0,0.3),10px_0px_20px_rgba(0,0,0,0.3),-10px_0px_20px_rgba(0,0,0,0.3)] rounded-xl">
      <DotBackground>
        <main className="h-max flex flex-col items-center w-full justify-center gap-10" >
          {projectData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.slug)}
              className={cn(
                "h-[40rem] min-w-[60rem] max-w-[60rem] border border-black/20 dark:border-white/10 rounded-xl p-2 transition-all duration-500",
                "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] dark:from-[#282828] dark:to-[#101010] from-[#EFEFEF] to-[#C6C6C6] relative", 
                "shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_100px_rgba(60,60,60,0.7)] dark:hover:shadow-[0_10px_50px_rgba(60,60,60,0.7)]"
              )}
            >
                <div className="
                h-[10%] bottom-0 left-0 m-2 rounded-lg w-[98.3%] absolute bg-gradient-to-b from-transparent to-black/70"/>
                <div
                className={cn(
                  "border border-black/50 dark:border-white/20 p-5 h-full w-full rounded-lg overflow-hidden transition-all duration-500",
                  "dark:bg-[#282828] bg-[#EFEFEF] transition-colors duration-300", item.accent 
                )}
              >
                <div className="px-3 -mt-5 flex justify-between">
                  <div>
                    <span className="font-inter text-4xl font-semibold text-black dark:text-white">
                      {item.name}
                    </span>
                    <div className="font-poppins text-lg font-light text-black dark:text-white">
                      <span className="font-medium">{item.type}</span> —{" "}
                      <span>{item.desc}</span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <BsArrowRight className="dark:text-white text-black text-3xl" />
                  </div>
                </div>
                <div
                  className={cn(
                    "w-full flex justify-center items-center overflow-hidden transition-all duration-300", 
                    "mt-20 hover:mt-10"
                  )}
                >
                  <Browser src={item.image} />
                </div>
              </div>
            </div>
          ))}
        </main>
      </DotBackground>
    </main>
  );
};

export default Project;
