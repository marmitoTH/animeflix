import React from 'react'
import { Button } from './styles'
import InfoIcon from '@material-ui/icons/Info';

function Information({ onClick = () => { } }) {
  return (
    <Button
      type='button'
      onClick={onClick}
    >
      <InfoIcon
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
          marginRight: '.5vw'
        }}
      />
      <strong>More Information</strong>
    </Button>
  )
}

export default Information
