import styled, { keyframes } from 'styled-components';

export const CardContainer = styled.div`
    background-color: white;
    border: 2px solid red;
    border-radius: 8px;
    color: black;

    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width:20rem;
    height: 3rem;
    margin-bottom: 1rem;
    padding: 0.2rem;
    gap: 0.75rem;
    

    @media (max-width: 768px) {
        width: 100%;
  }
`

// const pulsate = keyframes`
//   0% {
//     background-color: red;
//     transform: scale(1);
//   }
//   50% {
//     background-color: #FF7070;
//     transform: scale(1);
//   }
//   100% {
//     background-color: red;
//     transform: scale(1);
//   }
// `;

// export const Circle = styled.div`
//     width: 0.65rem;
//     height: 0.65rem;
//     border-radius: 50%;
//     animation: ${pulsate} 2s linear infinite;
// `