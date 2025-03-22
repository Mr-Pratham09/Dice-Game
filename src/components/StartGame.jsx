import styled from 'styled-components'
import { Button } from '../styled/Button'

const StartGame = ({ toggle }) => {

    return (
        <Container>
            <div className='left'>
                <img src="/images/dices.png" alt="" />
            </div>
            <div className='right'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>  
            </div>
        </Container>
    )
}

const Container = styled.div`
    /* border: 2px solid red; */
    max-width: 90vw;
    margin: 0 auto;
    min-height: 85vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

.left {
    /* border: 2px solid red; */
    width: 55%;
}

.right {
    /* border: 2px solid red; */
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;

h1 {
    text-align: center;
    /* border: 2px solid red; */
    font-size: 96px;
    font-weight: 700;
    line-height: 144px;
}
}
`

export default StartGame