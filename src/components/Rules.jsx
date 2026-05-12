import React from "react"

const Rules = () => {
  return (
    <div className="bg-orange-50 shadow-sm rounded-2xl text-black rules w-195 mx-auto mt-5">

      <h2 className="mb-2.5 text-center font-bold text-[24px]">
        How to play Dice Game.
      </h2>

      <ul className="list-disc list-inside marker:text-[18px] marker:font-bold">
        <li className="text-[14px] font-medium">
          Select any number.
        </li>

        <li className="text-[14px] font-medium">
          Click on Dice.
        </li>

        <li className="text-[14px] font-medium">
          After click on the dice if selected number is equal to the dice number you will get some point as dice.
        </li>

        <li className="text-[14px] font-medium">
          If you get wrong guess then 2 point will be dedcuted.
        </li>
      </ul>

    </div>
  )
}

export default Rules