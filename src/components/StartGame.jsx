import React from "react"

const StartGame = ({ toggle }) => {
  return (
    <div className="relative min-h-screen flex justify-between items-center">

      {/* Background Image using img tag */}
      <img
        src="/images/dice-bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative w-full flex justify-between items-center">

        <div className="w-1/2 text-center overflow-hidden">
          <img className='inline-block transition-transform duration-500 ease-in-out hover:scale-105' src="/images/dices.png" alt="image" />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center gap-5 h-[60vh]">
          <h1 className="text-center text-[96px] w-full font-bold">
            Dice Game
          </h1>

          <p className="text-center font-bold text-gray-600 text-lg">
            Test your luck and strategy in this exciting dice game. <br />
            Pick a number, roll the dice, and see if fortune is on your side!
          </p>

          <button
            className="bg-black text-white w-56 cursor-pointer rounded-lg h-12 text-xl font-semibold outline-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
            onClick={toggle}
          >
            Play Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default StartGame