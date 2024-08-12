import React from 'react'
import { useState, useEffect } from 'react'
import useLoader from '../../hooks/useLoader'
import ItemList from './ItemList.jsx'
import Loader from '../Loader/Loader.jsx'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../utils/fetchFireStore.js'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {isLoading, showLoading, hideLoading} = useLoader()
  const {categoryName} = useParams()

  useEffect(() => {
    showLoading()
    if(categoryName) {
      getProductsByCategory(categoryName)
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => hideLoading())
    }else{
      getProducts()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => hideLoading())
    }
  }, [categoryName]);

  return (
    <div className='flex'>
        {isLoading ? <Loader /> : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer