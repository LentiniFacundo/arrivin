import React from 'react'
import { useState } from 'react'
import CheckoutForm from './CheckoutForm.jsx'
import db from '../db/db.js'
import { collection, addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import useLoader from '../hooks/useLoader.jsx'
import Loader from '../components/Loader/Loader.jsx'
import validateForm from '../utils/validateForm.js'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const {cart, clearCart, finalPrice} = useContext(CartContext)
    const {isLoading, showLoading, hideLoading} = useLoader()
    const [idOrders, setIdOrders] = useState(null)
    const [dataForm, setDataform] = useState({
        name: "",
        lastName: "",
        email: "",
        email2: "",
        phone: "",
        address: ""
    })

    const uploadOrder = (data) => {
        const collectionRef = collection(db, "orders")
        showLoading()
        addDoc(collectionRef, data)
            .then(res => {
                setIdOrders(res.id)
            })
            .catch(error => console.log(error))
            .finally(() => {
                hideLoading()
                clearCart()
            })
    }

    const handleForm = {
        saveData: (event) => {
            setDataform({...dataForm, [event.target.name]: event.target.value})
        },
        saveOrder: async (event) => {
            event.preventDefault()
            const data = {
                buyer: {...dataForm},
                products: [...cart],
                total: finalPrice()
            }

            const res = await validateForm(dataForm)
            res.success ? uploadOrder(data) : toast.warning(res.message)
        }
    }

  return (
    <div>
        {isLoading
            ? <Loader />
            : idOrders
                ? (<div className='flex flex-col justify-center items-center'>
                    <h3>Compra exitosa!</h3>
                    <p>Guarde el id de su orden</p>
                    <p>ID: {idOrders}</p>
                </div>)
                : cart.length
                    ? <CheckoutForm dataForm={dataForm} saveData={handleForm.saveData} saveOrder={handleForm.saveOrder} />
                    : (<div className='flex flex-col justify-center items-center'>
                        <h1>No hay productos en el carrito</h1>
                        <Link to={"/"}>
                            <div className='m-6 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50'>
                                <p className='text-center'>Descubrir productos</p>
                            </div>
                        </Link>
                    </div>)
        }
    </div>
  )
}

export default Checkout