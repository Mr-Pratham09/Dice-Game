import React from "react"

const SelectNumber = ({ selectedNumber, setSelectedNumber, error, setError }) => {

    const arr = [1, 2, 3, 4, 5, 6]

    const numberErrorHandler = (value) => {
        setSelectedNumber(value)
        setError('')
    }

    return (
        <div className="w-137 h-50 flex flex-col">

            <div className="error-space ">
                <p className="text-end font-bold text-red-500 pt-15">{error}</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex gap-5 justify-between h-17.5">
                    {
                        arr.map((value, index) => (
                            <span
                                key={index}
                                onClick={() => numberErrorHandler(value)}
                                className={`rounded-full w-18 flex justify-center items-center font-bold text-[25px] cursor-pointer transition-all duration-200 ${value === selectedNumber
                                    ? "bg-black text-white"
                                    : "bg-gray-200 text-black hover:bg-gray-300 hover:scale-105"
                                    }`}
                            >
                                {value}
                            </span>
                        ))
                    }
                </div>


                <p className="text-end font-bold text-[20px] ">
                    Select any Number
                </p>
            </div>

        </div>
    )
}

export default SelectNumber