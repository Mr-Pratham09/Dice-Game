import React from 'react'
import styled from 'styled-components'

const SelectNumber = ({ selectedNumber, setSelectedNumber, error, setError }) => {

    const arr = [1, 2, 3, 4, 5, 6]

    const numberErrorHandler = (value) => {
        setSelectedNumber(value)
        setError('')
    }

    return (
        <Box>
            <div className='right-side'>
                <div className="error">
                    <p>{error}</p>
                </div>
                <div className='numbers'>
                    {
                        arr.map((value, index) => (
                            <Span isSelected={value == selectedNumber} onClick={() => numberErrorHandler(value)} key={index}>{value}</Span>
                        ))
                    }
                </div>
                <div className='para'>
                    <p>Select Number</p>
                </div>
            </div>
        </Box>
    )
}

const Box = styled.div`
.right-side {
        width: 550px;
        height: 120px;
        /* border: 2px solid red; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        .error p {
            text-align: end;
            color: red;
        }

        .numbers {
            /* border: 2px solid red; */
            display: flex;
            justify-content: center;
            justify-content: space-between;
            height: 70px;
        }
        
        .para {
            /* border: 2px solid red; */
            p {
                text-align: end;
                font-weight: 700;
                font-size: 20px;
            }
        }
    }
`
const Span = styled.span`
    border: 1px solid black;
    height: inherit;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};  
`

export default SelectNumber