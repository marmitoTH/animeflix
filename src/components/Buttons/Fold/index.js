import React, { useState } from 'react'
import { Container, Button, Line, Icon } from './styles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

function Fold({ initialValue = false, onClick = () => { } }) {
  const [toggled, setToggled] = useState(initialValue)

  function handleClick(event) {
    onClick(event)
    setToggled(!toggled)
  }

  return (
    <Container>
      <Line />
      <Button
        type='button'
        onClick={handleClick}
      >
        <Icon toggled={toggled}>
          <KeyboardArrowDownIcon
            style={{
              fontSize: 'max(2rem, 1.8vw)'
            }}
          />
        </Icon>
      </Button>
    </Container>
  )
}

export default Fold
