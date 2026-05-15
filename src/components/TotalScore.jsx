import React from "react"

const TotalScore = ({ score }) => {
  return (
    <div className="min-w-30 sm:min-w-23 mx-auto flex justify-center items-center total-score-space lg:ml-6">
      <div className="w-fit text-center">
        <h1 className="font-medium text-4xl sm:text-5xl lg:text-[60px] leading-none">
          {score}
        </h1>

        <p className="font-medium text-sm sm:text-base lg:text-[18px] leading-7">
          Total Score
        </p>
      </div>
    </div>
  )
}

export default TotalScore