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
    <main className="relative min-h-screen">

      {/* ✅ Background Image */}
      <img
        src="/images/dice-bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ✅ Content */}
      <div className="relative border-2 border-red-500">

        <div className="flex h-50 items-center justify-around gap-80 border-2 border-red-500">
          <div className='flex justify-between items-center'>
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

        <div className='flex items-center justify-start flex-col h-123  border-2 border-red-500'>
          <RoleDice
            currentDice={currentDice}
            roleDice={roleDice}
            resetScore={resetScore}
            showRules={showRules}
            setshowRules={setShowRules}
            isRolling={isRolling}
          />
          <div
            className={`transition-all duration-800 ease-in-out overflow-hidden ${showRules
                ? "max-h-96 opacity-100 mt-5"
                : "max-h-0 opacity-0"
              }`}
          >
            <Rules />
          </div>
        </div>

      </div>
    </main>
  )
}

export default GamePlay