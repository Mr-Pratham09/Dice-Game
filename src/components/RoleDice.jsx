import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'
import { OutlineButton } from '../styled/Button'

const RoleDice = ({ currentDice, roleDice, resetScore, showRules, setshowRules }) => {

    const toggle = () => {
        setshowRules((prev) => !prev)
    }

    return (
        <DiceContainer>
            <div className='dice' onClick={roleDice}>
                <img src={`images/dices/dice_${currentDice}.png`} alt="" />
                <p>Click on dice to roll</p>
            </div>
            <div className="btns">
                <OutlineButton onClick={resetScore} className='diceBtn'>Reset Score</OutlineButton>
                <Button onClick={toggle} className='diceBtn'>{showRules ?  "Hide Rules" : "Show Rules"}</Button>
            </div>
        </DiceContainer>
    )
}

const DiceContainer = styled.div`
    max-width: 200px;
    margin: 0 auto;
    /* min-height: 450px; */
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;

    .dice {
        cursor: pointer;
        /* border: 2px solid red; */

        img {
            width: 170px;
        }

        p {
        /* width: 230px; */
        font-weight: 500;
        font-size: 17px;
        text-align: center;
        }
    }

    .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 1.5rem;

        .diceBtn {
        margin-left: 0;
        width: 160px;
        font-size: 13px;
        }

    }

`

export default RoleDice