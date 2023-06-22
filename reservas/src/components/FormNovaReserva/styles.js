import styled from 'styled-components'

export const ContainerForm = styled.form`
    position: absolute;
    width: 40%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    align-items: center;
    justify-content: center;

    background: white;
    border: 2px solid #4CAF50;

    h2, h4 {
        color: black;
    }

    input {
        padding: 6px;
        font-size: 16px;
        border: 2px solid #4CAF50;
        border-radius: 6px;
        box-shadow: none;
        margin-bottom: 1rem;
    }

    label {
        color: black;
    }


`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    color: black;
`

export const DivButton = styled.div`
    display: row;
    margin-top: 1rem;
    margin-bottom: 0;
    gap: 12px;
    margin-left: auto;
`

export const ContainerButton = styled.div`
    display: flexbox;
    flex-direction: column;
`



