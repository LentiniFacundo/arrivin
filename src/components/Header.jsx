import React from 'react'
import logo from '../assets/img/logo.webp'
import NavBarSection from './NavBarSection'
import CartWidget from './CartWidget'

const Header = () => {
  return (
    <header className='flex flex-row items-center place-content-evenly bg-[#e5f1fd]'>
        <img src={logo} className='w-48' alt="Logo" />
        <nav>
          <ul className='flex flex row gap-2'>
            <NavBarSection sectionName="Comidas" url="#" />
            <NavBarSection sectionName="Bebidas" url="#" />
            <NavBarSection sectionName="Supermercados" url="#" />
            <NavBarSection sectionName="Farmacias" url="#" />
          </ul>
        </nav>
          <CartWidget />
    </header>
  )
}

export default Header