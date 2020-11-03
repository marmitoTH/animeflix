import React from 'react'
import { Container, Button } from './styles'
import userIcon from '../../../assets/user-icon.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

function User() {
  return (
    <Container>
      <Button>
        <img src={userIcon} alt='user-icon' />
      </Button>
      <ArrowDropDownIcon
        style={{
          marginLeft: '.25vw',
          fontSize: 'max(2rem, 1.3vw)'
        }}
      />
    </Container>
  )
}

export default User
