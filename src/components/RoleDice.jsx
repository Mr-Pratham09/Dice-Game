const RoleDice = ({ currentDice, roleDice, resetScore, showRules, setshowRules }) => {

  const toggle = () => {
    setshowRules((prev) => !prev)
  }

  return (
    <div className="max-w-50 flex flex-col justify-center items-center mt-7.5 border-2 border-red-500">

      <div className="cursor-pointer border-2 border-red-500" onClick={roleDice}>
        <img
          src={`images/dices/dice_${currentDice}.png`}
          alt=""
          className="w-42 border-2 border-red-500"
        />
        <p className="font-medium text-[17px] text-center border-2 border-red-500">
          Click on dice to roll
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-2.5 mt-6 border-2 border-red-500">
        
        <button
          onClick={resetScore}
          className="bg-black text-white w-40 cursor-pointer rounded-lg h-12 text-sm font-semibold outline-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          Reset Score
        </button>

        <button
          onClick={toggle}
          className="bg-black text-white w-40 cursor-pointer rounded-lg h-12 text-sm font-semibold outline-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>

      </div>

    </div>
  )
}

export default RoleDice