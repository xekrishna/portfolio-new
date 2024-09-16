import About from "@/components/About"
import { Suspense } from "react"
import Loading from "../loading"
import Copyright from "@/components/Copyright"

const Info = () => {
    return(
        <main className="flex flex-col items-center justify-center p-3">
            <Suspense fallback={<Loading/>}>
                    <About/>
                    <Copyright/>                
            </Suspense>

        </main>
    )
}

export default Info