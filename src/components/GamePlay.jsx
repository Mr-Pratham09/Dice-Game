import React, { useState } from 'react'
import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import RoleDice from './RoleDice'
import Rules from './Rules'
import BackButton from './BackButton'

const GamePlay = ({ toggle }) => {

  const [score, setScore] = useState(0)
  const [error, setError] = useState('')
  const [selectedNumber, setSelectedNumber] = useState(undefined)
  const [currentDice, setCurrentDice] = useState(1)
  const [showRules, setShowRules] = useState(false)
  const [isRolling, setIsRolling] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const roleDice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number')
      return
    }
    setIsRolling(true)

    setTimeout(() => {

      const randomNumber = generateRandomNumber(1, 7)
      setCurrentDice(randomNumber)

      if (selectedNumber == randomNumber) {
        setScore((prev) => prev + randomNumber)
      } else {
        setScore((prev) => prev - 2)
      }

      setSelectedNumber(undefined)
      setIsRolling(false)
    }, 500);
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <main className="relative min-h-screen overflow-hidden">

      <img
        src="/images/dice-bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative px-4 md:px-0">

        <div className="flex flex-col md:flex-row h-auto md:h-50 items-center justify-center md:justify-around gap-4 md:gap-80 pt-5 md:pt-0">
          <div className="flex justify-center md:justify-between items-center gap-4 md:gap-0">
            <BackButton toggle={toggle} />
            <TotalScore score={score} toggle={toggle} />
          </div>

          <SelectNumber
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            error={error}
            setError={setError}
          />
        </div>

        <div className="flex items-center justify-start flex-col h-auto md:h-123 mt-5 md:mt-0">
          <RoleDice
            currentDice={currentDice}
            roleDice={roleDice}
            resetScore={resetScore}
            showRules={showRules}
            setshowRules={setShowRules}
            isRolling={isRolling}
          />

          <div className={`w-full flex justify-center transition-all duration-800 ease-in-out overflow-hidden ${showRules ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"}`}>
            <Rules />
          </div>
        </div>

      </div>
    </main>
  )
}

export default GamePlay