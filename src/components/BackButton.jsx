import React from 'react'
import { ArrowLeft } from 'lucide-react'

const BackButton = ({ toggle }) => {
    return (
        <button
            onClick={toggle} className="absolute top-5 left-4 lg:left-7 cursor-pointer bg-black text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-black border border-black w-fit btn px-2 py-1.5 lg:px-3 lg:py-2 lg:min-w-20"
        >

            <span className="block lg:hidden">
                <ArrowLeft size={18} />
            </span>

            <span className="hidden lg:block">
                Back
            </span>

        </button>
    )
}

export default BackButton