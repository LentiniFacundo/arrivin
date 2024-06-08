import React from 'react'
import logo from '../assets/img/logo.webp'

const Header = () => {
  return (
    <header>
        <img src={logo} className='w-48' alt="Logo" />
    </header>
  )
}

export default Header