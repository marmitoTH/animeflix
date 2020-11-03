import React from 'react'
import { Button } from './styles'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Watch({ videoId = '' }) {
  return (
    <Button
      title='Watch Trailer'
      to={`/watch/${videoId}`}
    >
      <div>
        <PlayArrowIcon
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 3rem)',
            marginRight: '.5vw'
          }}
        />
        <strong>Watch Trailer</strong>
      </div>
    </Button>
  )
}

export default Watch
