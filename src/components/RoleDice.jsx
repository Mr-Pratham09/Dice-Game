import React from "react"

const RoleDice = ({ currentDice, roleDice, resetScore, showRules, setshowRules, isRolling }) => {

  const toggle = () => {
    setshowRules((prev) => !prev)
  }

  return (
    <div className="max-w-50 flex flex-col items-center mt-4 sm:mt-6">

      <div onClick={roleDice}>
        <img
          src={`images/dices/dice_${currentDice}.png`}
          alt="laoding"
          className={`w-28 sm:w-34 md:w-38 lg:w-42 transition-transform duration-500 ease-in-out ${isRolling ? "rotate-720 scale-110" : "rotate-0 scale-100 cursor-pointer"
            }`}
        />

        <p className="font-medium text-xs sm:text-sm text-center mt-1">
          Click on dice to roll
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-2.5 mt-4 sm:mt-6">

        <button
          onClick={resetScore}
          className="bg-black text-white w-32 sm:w-36 md:w-40 cursor-pointer rounded-lg h-10 md:h-12 text-xs sm:text-sm font-semibold outline-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          Reset Score
        </button>

        <button
          onClick={toggle}
          className="bg-black text-white w-32 sm:w-36 md:w-40 cursor-pointer rounded-lg h-10 md:h-12 text-xs sm:text-sm font-semibold outline-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>

      </div>

    </div>
  )
}

export default RoleDice