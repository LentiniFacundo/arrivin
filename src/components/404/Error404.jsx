import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Oops! La pagina que buscas no se encuentra disponible</h1>
        <Link to={"/"}>
          <div className='m-6 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50'>
            <p className='text-center'>Descubrir productos</p>
          </div>
        </Link>
    </div>
  )
}

export default Error404