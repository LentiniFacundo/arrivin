import React from 'react'

const Count = ({counter, countUp, countDown, clearCounter, stock, addToCart}) => {
  return (
    <div className='text-gray-800 mb-4 mt-4 text-xl'>
        <p>Stock disponible: {stock}</p>
        <p>Cantidad: {counter}</p>
      {stock ?
        <section className='grid grid-rows-2 gap-2 w-full mt-3'>
            <div className='w-52 row-start-1 row-end-2 flex gap-2 justify-around'>
                <button className='w-14 bg-pink-500 text-center text-white px-4 py-2 text-2xl font-bold rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50' onClick={countDown}>-</button>
                <button className='w-14 bg-pink-500 text-center text-white px-4 py-2 text-2xl font-bold rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50' onClick={clearCounter}>⟳</button>
                <button className='w-14 bg-pink-500 text-center text-white px-4 py-2 text-2xl font-bold rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50' onClick={countUp}>+</button>
            </div>
            <button className='w-52 row-start-2 row-end-3 bg-pink-500 text-center text-white px-4 py-2 text-xl font-bold rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50' onClick={() => addToCart(counter, clearCounter)}>Agregar al carrito</button>
        </section>
        : <h3>Producto no disponible</h3> }
    </div>
  )
}

export default Count