import styled from 'styled-components'

export const Rows = styled.div`
  @media (min-width: 600px) {
    @media (min-height: 600px) {
      margin: -12rem 0;
    }
  }
`

export const Row = styled.div`
  & + & {
    margin-top: 1rem;
  }
`
