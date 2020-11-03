import { keyframes } from 'styled-components'

export const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const showIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const showOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(.95);
  }
`
