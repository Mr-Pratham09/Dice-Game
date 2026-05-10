const StartGame = ({ toggle }) => {

    return (
        <div className='min-h-screen flex justify-between items-center '>
            <div className='w-1/2 flex justify-center items-center overflow-hidden'>
                <img src="/images/dices.png" alt="" className="transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3" />
            </div>

            <div className='w-1/2 flex flex-col justify-center items-center gap-5 h-[60vh]'>
                <h1 className='text-center text-[96px] font-bold leading-36'>
                    Dice Game
                </h1>

                <p className="text-center text-gray-600 text-lg font-bold">
                    Test your luck and strategy in this exciting dice game. <br />
                    Pick a number, roll the dice, and see if fortune is on your side!
                </p>

              <button className="bg-black text-white w-56 cursor-pointer border border-transparent rounded-lg h-12 text-xl font-semibold outline-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black" onClick={toggle}>Play Now</button>
            </div>
        </div>
    )
}

export default StartGame