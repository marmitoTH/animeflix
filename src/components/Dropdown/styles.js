import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  position: relative;
`

export const Menu = styled.div`
  width: 99%;
  position: absolute;
  flex-direction: column;
  border: 1px solid #4d4d4d;
  border-radius: .3rem;
  background: #242424;
  display: ${props => props.fold ? 'none' : 'flex'};

  button {
    color: white;
    background: none;
    padding: min(1vw, 1.5rem) 0;
    cursor: pointer;

    &:hover {
      background: #424242;
    }
  }
`

export const Button = styled.button`
  color: white;
  cursor: pointer;
  padding: min(1vw, 1rem) min(4vw, 6rem);
  border: 1px solid #4d4d4d;
  border-radius: .3rem;
  background: #242424;
`