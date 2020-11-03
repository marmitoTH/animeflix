import React from 'react'
import { Button } from './styles'
import CloseIcon from '@material-ui/icons/Close';

function Close({ onClick = () => { } }) {
  return (
    <Button
      type='button'
      onClick={onClick}
    >
      <CloseIcon style={{
        fontSize: 'clamp(1.5rem, 2vw, 2.5rem)'
      }} />
    </Button>
  )
}

export default Close
