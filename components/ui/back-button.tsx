'use client'

import { useRouter } from "next/navigation"
import { BsArrowLeft } from "react-icons/bs"

const BackButton = ({classname} : {
    classname: string
}) => {
    const router = useRouter()

    return(
        <div
        onClick={router.back}
        className={`${classname}`}>
            <BsArrowLeft/>
            <span>Back</span>
        </div>
    )
}

export default BackButton