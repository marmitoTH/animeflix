import React, { useState } from 'react'
import Utility from '../../services/Utility'
import { Container, Main, Information, Title, Description, Buttons } from './styles'
import Modal from '../Modal'
import WatchButton from '../Buttons/Watch'
import InfoButton from '../Buttons/Information'

function Featured({ anime }) {
  const [selectedAnime, setSelectedAnime] = useState(null)

  return (
    <Container background={anime.attributes.coverImage.original}>
      <Main>
        <Title>
          <h1>{anime.attributes.titles.en || anime.attributes.canonicalTitle}</h1>
          <h3>({anime.attributes.titles.ja_jp})</h3>
        </Title>
        <Information>
          <strong>{Utility.filterPercentage(anime.attributes.averageRating)}% Match</strong>
          <label>{Utility.filterYear(anime.attributes.startDate)}</label>
          {(() => {
            if (anime.attributes.episodeCount && anime.attributes.showType === 'TV') {
              return <label>{anime.attributes.episodeCount} episodes</label>
            }
          })()}
        </Information>
        <Description>{Utility.trimParagraph(anime.attributes.description)}</Description>
        <Buttons>
          <WatchButton videoId={anime.attributes.youtubeVideoId} />
          <InfoButton onClick={() => setSelectedAnime(anime)} />
        </Buttons>
      </Main>
      {selectedAnime &&
        <Modal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      }
    </Container>
  )
}

export default Featured
