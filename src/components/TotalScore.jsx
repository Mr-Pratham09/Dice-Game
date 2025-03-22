import React from 'react'
import styled from 'styled-components'

const TotalScore = ({ score }) => {

    return (
        <ScoreContainer>
            <div className='header'>
                <div className='score'>
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </div>
            </div>
        </ScoreContainer>
    )
}


const ScoreContainer = styled.div`
.header {
    max-width: 100%;
    /* border: 2px solid red; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .score {
        width: fit-content;
        /* border: 2px solid red; */
        
        h1 {
            text-align: center;
            font-weight: 500;
            font-size: 60px;
            line-height: 60px;
        }
        p {
            font-weight: 500;
            font-size: 18px;
            line-height: 30px;
        }
    }

    
}
`

export default TotalScore