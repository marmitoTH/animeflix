import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import loadCircle from '../../assets/loading.png'

function Loading({ loading }) {
  const [disabled, setDisabled] = useState(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timerId = 0

    if (!loading) {
      setVisible(false)
      timerId = setTimeout(() => {
        setDisabled(true)
      }, 400)
    } else {
      setVisible(true)
      setDisabled(false)
    }

    return () => clearTimeout(timerId)
  }, [loading])

  return (
    <Container
      disabled={disabled}
      visible={visible}
    >
      <img
        alt='loading'
        src={loadCircle}
      />
    </Container>
  )
}

export default Loading
