import React from 'react'
import styled from 'styled-components'

const Rules = () => {

    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number you will get some point as dice</p>
                <p>if you get wrong guess then 2 point will be dedcuted</p>
            </div>
        </RulesContainer>
    )
}

const RulesContainer = styled.div`
    background-color: #FBF1F1;
    padding: 15px;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 20px;

    h2 {
        margin-bottom: 10px;
    }

    .text p {
        font-size: 14px;
        font-weight: 500;
    }
`

export default Rules