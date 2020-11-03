import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  height: fit-content;
  display: inline-block;
  background: #efefef;
  color: #000;
  text-shadow: none;
  padding: min(1.5vw, 1.5rem) min(3vw, 4rem);
  border-radius: .3rem;
  transition: opacity ease 200ms;

  &:hover {
    opacity: 0.7;
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`