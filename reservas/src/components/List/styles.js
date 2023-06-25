import styled, { keyframes } from 'styled-components';

export const CardContainer = styled.div`
    background-color: white;
    border: 2px solid red;
    border-radius: 8px;
    color: black;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    width:28rem;
    height: 3rem;
    margin-bottom: 1rem;
    padding: 0.2rem;
    gap: 0.75rem;
    

    @media (max-width: 768px) {
        width: 100%;
  }
`

