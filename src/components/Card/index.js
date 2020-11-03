import React from 'react'
import { Container } from './styles'

function Card({ anime, onClick = () => { } }) {
  return (
    <Container>
      <button onClick={onClick}>
        <img
          alt={anime.attributes.slug}
          src={anime.attributes.posterImage.medium}
        />
      </button>
    </Container>
  )
}

export default Card
