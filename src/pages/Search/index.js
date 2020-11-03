import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Poster } from './styles'
import Api from '../../services/Api'
import Modal from '../../components/Modal'

const FETCH_LIMIT = 20
const FETCH_DELAY = 1000

function Search() {
  const { query } = useParams()
  const containerRef = useRef()
  const [fetching, setFetching] = useState(false)
  const [animes, setAnimes] = useState([])
  const [selectedAnime, setSelectedAnime] = useState(null)

  async function handleScroll() {
    const percentage = Math.abs(window.scrollY /
      (containerRef.current.clientHeight - window.innerHeight))

    if (!fetching && !selectedAnime && (percentage > .8)) {
      setFetching(true)
      const data = await Api.search(query, FETCH_LIMIT)
      setAnimes(previous => previous.concat(data))
      setFetching(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(async () => {
      setAnimes(await Api.search(query, FETCH_LIMIT))
    }, FETCH_DELAY);

    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  })

  return (
    <Container ref={containerRef}>
      {animes?.map((anime, key) => (
        <Poster key={key}>
          <button onClick={() => setSelectedAnime(anime)}>
            <img
              src={anime.attributes.posterImage.original}
              alt='anime-poster'
            />
          </button>
        </Poster>
      ))}
      {selectedAnime &&
        <Modal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      }
    </Container>
  )
}

export default Search
