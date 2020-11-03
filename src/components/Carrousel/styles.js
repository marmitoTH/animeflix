import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow: clip;
  position: relative;
`

export const Row = styled.div`
  overflow: scroll hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  padding: 1.25vw 3.5vw;
`

export const Title = styled.h3`
  margin-left: 3.5vw;
`

export const Button = styled.button`
  width: 3.5vw;
  height: 100%;
  cursor: pointer;
  position: absolute;
  color: white;
  opacity: 0;
  transform: scaleY(.9);
  background: rgba(0, 0, 0, .5);
  transition: opacity ease 200ms;

  ${props => props.position === 'left' && css`
    left: 0;
  `}

  ${props => props.position === 'right' && css`
    right: 0;
  `}

  ${Container}:hover & {
    opacity: 1;
  }

  @media (max-width: 800px) {
    display: none;
  }
`
