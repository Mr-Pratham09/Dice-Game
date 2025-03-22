import React, { useState } from 'react'
import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import RoleDice from './RoleDice'
import styled from 'styled-components'
import Rules from './Rules'

const GamePlay = () => {

  const [score, setScore] = useState(0)

  const [error, setError] = useState('')

  const [selectedNumber, setSelectedNumber] = useState(undefined)

  const [currentDice, setCurrentDice] = useState(1)

  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min)
  }

  const roleDice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number')
      // console.log('You have not selected any number')
      return roleDice
    }

    const randomNumber = generateRandomNumber(1, 7)
    setCurrentDice(randomNumber)
    console.log(randomNumber)

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber)
    }

    else {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <main>
      <Header>
        <TotalScore score={score} />
        <SelectNumber selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
      </Header>
      <RoleDice currentDice={currentDice} roleDice={roleDice} resetScore={resetScore} showRules={showRules} setshowRules={setShowRules} />
      {showRules && <Rules />}
    </main>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30rem;
  height: 160px;
`

export default GamePlay