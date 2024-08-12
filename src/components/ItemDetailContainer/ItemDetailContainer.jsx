import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useLoader from '../../hooks/useLoader'
import ItemDetail from './ItemDetail'
import Loader from '../Loader/Loader'
import { getProductById } from '../../utils/fetchFireStore.js'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {isLoading, showLoading, hideLoading} = useLoader()
    const {id} = useParams()

    useEffect(() => {
        showLoading()
        getProductById(id)
          .then(product => setProduct(product))
          .catch(error => console.log(error))
          .finally(() => hideLoading())
    }, [])
  return (
    <div className='flex justify-center items-center mt-6'>
    {isLoading ? <Loader /> : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer