import React from "react"

const StartGame = ({ toggle }) => {
  return (
    <div className="relative min-h-screen flex justify-between items-center overflow-hidden">

      {/* Background Image using img tag */}
      <img
        src="/images/dice-bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-8 lg:px-16 gap-6">

        <div className="w-full md:w-1/2 text-center overflow-hidden">
          <img
            className="inline-block w-44 sm:w-56 md:w-80 lg:w-auto transition-transform duration-500 ease-in-out hover:scale-105"
            src="/images/dices.png"
            alt="image"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4 md:gap-5 h-auto md:h-[60vh]">
          <h1 className="text-center text-4xl sm:text-5xl md:text-7xl lg:text-[96px] w-full font-bold">
            Dice Game
          </h1>

          <p className="text-center font-bold text-gray-600 text-sm sm:text-base md:text-lg max-w-md">
            Test your luck and strategy in this exciting dice game. <br />
            Pick a number, roll the dice, and see if fortune is on your side!
          </p>

          <button
            className="bg-black text-white w-36 sm:w-40 md:w-48 lg:w-56 cursor-pointer rounded-lg h-10 md:h-12 text-base md:text-xl font-semibold outline-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
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