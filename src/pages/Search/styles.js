import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
  margin-top: clamp(3rem, 2vw, 5rem);
  padding: 3.5vw;
`

export const Poster = styled.div`
  display: inline-block;
  width: 30vw;
  height: 44vw;

  background: none;

  button {
    width: inherit;
    height: inherit;
    cursor: pointer;
    transition: transform ease 200ms;
    transform: scale(.9);

    :hover {
      transform: scale(1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1300px) {
    width: ${30 * .6}vw;
    height: ${44 * .6}vw;
  }
`
