import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  cursor: pointer;
`

export const Button = styled.button`
  color: #fff;
  width: max(2rem, 1.25vw);
  cursor: pointer;
  background: none;
  
  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: .3rem;
  }
`
