import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #4CAF50;
    font-size: large;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5rem;
`

export const CustomLink = styled(Link).attrs(() => ({
    as: 'h2'
  }))`
    color: white;
    text-decoration: none;
  `;