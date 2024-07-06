import React from 'react'
import { TbShoppingCartHeart } from 'react-icons/tb'

const CartWidget = ({size, color}) => {
  return (
    <div className='flex flex-row w-24'>
        <TbShoppingCartHeart size={size} color={color} />
        <p>1</p>
    </div>
  )
}

export default CartWidget