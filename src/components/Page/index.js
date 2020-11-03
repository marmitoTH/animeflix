import React, { Fragment, useEffect, useState } from 'react'
import { Container } from './styles'

function Page({ render, children }) {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!render) {
      setVisible(false)
      setTimeout(() => {
        setEnabled(false)
      }, 300);
    } else {
      setVisible(true)
      setEnabled(true)
    }
  }, [render])

  return (
    <Fragment>
      {enabled &&
        <Container visible={visible}>
          {children}
        </Container>
      }
    </Fragment>
  )
}

export default Page
