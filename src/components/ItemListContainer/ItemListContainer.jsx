import React from 'react'
import { useState, useEffect } from 'react'
import useLoader from '../../hooks/useLoader'
import { getProducts } from '../../utils/fetchAPI.js'
import ItemList from './ItemList.jsx'
import Loader from '../Loader/Loader.jsx'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {isLoading, showLoading, hideLoading} = useLoader()
  const {categoryName} = useParams()

  useEffect(() => {
    showLoading()
    
    getProducts()
    .then(products => {
      if(categoryName) {
        const filteredProducts = products.filter(product => product.category === categoryName)
        setProducts(filteredProducts)
      }else{
        setProducts(products)
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoading()
      }
      )
  }, [categoryName]);

  return (
    <div className='flex'>
        {isLoading ? <Loader /> : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer