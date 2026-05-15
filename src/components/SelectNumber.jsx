import React from "react"

const SelectNumber = ({ selectedNumber, setSelectedNumber, error, setError }) => {

    const arr = [1, 2, 3, 4, 5, 6]

    const numberErrorHandler = (value) => {
        setSelectedNumber(value)
        setError('')
    }

    return (
        <div className="w-full lg:w-137 h-auto lg:h-50 flex flex-col items-center lg:items-stretch">

            <div className="error-space">
                <p className="text-center lg:text-end font-bold text-red-500 pt-3 lg:pt-15 text-xs sm:text-sm lg:text-base">
                    {error}
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex gap-2 sm:gap-3 lg:gap-5 justify-center lg:justify-between h-auto lg:h-17.5 flex-wrap lg:flex-nowrap">
                    {
                        arr.map((value, index) => (
                            <span
                                key={index}
                                onClick={() => numberErrorHandler(value)}
                                className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-18 lg:h-17.5 flex justify-center items-center font-bold text-base sm:text-lg lg:text-[25px] cursor-pointer transition-all duration-200 ${value === selectedNumber
                                    ? "bg-black text-white"
                                    : "bg-gray-200 text-black hover:bg-gray-300 hover:scale-105"
                                    }`}
                            >
                                {value}
                            </span>
                        ))
                    }
                </div>


                <p className="text-center lg:text-end font-bold text-base sm:text-lg lg:text-[20px]">
                    Select any Number
                </p>
            </div>

        </div>
    )
}

export default SelectNumber