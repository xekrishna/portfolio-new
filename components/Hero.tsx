import { DotBackground } from "./ui/dot-background"

const Hero = () => {
    return(
        <main className='w-[100%] mt-[1px] '>
            <DotBackground>
                <div className="flex h-full ">
                    <div className="flex ">
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