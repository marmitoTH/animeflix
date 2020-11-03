import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Button = styled.button`
  width: max(2.5rem, 2.5vw);
  height: max(2.5rem, 2.5vw);
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  background: #2a2a2a;
  cursor: pointer;
  position: relative;
  transition: background ease 200ms;

  :hover {
    background: #545454;
  }
`

export const Line = styled.div`
  height: 8%;
  width: inherit;
  background: #404040;
  position: absolute;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ease 200ms;

  ${props => props.toggled && css`
    transform: rotate(180deg);
  `};
`
