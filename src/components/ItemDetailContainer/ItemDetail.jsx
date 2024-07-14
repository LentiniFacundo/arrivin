import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({product}) => {

  const {addProductToCart, cart} = useContext(CartContext)
  
  const addToCart = (counter, cb) => {
    const productToCart = {
      ...product,
      quantity: counter
    }
    cb()
    addProductToCart(productToCart)
  }

  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-3 w-[90%] justify-center items-start border-2 rounded-lg shadow-2xl overflow-hidden'>
        <div className='col-start-1 col-end-2 row-start-1 row-end-3 w-[600px]'>
            <img className='' src={product.image} alt={product.name} />
        </div>
        <div className='col-start-2 col-end-3 row-start-1 row-end-2 flex-col justify-center items-center mt-4'>
             <h2 className='text-[#fe2f83] text-6xl text font-bold text-center'>{product.name}</h2>
             <p className='text-gray-800 mb-4 mt-4 text-xl'>{product.description}</p>
             <h3 className='text-4xl font-bold text-gray-800'>${product.price}</h3>
        </div>
        <div className='col-start-2 col-end-3 row-start-2 row-end-3'>
            <ItemCount stock={product.stock} addToCart={addToCart} />
        </div>
    </div>
  )
}

export default ItemDetail