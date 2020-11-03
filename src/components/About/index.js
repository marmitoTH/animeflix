import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../services/Api'
import { Container } from './styles'

function About({ limitElements, anime }) {
  const [genres, setGenres] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadData() {
      setGenres(await Api.getGenres(anime.id))
      setCategories(await Api.getCategories(anime.id))
    }

    loadData()
  }, [anime])

  function drawGenres() {
    if (genres.length > 0) {
      return (
        <li>
          {'Genres: '}
          {(() => {
            const elements = []
            const limit = limitElements ?
              Math.min(limitElements, genres.length) :
              genres.length

            for (let i = 0; i < limit; i++) {
              const genre = genres[i]
              elements.push(
                <Link
                  key={i}
                  to={`/browse/category/${genre.attributes.slug}`}
                >
                  {genre.attributes.name}
                  {i < limit - 1 ? ', ' : ''}
                </Link>
              )
            }

            return elements
          })()}
        </li>
      )
    }
  }

  function drawCategories() {
    if (categories.length > 0) {
      return (
        <li>
          {'Categories: '}
          {(() => {
            const elements = []
            const limit = limitElements ?
              Math.min(limitElements, categories.length) :
              categories.length

            for (let i = 0; i < limit; i++) {
              const category = categories[i]
              elements.push(
                <Link
                  key={i}
                  to={`/browse/category/${category.attributes.slug}`}
                >
                  {category.attributes.title}
                  {i < limit - 1 ? ', ' : ''}
                </Link>
              )
            }

            return elements
          })()}
        </li>
      )
    }
  }

  return (
    <Container>
      {drawGenres()}
      {drawCategories()}
      <li>
        {'Age Rating: '}
        <label>
          {anime.attributes.ageRating} {anime.attributes.ageRatingGuide}
        </label>
      </li>
    </Container>
  )
}

export default About
