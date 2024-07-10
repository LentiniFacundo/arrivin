import React from 'react'
import logo from '/img/logo.webp'
import NavBarSection from './NavBarSection'
import CartWidget from '../CartWidget/CartWidget'
import burguerSectionImg from '/img/sections/hamburguesas-section.webp'
import alcoholicDrinksImg from '/img/sections/alcoholic-drinks-section.webp'
import pizzasSectionImg from '/img/sections/pizzas-section.webp'
import sushiSectionImg from '/img/sections/sushi-section.webp'
import tacosSectionImg from '/img/sections/tacos-section.webp'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex flex-row items-center place-content-evenly bg-white'>
        <div className='w-48'>
            <Link to="/">
              <img src={logo} alt="Brand Logo" />
              <h1 className='font-quantic text-center font-bold text-[#fe2f83] text-6xl'>Arrivin'</h1>
            </Link>
        </div>
        <ul className='flex flex-row gap-4'>
            <NavBarSection sectionName="Hamburguesas" url="/category/burgers" img={burguerSectionImg} />
            <NavBarSection sectionName="Pizzas" url="/category/pizzas" img={pizzasSectionImg}/>
            <NavBarSection sectionName="Sushi" url="/category/sushi" img={sushiSectionImg}/>
            <NavBarSection sectionName="Tacos" url="/category/tacos" img={tacosSectionImg}/>
            <NavBarSection sectionName="Bebidas Alcoholicas" url="/category/drinks" img={alcoholicDrinksImg} />
        </ul>
        <CartWidget size="2rem" color="#fe2f83" />
    </nav>
  )
}

export default NavBar