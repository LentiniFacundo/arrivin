import React from 'react'

const ItemListContainer = ({text}) => {
  return (
    <div className='bg-cyan-200 text-center'>
        <h1 className='text-white text-4xl'>{text}</h1>
    </div>
  )
}

export default ItemListContainer