import React from 'react'
import { Button } from './styles'
import AddIcon from '@material-ui/icons/Add'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

function Add({ type }) {
  function getIcon() {
    switch (type) {
      case 'add':
        return (
          <AddIcon
            style={{
              fontSize: 'clamp(1.5rem, 2vw, 3rem)'
            }}
          />
        )
      case 'like':
        return (
          <ThumbUpAltIcon
            style={{
              fontSize: 'clamp(1.5rem, 2vw, 3rem)'
            }}
          />
        )
      case 'dislike':
        return (
          <ThumbDownIcon
            style={{
              fontSize: 'clamp(1.5rem, 2vw, 3rem)'
            }}
          />
        )
      default:
        break
    }
  }

  return (
    <Button
      type='button'
    >
      {getIcon()}
    </Button>
  )
}

export default Add
