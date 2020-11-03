import React, { useEffect, useState, Fragment, useRef } from 'react'
import Api from '../../services/Api'
import Utility from '../../services/Utility'
import { Container, Header, Episode, Thumb, Information } from './styles'
import Dropdown from '../Dropdown'
import FoldButton from '../Buttons/Fold'

const FETCH_LIMIT = 20
const FOLD_LIMIT = 5

function Episodes({ animeId, thumbnail }) {
  const [loading, setLoading] = useState(true)
  const [episodes, setEpisodes] = useState(null)
  const [offset, setOffset] = useState(0)
  const [folded, setFolded] = useState(true)
  const listRef = useRef()

  useEffect(() => {
    const loadEpisodes = async () => {
      setEpisodes(await Api.getEpisodes(animeId, FETCH_LIMIT, offset))
      setLoading(false)
    }

    loadEpisodes()
  }, [animeId, offset])

  function handleFolding() {
    setFolded(!folded)
  }

  function drawDropdown() {
    const elements = []
    const pages = Math.ceil(episodes.meta.count / FETCH_LIMIT)

    if (pages > 1) {
      for (let i = 0; i < pages; i++) {
        elements.push(`Page ${i + 1}`)
      }

      return (
        <Dropdown
          elements={elements}
          onChange={id => setOffset(id * FETCH_LIMIT)}
        />
      )
    }
  }

  return (
    <Fragment>
      {!loading && <Container>
        <Header>
          <h3>Episodes</h3>
          {drawDropdown()}
        </Header>
        <div ref={listRef} />
        {(() => {
          const elements = []
          const limit = folded ? Math.min(FOLD_LIMIT, episodes.data.length)
            : episodes.data.length

          for (let i = 0; i < limit; i++) {
            const episode = episodes.data[i]
            elements.push(
              <Episode key={i}>
                <Thumb>
                  <img
                    alt='thumbnail'
                    src={episode.attributes.thumbnail?.original || thumbnail}
                  />
                </Thumb>
                <Information>
                  <h4>
                    {episode.attributes.number + '. '}
                    {episode.attributes.canonicalTitle}
                  </h4>
                  <p>{Utility.trimParagraph(episode.attributes.description, 130, '...')}</p>
                </Information>
              </Episode>
            )
          }

          return elements
        })()}
        {(episodes.data.length > FOLD_LIMIT) &&
          <FoldButton
            initialValue={!folded}
            onClick={handleFolding}
          />
        }
      </Container>}
    </Fragment>
  )
}

export default Episodes
