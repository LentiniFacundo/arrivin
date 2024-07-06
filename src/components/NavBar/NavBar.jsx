import React from 'react'
import logo from '../../assets/img/logo.webp'
import NavBarSection from './NavBarSection'
import CartWidget from '../CartWidget/CartWidget'
import burguerSectionImg from '../../assets/img/sections/hamburguesas-section.webp'
import alcoholicDrinksImg from '../../assets/img/sections/alcoholic-drinks-section.webp'
import pizzasSectionImg from '../../assets/img/sections/pizzas-section.webp'
import sushiSectionImg from '../../assets/img/sections/sushi-section.webp'
import tacosSectionImg from '../../assets/img/sections/tacos-section.webp'

const NavBar = () => {
  return (
    <nav className='flex flex-row items-center place-content-evenly bg-white'>
        <div className='w-48'>
            <img src={logo} alt="Brand Logo" />
            <h1 className='font-quantic text-center font-bold text-[#fe2f83] text-6xl'>Arrivin'</h1>
        </div>
        <ul className='flex flex-row gap-4'>
            <NavBarSection sectionName="Hamburguesas" url="#" img={burguerSectionImg} />
            <NavBarSection sectionName="Pizzas" url="#" img={pizzasSectionImg}/>
            <NavBarSection sectionName="Sushi" url="#" img={sushiSectionImg}/>
            <NavBarSection sectionName="Tacos" url="#" img={tacosSectionImg}/>
            <NavBarSection sectionName="Bebidas Alcoholicas" url="#" img={alcoholicDrinksImg} />
        </ul>
        <CartWidget size="2rem" color="#fe2f83" />
    </nav>
  )
}

export default NavBar