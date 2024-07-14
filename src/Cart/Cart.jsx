import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, finalPrice, clearCart, deleteProductById} = useContext(CartContext)
  return (
    <section className='w-full flex justify-center items-center mt-4'>
            {cart.length 
                ? <div className='flex flex-col w-[75%] border-2 rounded-lg shadow-2xl gap-2 p-2'>
                        {cart.map(product => (
                        <article key={product.id} className='flex border-2 gap-2'>
                            <div className='w-16'>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className='w-full'>
                                <h2 className='font-semibold text-gray-800 text-lg'>{product.name} X ${product.price.toLocaleString()}</h2>
                                <button className='text-sm underline text-sky-500 cursor-pointer' onClick={() => deleteProductById(product.id)}>Eliminar</button>
                            </div>
                            <div className='w-24 text-center'>
                                <p>Cantidad</p>
                                <p>{product.quantity}</p>
                            </div>
                            <div className='w-24 text-center'>
                                <p>Sub-total:</p>
                                <p>${(product.quantity * product.price).toLocaleString()}</p>
                            </div>
                        </article>
                    ))}
                        <section className='flex m-2'>
                            <div className='w-full'>
                                <button onClick={clearCart} className='bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50'><p>Vaciar carrito</p></button>
                            </div>
                            <div className='w-full'>
                                <h2 className='text-lg text-gray-800 font-semibold text-right m-2'>Precio Final: ${finalPrice().toLocaleString()}</h2>
                            </div>
                        </section>
                    </div>
                : <div className='flex flex-col items-center'>
                        <h1 className='text-4xl font-bold'>Tu carrito esta vacio</h1>
                        <Link to={"/"}>
                            <div className='m-6 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50'>
                                <p className='text-center'>Descubrir productos</p>
                                </div>
                        </Link>
                        </div>}
    </section>
  )
}

export default Cart