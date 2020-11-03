import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './styles'

function Watch() {
  const { id } = useParams()

  return (
    <Container>
      <iframe title='trailer'
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0`}
        allowFullScreen
      />
    </Container>
  )
}

export default Watch
