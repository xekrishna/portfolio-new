import Image from "next/image"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { BsPersonCircle, BsThreeDotsVertical } from "react-icons/bs"

const Browser = ({src}:{
    src: string
}) => {
    return(
        <main className="flex flex-col w-full max-w-[95%] rounded-lg border border-black dark:border-white overflow-hidden">
            <div className="flex justify-between px-5 py-2 bg-[#313131] w-full">
                <div className="flex gap-2 ">
                    <div className="flex gap-2 items-center ">
                        <div className="h-3 w-3 rounded-full bg-[#F46C5D] shadow-[0_0_10px_10px_#F46C5D30] "></div>
                        <div className="h-3 w-3 rounded-full bg-[#F3BD4E] shadow-[0_0_10px_10px_#F3BD4E30] "></div>
                        <div className="h-3 w-3 rounded-full bg-[#57C353] shadow-[0_0_10px_10px_#57C35330] "></div> 
                    </div>
                    <div className="flex text-xl justify-center items-center leading-none text-white/70">
                        <BiChevronLeft />
                        <BiChevronRight />
                    </div>
                </div>
                <div className="w-full justify-center items-center flex">
                    <div className="bg-[#3D3D3D] rounded-sm w-[60%] h-4 "/>
                </div>
                <div className="flex text-white/60 text-base justify-center items-center gap-2">
                    <BsPersonCircle/>
                    <BsThreeDotsVertical/>
                </div>
            </div>
            <div>
                <Image height={500} width={10000} src={src} alt="" className="w-full" />
            </div>
        </main>
    )
}

export default Browser