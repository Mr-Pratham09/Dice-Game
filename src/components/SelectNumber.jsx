const SelectNumber = ({ selectedNumber, setSelectedNumber, error, setError }) => {

    const arr = [1, 2, 3, 4, 5, 6]

    const numberErrorHandler = (value) => {
        setSelectedNumber(value)
        setError('')
    }

    return (
        <div className="w-137 h-50 flex flex-col border-2 border-red-500">

            <div className="error-space border-2 border-red-500">
                <p className="text-end border-2 font-bold border-red-500 text-red-500 pt-15">{error}</p>
            </div>

            <div className="border-2 border-red-500">
                <div className="flex justify-between h-17.5 border-2 border-red-500 overflow-hidden">
                    {
                        arr.map((value, index) => (
                            <span
                                key={index}
                                onClick={() => numberErrorHandler(value)}
                                className={`border rounded-full border-black w-18 flex justify-center items-center font-bold text-[25px] cursor-pointer transition-all duration-200 ${value === selectedNumber
                                    ? "bg-black text-white"
                                    : "bg-white text-black hover:bg-gray-50 hover:scale-105"
                                    }`}
                            >
                                {value}
                            </span>
                        ))
                    }
                </div>


                <p className="text-end font-bold text-[20px] border-2 border-red-500">
                    Select Number
                </p>
            </div>

        </div>
    )
}

export default SelectNumber