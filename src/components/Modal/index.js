import React, { useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom'
import Utility from '../../services/Utility'
import { Background, Wrapper, Container, Header, Buttons, Main, Description, Information } from './styles'
import Episodes from '../Episodes'
import About from '../About'
import MediaButton from '../Buttons/Media'
import WatchButton from '../Buttons/Watch'
import CloseButton from '../Buttons/Close'

function Modal({ anime, onClose }) {
  const containerRef = useRef()
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const handleClick = event => {
      if (!containerRef.current.contains(event.target)) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'auto'
  }, [])

  function closeModal() {
    setClosing(true)

    setTimeout(() => {
      setClosing(false)
      onClose()
    }, 380);
  }

  return ReactDom.createPortal(
    <Background>
      <Wrapper>
        <Container ref={containerRef} closing={closing}>
          <Header
            background={anime.attributes.coverImage?.original ||
              anime.attributes.posterImage.original}
          >
            <div>
              <h2>{anime.attributes.titles.en ||
                anime.attributes.canonicalTitle}
              </h2>
              {anime.attributes.titles.ja_jp &&
                <h3>({anime.attributes.titles.ja_jp})</h3>}
              <Buttons>
                <WatchButton videoId={anime.attributes.youtubeVideoId} />
                <MediaButton type='add' />
                <MediaButton type='like' />
                <MediaButton type='dislike' />
              </Buttons>
            </div>
            <CloseButton onClick={closeModal} />
          </Header>
          <Main>
            <div>
              <Information>
                {anime.attributes.averageRating &&
                  <strong>{Utility.filterPercentage(anime.attributes.averageRating)}% Match</strong>}
                {anime.attributes.startDate &&
                  <label>{Utility.filterYear(anime.attributes.startDate)}</label>}
                {(() => {
                  if (anime.attributes.showType === 'TV' && anime.attributes.episodeCount) {
                    return <label>{anime.attributes.episodeCount} episodes</label>
                  }
                })()}
              </Information>
              <Description>
                <p>{Utility.trimParagraph(anime.attributes.description)}</p>
                <section><About limitElements={3} anime={anime} /></section>
              </Description>
            </div>
            {(() => {
              if (anime.attributes.showType === 'TV') {
                return (
                  <Episodes
                    animeId={anime.id}
                    thumbnail={anime.attributes.coverImage?.original ||
                      anime.attributes.posterImage.original}
                  />
                )
              }
            })()}
            <h3 className='separator'>About {anime.attributes.titles.en || anime.attributes.canonicalTitle}</h3>
            <About anime={anime} />
          </Main>
        </Container>
      </Wrapper>
    </Background>,
    document.getElementById('modal-root')
  )
}

export default Modal
