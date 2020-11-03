import styled from 'styled-components'

export const Button = styled.button`
  width: max(3rem, 3.5vw);
  height: max(3rem, 3.5vw);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1vw;
  cursor: pointer;
  border-radius: 50%;
  color: #fff;
  background: rgba(42, 42, 42, .6);
  border: 2px solid rgba(255, 255, 255, .5);

  &:hover {
    background: rgba(42, 42, 42, 1);
    border-color: rgba(255, 255, 255, 1)
  }
`