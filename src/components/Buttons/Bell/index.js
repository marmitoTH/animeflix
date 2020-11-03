import React from 'react'
import { Button } from './styles'
import NotificationsIcon from '@material-ui/icons/Notifications';

function Gift() {
  return (
    <Button>
      <NotificationsIcon
        style={{
          fontSize: 'max(2rem, 1.25vw)'
        }}
      />
    </Button>
  )
}

export default Gift
