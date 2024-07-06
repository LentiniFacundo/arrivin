import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div className='flex gap-3 w-[90%] justify-center items-center border-2 rounded-lg shadow-2xl overflow-hidden'>
        <div>
            <img src={product.image} alt={product.name} />
        </div>
        <div className='flex-col justify-start items-start'>
            <section>
                <h2 className='text-pink-500 text-6xl'>{product.name}</h2>
                <p>{product.description}</p>
            </section>
            <section>
                <ItemCount stock={product.stock} />
            </section>
        </div>
    </div>
  )
}

export default ItemDetail