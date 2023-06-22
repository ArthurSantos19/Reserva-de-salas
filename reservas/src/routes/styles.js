import styled, {keyframes} from 'styled-components';

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza verticalmente os elementos */
  margin-bottom: 342px;
  width: 100%;
  height: auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
  `;

export const ContainerSecundario = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os cards sejam quebrados em várias linhas */
  justify-content: center; /* Centraliza horizontalmente os elementos */
  gap: 1rem; /* Espaçamento entre os cards */
`;

const changeColorGreen = keyframes`
  0% {
    border-color: #90EE90;
  }
  50% {
    border-color: #00FF00;
  }
  100% {
    border-color: #00FF7F;
  }
`;

const changeColorRed = keyframes`
  0% {
    border-color: #A52A2A;
  }
  50% {
    border-color: #800000;
  }
  100% {
    border-color: red;
  }
`;

export const Card = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  animation: ${changeColorGreen} 6s linear infinite;
  border-width: 1.5px;
`;

export const CriarNovaSalaButton = styled.button`
  align-self: flex-end;
  position: relative;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #45a049;

  &:hover {
    background-color: white;
    color: #45a049;
  }
`;


