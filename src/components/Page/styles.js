import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity ease 300ms;
`
