import { ThemeSwitcher } from "./ThemeSwitcher"

const Navbar = () => {
    return(
        <main className="fixed z-[1000] max-w-full w-full flex justify-between items-center px-2">
            <div className="p-5">
                <div className="">
                 <span className="font-poppins leading-5 text-lg">Mayank Bisht</span><br /><span className="text-sm dark:text-white/50 text-black/70 ">
                     Web Designer
                 </span>
                </div>
                
            </div>
            <ThemeSwitcher/>
        </main>
    )
}

export default Navbar