import React from 'react'
import NavBarSection from './NavBarSection'
import CartWidget from './CartWidget'
import logo from "../assets/img/logo.webp"

const NavBar = () => {
  return (
    <nav className='flex flex-row items-center place-content-evenly bg-[#e5f1fd]'>
        <div className='w-48'>
            <img src={logo} alt="Brand Logo" />
        </div>
        <ul className='flex flex-row gap-4'>
            <NavBarSection sectionName="Comidas" url="#" />
            <NavBarSection sectionName="Bebidas" url="#" />
            <NavBarSection sectionName="Supermercados" url="#" />
            <NavBarSection sectionName="Farmacias" url="#" />
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar