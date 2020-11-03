import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  line-height: 1.3;
  align-items: center;
  background: linear-gradient(0deg, #141414, transparent), 
              url(${props => props.background}) no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 550px) {
    height: 100vh;
    line-height: 1.5;
    background: linear-gradient(90deg, #141414 30%, transparent 70%), 
                linear-gradient(0deg, #141414 1%, transparent 99%), 
                url(${props => props.background}) no-repeat;
    background-size: cover;
  }
`

export const Main = styled.main`
  margin: 0 3.5vw;
  text-shadow: 2px 2px 3px #141414;
`

export const Title = styled.div`
  h3 {
    font-weight: normal;
  }
`

export const Information = styled.div`
  line-height: 3;

  strong {
    color: #46D369;
  }

  label {
    margin-left: min(2vw, 2.5rem);
  }
`

export const Description = styled.div`
  @media (min-width: 500px) {
    width: 60vw;
  }

  @media (min-width: 1200px) {
    width: 35vw;
  }
`

export const Buttons = styled.div`
  display: flex;
  margin-top: min(3vw, 3rem);
`
