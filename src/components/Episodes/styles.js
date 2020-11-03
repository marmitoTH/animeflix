import styled from 'styled-components'

export const Container = styled.div`
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin-top: 1.5vw;
    margin-bottom: max(1vw, 1rem);
    line-height: 2;
  }
`

export const Episode = styled.div`
  padding: 1rem 0;

  & + & {
    border-top: 1px solid #3f3f3f;
  }

  @media (min-width: 700px) {
    display: flex;
    padding: 2rem 3rem;
  }
`

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  background: #141414;

  img {
    width: 14.5rem;
    height: 8.1rem;
    object-fit: cover;
    border-radius: .5rem;
  }
`

export const Information = styled.div`
  p {
    color: #D2D2D2;
  }

  @media (min-width: 700px) {
    margin-left: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 80%;
  }
`
