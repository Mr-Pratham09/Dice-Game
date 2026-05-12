import React from "react"

const TotalScore = ({ score }) => {
    return (
        <div className="max-w-full mx-auto h-50 flex justify-between items-center">
            <div className="w-fit">
                <h1 className="text-center font-medium text-[60px] leading-15">
                    {score}
                </h1>
                <p className="font-medium text-[18px] leading-7.5">
                    Total Score
                </p>
            </div>

        </div>
    )
}

export default TotalScore