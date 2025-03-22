import styled from "styled-components"

export const Button = styled.button`
    background-color: black;
    color: white;
    width: 225px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: 0.3s all ease-in-out;
    margin-left: 22rem;
    outline: none;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s all ease-in-out;
    }
`

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: 0.3s all ease-in-out;
    }
`