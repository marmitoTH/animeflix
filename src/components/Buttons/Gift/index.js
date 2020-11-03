import React from 'react'
import { Button } from './styles'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'

function Gift() {
  return (
    <Button>
      <CardGiftcardIcon
        style={{
          fontSize: 'max(2rem, 1.25vw)'
        }}
      />
    </Button>
  )
}

export default Gift
