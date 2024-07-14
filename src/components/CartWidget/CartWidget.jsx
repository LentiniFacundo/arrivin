import React from 'react'
import { TbShoppingCartHeart } from 'react-icons/tb'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = ({size, color}) => {
  const {totalQuantity, cart} = useContext(CartContext)
  return (
    <Link to={"/cart"}>
      <div className='flex flex-row w-24'>
          <TbShoppingCartHeart title='Carrito' size={size} color={color} />
          <p>{cart.length > 0 && totalQuantity()}</p>
      </div>
    </Link>
  )
}

export default CartWidget