import styled, { keyframes, css } from 'styled-components'

export const moveLeft = keyframes`
  from {
    width: clamp(2rem, 2vw, 4rem);
  }

  to {
    width: clamp(12rem, 15vw, 25rem);
  }
`

export const hide = keyframes`
  from {
    width: clamp(12rem, 15vw, 25rem);
  }

  to {
    width: clamp(2rem, 2vw, 4rem);
  }
`

export const Container = styled.div`
  width: clamp(2rem, 1vw, 2rem);
  height: clamp(2rem, 2vw, 5rem);
  position: relative;
  overflow: hidden;

  ${props => props.show && css`
    animation: ${moveLeft} 300ms forwards;
  `}

  ${props => !props.show && css`
    animation-direction: reverse;
    animation: ${hide} 300ms forwards;
  `}
`

export const Button = styled.button`
  width: clamp(1rem, 2vw, 4rem);
  height: 100%;
  position: absolute;
  z-index: 1;
  background: none;
  color: #fff;
  cursor: pointer;
  transform: scale(.9);

  :disabled {
    cursor: initial;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 85%;
  padding: 0 clamp(1.5rem, 2vw, 4rem);
  box-sizing: border-box;
  background: #000;
  color: #fff;
  border: 1px solid #e5e5e5;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 300ms;
  outline: none;
`