import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useLoader from '../../hooks/useLoader'
import { getProducts } from '../../utils/fetchAPI'
import ItemDetail from './ItemDetail'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {isLoading, showLoading, hideLoading} = useLoader()
    const {id} = useParams()

    useEffect(() => {
        showLoading()
        getProducts()
            .then(products => {
               const productDetail = products.find((product => product.id === parseInt(id)))
               setProduct(productDetail)
            })
            .catch(error => console.log(error))
            .finally(() => hideLoading())
    }, [id])
  return (
    <div className='flex justify-center items-center mt-6'>
    {isLoading ? <Loader /> : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer