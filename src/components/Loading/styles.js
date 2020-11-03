import styled from 'styled-components'
import { rotation } from '../../assets/styles/animations'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 20;
  position: absolute;
  justify-content: center;
  align-items: center;
  background: black;
  opacity: ${props => props.visible ? 1 : 0};
  display: ${props => props.disabled ? 'none' : 'flex'};
  transition: opacity ease 400ms;

  img {
    mix-blend-mode: screen;
    max-width: max(4rem, 5vw);
    animation: ${rotation} 2s infinite linear;
  }
`