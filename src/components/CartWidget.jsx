import React from 'react'
import { TbShoppingCartHeart } from 'react-icons/tb'

const CartWidget = () => {
  return (
    <div className='flex flex-row w-24'>
        <TbShoppingCartHeart />
        <p>1</p>
    </div>
  )
}

export default CartWidget