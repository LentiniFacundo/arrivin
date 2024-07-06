import React from 'react'
import { useState, useEffect } from 'react'
import useLoader from '../../hooks/useLoader'
import { getProducts } from '../../utils/fetchAPI.js'
import ItemList from './ItemList.jsx'
import Loader from '../Loader.jsx'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {isLoading, showLoading, hideLoading} = useLoader()

  useEffect(() => {
    showLoading()
    
    getProducts()
    .then(products => setProducts(products))
    .catch(error => console.log(error))
    .finally(() => {
      hideLoading()
      }
      )
  }, []);

  return (
    <div className='flex'>
        {isLoading ? <Loader /> : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer