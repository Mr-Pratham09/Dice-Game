import React from "react"

const Rules = () => {
  return (
    <div className="bg-orange-50 shadow-sm rounded-2xl text-black rules w-[85%] sm:w-full max-w-2xl mx-auto rules-space sm:mt-8 px-4 py-4">

      <h2 className="mb-2.5 text-center font-bold text-lg sm:text-xl md:text-[24px]">
        How to play Dice Game.
      </h2>

      <ul className="list-disc list-inside marker:text-[18px] marker:font-bold">
        <li className="text-xs sm:text-sm font-medium">
          Select any number.
        </li>

        <li className="text-xs sm:text-sm font-medium">
          Click on Dice.
        </li>

        <li className="text-xs sm:text-sm font-medium">
          After click on the dice if selected number is equal to the dice number you will get some point as dice.
        </li>

        <li className="text-xs sm:text-sm font-medium">
          If you get wrong guess then 2 point will be dedcuted.
        </li>
      </ul>

    </div>
  )
}

export default Rules