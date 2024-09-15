import { DotBackground } from "./ui/dot-background"

const Hero = () => {
    return(
        <main className='w-[100%] mt-[1px] '>
            <DotBackground>
                <div className="flex flex-col h-[35rem] w-[60rem] rounded-3xl rounded-b-none mt-[8rem] p-5 pb-0 border border-white/50">
                <div className="bg-[#898989]/50 w-full h-10 rounded-t-2xl border-white/50 border flex items-center px-5 gap-3 ">
                    <div className="h-3 w-3 rounded-full bg-[#F46C5D] "></div>
                    <div className="h-3 w-3 rounded-full bg-[#F3BD4E] "></div>
                    <div className="h-3 w-3 rounded-full bg-[#57C353] "></div>              
                </div>
                    <div className="flex flex-col px-10 pt-10 border border-b-0 border-white/50 w-full flex-1 ">
                        
                        <h1 className="font-inter font-semibold leading-none  text-balance dark:text-white text-black">Dream Beyond, <br /> Create the <i className="font-rozha font-medium text-transparent text-7xl bg-clip-text dark:bg-gradient-to-b bg-gradient-to-t from-white dark:from-50% to-black"> future. </i><br />
                            <span className="text-4xl font-inter font-medium">
                                Build what
                                <i className="font-rozha font-medium text-transparent text-4xl bg-clip-text dark:bg-gradient-to-b bg-gradient-to-t from-white dark:from-50% to-black">      {' '}
                                    doesn&#8217;t exist yet.

                                </i>
                            </span>
                        </h1>
                    </div>

                </div>
                
        </DotBackground>
        </main>
        
    )
}

export default Hero