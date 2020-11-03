import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Wrapper, Title, Button } from './styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Card from '../Card'
import Modal from '../Modal'

function Carrousel({ title, animes = [] }) {
  const rowRef = useRef()
  const [leftButton, setLeftButton] = useState()
  const [rightButton, setRightButton] = useState()
  const [selectedAnime, setSelectedAnime] = useState(null)

  function scrollRow(toRight = true) {
    const width = window.innerWidth
    const scrollWidth = rowRef.current.scrollWidth
    const count = scrollWidth / width
    const offset = width * 0.04 * 2
    const scroll = scrollWidth / count - offset

    rowRef.current.scrollBy(toRight ? scroll : -scroll, 0)

    if (toRight) {
      if (!leftButton) {
        setLeftButton(true)
      }

      if ((rowRef.current.scrollLeft + scroll + rowRef.current.clientWidth)
        >= scrollWidth) {
        setRightButton(false)
      }
    } else {
      if (!rightButton) {
        setRightButton(true)
      }

      if (rowRef.current.scrollLeft - scroll <= 0) {
        setLeftButton(false)
      }
    }
  }

  useEffect(() => {
    if (rowRef.current.scrollWidth > window.innerWidth) {
      setRightButton(true)
    }
  }, [])

  return (
    <>
      <Title>{title}</Title>
      <Container>
        {leftButton && <Button
          type='button'
          position='left'
          onClick={() => scrollRow(false)}
        >
          <ChevronLeftIcon
            style={{
              fontSize: '3vw'
            }}
          />
        </Button>}
        {rightButton && <Button
          type='button'
          position='right'
          onClick={() => scrollRow()}
        >
          <ChevronRightIcon
            style={{
              fontSize: '3vw'
            }}
          />
        </Button>}
        <Row ref={rowRef}>
          <Wrapper>
            {animes.map((anime, key) => (
              <Card
                key={key}
                anime={anime}
                onClick={() => setSelectedAnime(anime)}
              />
            ))}
          </Wrapper>
        </Row>
      </Container>
      {selectedAnime &&
        <Modal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      }
    </>
  )
}

export default Carrousel
