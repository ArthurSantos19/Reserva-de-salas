import styled from 'styled-components'


export const ButtonReserva = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid white;
    box-shadow: 0px 2px 6px white;
    width: 50%;

    &:hover {
        background-color: #45a049;
        box-shadow: 0px 2px 6px #45a049;
    }
`

export const CancelButton = styled.button`
    background-color: #8B0000;
    margin-bottom: 4rem;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    width: 45%;

    &:hover {
        background-color: #800000;
        box-shadow: 0px 2px 6px #FF0000;
    }
`
