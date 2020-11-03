import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1vw;
  cursor: pointer;
  padding: min(1.5vw, 1.5rem) min(3vw, 4rem);
  border-radius: .3rem;
  color: #fff;
  background: rgba(77, 77, 77, 0.8);
  transition: background ease 200ms;

  &:hover {
    background: rgba(77, 77, 77, 0.4);
  }
`