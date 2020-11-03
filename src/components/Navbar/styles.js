import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  width: 100vw;
  height: max(3rem, 3.5vw);
  z-index: 5;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.5vw;
  box-sizing: border-box;
  background: #000;

  @media (min-width: 600px) {
    background: linear-gradient(180deg, #141414, transparent), 
                rgba(14, 14, 14, ${props => props.opacity});
    transition: background ease 200ms;
  }
`

export const Logo = styled(Link)`
  height: max(2rem, 2vw);

  img {
    max-height: 100%;
  }
`

export const Main = styled.main`
  display: flex;
  align-items: center;
`

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const MenuButton = styled.button`
  color: #fff;
  cursor: pointer;
  margin-right: 2vw;
  background: none;

  @media (min-width: 600px) {
    display: none;
  }
`

export const MenuOptions = styled.div`
  width: 15rem;
  height: fit-content;
  position: absolute;
  left: 0;
  border-top: 5px solid #e50404;
  background: #000;
  transform: translateX(${props => props.hide ? '-100%' : '0'});
  transition: transform ease 300ms;

  section {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
  }

  section + section {
    border-top: 1px solid #333;
  }

  a + a {
    margin-top: 1rem;
  }

  @media (min-width: 600px) {
    display: none;
  }
`

export const VerticalMenu = styled.div`
  color: #fff;
  margin-left: 2vw;
  font-size: 75%;

  a {
    text-decoration: none;
    transition: opacity ease 200ms;

    &:hover {
      opacity: 0.6;
    }
  }

  a + a {
    margin-left: max(1vw, .5rem);
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const Buttons = styled.div`
  width: max(10rem, 7.5vw);
  margin-left: .5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: none;
  }
`
