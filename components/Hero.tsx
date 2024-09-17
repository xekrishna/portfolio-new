'use client'

import { DotBackground } from "./ui/dot-background"
import { motion } from "framer-motion";

const Hero = () => {
    return(
        <main className='w-[100%] mt-[1px]  relative'>
            <div className="w-full h-full absolute bg-gradient-to-b from-transparent from-60% dark:to-black to-white z-[100] rounded-xl dark:shadow-[0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3)] shadow-[0px_-10px_20px_rgba(0,0,0,0.3),10px_0px_20px_rgba(0,0,0,0.3),-10px_0px_20px_rgba(0,0,0,0.3)]"/>
            <DotBackground>
                <div className="relative h-full w-full max-h-[50rem] overflow-hidden">
                        
                    <div className="w-full h-full absolute bg-gradient-to-b from-transparent from-60% dark:to-black to-white z-[100] rounded-3xl rounded-b-none "></div>
                    <div className="flex flex-col h-[40rem] w-[60rem] rounded-3xl rounded-b-none mt-[10rem] p-3 pb-0 border dark:border-white/50 border-black/50 tracking-tight bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] dark:from-[#282828] dark:to-[#101010] from-[#EFEFEF] to-[#C6C6C6] overflow-hidden relative —  ">
                    <motion.div
                             className="absolute -top-20 left-0 h-[1200px] w-20 bg-white/10 backdrop-blur-md z-50 rotate-45"
                             
                             initial={{ x: -1000, rotate: 20  }}
                             animate={{ x: 2000,  }}  
                             transition={{
                               repeat: Infinity,      // Infinite loop
                               repeatType: "loop",    // Continuous loop
                               duration: 3,           // Time for one cycle
                               ease: "linear",        // Smooth, consistent motion
                               repeatDelay: 9    
                             }}
                         />
                    <div className="bg-[#898989]/50 w-full h-10 rounded-t-2xl dark:border-white/50 border-black/50 border flex items-center px-5 gap-3 ">
                        <div className="h-3 w-3 rounded-full bg-[#F46C5D] shadow-[0_0_10px_10px_#F46C5D30] "></div>
                        <div className="h-3 w-3 rounded-full bg-[#F3BD4E] shadow-[0_0_10px_10px_#F3BD4E30] "></div>
                        <div className="h-3 w-3 rounded-full bg-[#57C353] shadow-[0_0_10px_10px_#57C35330] "></div>              
                    </div>
                        <div className="flex flex-col px-10 pt-10 border border-b-0 dark:border-white/50 border-black/50 w-full flex-1 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] dark:from-[#282828] dark:to-[#101010] from-[#EFEFEF] to-[#C6C6C6]  ">

                            <h1 className="font-inter font-semibold leading-none  text-balance dark:text-white text-black drop-shadow-lg">Dream Beyond, <br /> Create the <i className="font-rozha font-medium text-transparent text-7xl bg-clip-text dark:bg-gradient-to-b bg-gradient-to-t from-white dark:from-50% to-40% dark:to-80% to-black"> future. </i><br />
                                <span className="text-4xl font-inter font-medium">
                                    Build what
                                    <i className="font-rozha font-medium text-transparent text-4xl bg-clip-text dark:bg-gradient-to-b bg-gradient-to-t dark:from-white from-white/50 dark:from-50% to-40% dark:to-80% to-black">      {' '}
                                        doesn&#8217;t exist yet.

                                    </i>
                                </span>
                            </h1>
                        </div>
                     </div>
                

                </div>
                
        </DotBackground>
        </main>
        
    )
}

export default Hero