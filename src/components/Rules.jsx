const Rules = () => {
  return (
    <div className="bg-orange-50 shadow-sm rounded-2xl text-black p-3.5 w-190 mx-auto mt-5 border-2 border-red-500">

      <h2 className="mb-2.5 text-center font-bold text-[24px] border-2 border-red-500">
        How to play Dice Game
      </h2>

      <ul className="list-disc list-inside marker:text-[18px] marker:font-bold border-2 border-red-500">
        <li className="text-[14px] font-medium border-2 border-red-500">
          Select any number
        </li>

        <li className="text-[14px] font-medium border-2 border-red-500">
          Click on Dice
        </li>

        <li className="text-[14px] font-medium border-2 border-red-500">
          After click on the dice if selected number is equal to the dice number you will get some point as dice
        </li>

        <li className="text-[14px] font-medium border-2 border-red-500">
          If you get wrong guess then 2 point will be dedcuted
        </li>
      </ul>

    </div>
  )
}

export default Rules