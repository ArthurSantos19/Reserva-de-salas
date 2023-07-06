import styled from 'styled-components'
import { ImBin } from 'react-icons/im';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const ContainerForm = styled.form`
    position: absolute;
    width: 40%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    background: white;
    border: 2px solid #4CAF50;

    @media (max-width: 1103px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    h2, h4 {
        color: black;
        font-size: 100%;
    }


    label {
        color: black;
    }
`

export const StyledDatePicker = styled(DatePicker)`
    width: 40%;
    padding: 4px;
    font-size: 16px;
    border: 2px solid #4CAF50;
    border-radius: 6px;
    box-shadow: none;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    color: black;
    width: 30%;
    margin-bottom: 2%;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

export const Input = styled.input`
    padding: 6px;
    width: 20%;
    font-size: 16px;
    border: 2px solid #4CAF50;
    border-radius: 6px;
    box-shadow: none;
    margin-bottom: 1rem;
`

export const InputRadio = styled.input`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 40%;
    margin-bottom: 2%;
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
    width: 40%;

    @media (max-width: 1093px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
    }
`

export const IconLixeira = styled(ImBin)`
  color: red;
  font-size: 24px;
  margin-bottom: 1rem;

  &:hover {
    color: #8B0000;
    cursor: pointer;
  }
`;



