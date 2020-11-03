import styled, { css } from 'styled-components'
import { showIn, showOut } from '../../assets/styles/animations'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  background: rgba(0, 0, 0, .5);
  overflow: auto;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: clamp(1rem, 2vw, 3rem);
`

export const Container = styled.div`
  width: clamp(26rem, 85vw, 90rem);
  line-height: 1.5;
  border-radius: .5rem;
  background: #181818;
  animation: ${showIn} 400ms;

  ${props => props.closing && css`
    animation: ${showOut} 400ms;
  `}
`

export const Header = styled.header`
  height: clamp(20rem, 34vw, 50rem);
  display: flex;
  position: relative;
  align-items: flex-end;
  padding: 1.5vw 3vw;
  border-radius: .5rem .5rem 0 0;
  background: linear-gradient(0deg, #181818 1%, transparent 99%), 
              url(${props => props.background}) no-repeat;
  background-position: center;
  background-size: cover;

  h3 {
    font-weight: normal;
    margin-bottom: max(1vw, 1rem);
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`

export const Main = styled.main`
  padding: 1.5vw 3vw;

  & .separator {
    line-height: 2;
    margin-top: 1.5vw;
  }
`

export const Description = styled.div`
  display: flex;
  margin-bottom: 1vw;
  
  section {
    width: 45vw;
    margin-left: 1.5vw;

    @media (max-width: 700px) {
      display: none;
    }
  }
`

export const Information = styled.div`
  font-size: 80%;
  margin-bottom: 1.5vw;

  strong {
    color: #46D369;
  }

  label {
    margin-left: 1rem;
  }
`
