import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Container, Logo, Main, RightSide, MenuButton, MenuOptions, VerticalMenu, Buttons } from './styles'
import Search from '../SearchBar'
import GiftButton from '../Buttons/Gift'
import BellButton from '../Buttons/Bell'
import UserButton from '../Buttons/User'
import MenuIcon from '@material-ui/icons/Menu'

function Navbar() {
  const menuRef = useRef()
  const [showMenu, setShowMenu] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    window.addEventListener('mousedown', handleClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousedown', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  })

  function handleScroll() {
    if ((opacity === 0) && (window.scrollY > 10)) {
      setOpacity(1)
    } else if ((opacity === 1) && (window.scrollY < 10)) {
      setOpacity(0)
    }
  }

  function handleClick(event) {
    if (showMenu && !menuRef.current.contains(event.target)) {
      setShowMenu(false)
    }
  }

  function drawMenuOptions() {
    return (
      <>
        <Link to='/'>Home</Link>
        <Link to='/'>Series</Link>
        <Link to='/'>Movies</Link>
        <Link to='/'>Recently Added</Link>
        <Link to='/'>My List</Link>
      </>
    )
  }

  return (
    <Container opacity={opacity}>
      <Main>
        <div ref={menuRef}>
          <MenuButton onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon style={{ fontSize: 'max(2rem, 2vw)' }} />
          </MenuButton>
          <MenuOptions hide={!showMenu}>
            <section>
              <Link to='/'>Account</Link>
              <Link to='/'>Help Center</Link>
              <Link to='/'>Sign out</Link>
            </section>
            <section>
              {drawMenuOptions()}
            </section>
          </MenuOptions>
        </div>
        <Logo
          to='/'
          title='Animeflix'
        >
          <img
            alt='animeflix-logo'
            src={logo}
          />
        </Logo>
        <VerticalMenu>
          {drawMenuOptions()}
        </VerticalMenu>
      </Main>
      <RightSide>
        <Search />
        <Buttons>
          <GiftButton />
          <BellButton />
          <UserButton />
        </Buttons>
      </RightSide>
    </Container>
  )
}

export default Navbar
