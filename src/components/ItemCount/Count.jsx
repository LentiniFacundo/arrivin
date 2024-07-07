import React from 'react'

const Count = ({counter, countUp, countDown, clearCounter, stock}) => {
  return (
    <div>
        <p>Stock disponible: {stock}</p>
        <p>Cantidad: {counter}</p>
      {stock ?
        <section className='grid grid-rows-2 gap-2 w-40'>
            <div className='w-full row-start-1 row-end-2 flex gap-2'>
                <button className='w-full bg-pink-500 text-center text-white px-4 py-2 text-2xl font-bold rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50' onClick={countUp}>+</button>
                <button className='w-full bg-pink-500 text-center text-white px-4 py-2 text-2xl font-bold rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50' onClick={countDown}>-</button>
            </div>
            <button className='row-start-2 row-end-3 bg-pink-500 text-center text-white px-4 py-2 text-xl font-bold rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50' onClick={clearCounter}>Reiniciar</button>
        </section>
        : <h3>Producto no disponible</h3> }
    </div>
  )
}

export default Count