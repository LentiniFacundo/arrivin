import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='max-w-sm my-10 border-2 border-[#fe2f83] rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300'>
      <img className='w-full h-48 object-cover' src={product.image} alt={product.name} />
      <div className="p-6">
            <h2 className="text-2xl font-extrabold mb-2 text-pink-500">{product.name}</h2>
            <p className="text-gray-800 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                <Link to={`/product/details/${product.id}`}>
                  <div className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"><p>Comprar Ahora</p></div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Item