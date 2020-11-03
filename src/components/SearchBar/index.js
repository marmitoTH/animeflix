import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Button, Input } from './styles'
import SearchIcon from '@material-ui/icons/Search'

function SearchBar() {
  const containerRef = useRef()
  const inputRef = useRef()
  const history = useHistory()
  const [show, setShow] = useState(false)

  useEffect(() => {
    function handleClick(event) {
      if (!inputRef.current.value &&
        !containerRef.current.contains(event.target)) {
        disableSearch()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  })

  useEffect(() => {
    if (show) {
      inputRef.current.focus()
    }
  }, [show])

  history.listen((location, _) => {
    const { pathname } = location
    if ((inputRef.current !== document.activeElement)
      && !pathname.match(/\/search\/.*/g)) {
      disableSearch()
    }
  })

  function enableSearch() {
    if (!show) {
      setShow(true)
    }
  }

  function disableSearch() {
    if (show) {
      setShow(false)
      inputRef.current.value = ''
    }
  }

  function handleSearch(event) {
    const query = event.target.value
    history.replace(query ? `/search/${query}` : '/')
  }

  return (
    <Container
      ref={containerRef}
      show={show}
    >
      <Button
        type='button'
        disabled={show}
        onClick={enableSearch}
      >
        <SearchIcon
          style={{ fontSize: 'clamp(2rem, 1.5vw, 3rem)' }}
        />
      </Button>
      <Input
        ref={inputRef}
        show={show}
        disabled={!show}
        onChange={handleSearch}
        placeholder='Search for media'
      />
    </Container>
  )
}

export default SearchBar
