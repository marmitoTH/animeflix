import React, { useRef, useEffect, useState } from 'react'
import { Container, Menu, Button } from './styles'

function Dropdown({ elements, onChange = () => { } }) {
  const buttonRef = useRef()
  const menuRef = useRef()
  const [selected, setSelected] = useState(0)
  const [fold, setFold] = useState(true)

  useEffect(() => {
    function handleClick(event) {
      if (!fold && !buttonRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)) {
        setFold(true)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })

  function toggleFold() {
    setFold(!fold)
  }

  function selectElement(id) {
    setFold(true)
    setSelected(id)
    onChange(id)
  }

  return (
    <Container>
      <Button
        ref={buttonRef}
        type='button'
        onClick={toggleFold}
      >
        {elements[selected]}
      </Button>
      <Menu ref={menuRef} fold={fold}>
        {elements.map((element, key) => (
          <button
            key={key}
            type='button'
            onClick={() => selectElement(key)}
          >
            {element}
          </button>
        ))}
      </Menu>
    </Container>
  )
}

export default Dropdown
