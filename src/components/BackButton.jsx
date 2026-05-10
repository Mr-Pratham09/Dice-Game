import React from 'react'

const BackButton = ({toggle}) => {
    return (
        <button
            onClick={toggle}
            className="absolute top-5 left-7 bg-black min-w-20 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-black border border-black w-fit btn"
        >
            Back
        </button>
    )
}

export default BackButton