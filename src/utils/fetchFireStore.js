import db from '../db/db.js'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'

const getProducts = () => {
    const collectionRef = collection(db, "products")
    return getDocs(collectionRef)
      .then(res => {
        const data = res.docs.map(productDb => {
          return {id: productDb.id, ...productDb.data()}
        })
        return data
      })
      .catch(error => console.log(error))
  }

const getProductsByCategory = (categoryName) => {
    const collectionRef = collection(db, "products")
    const q = query(collectionRef, where("category", "==", categoryName))
    return getDocs(q)
      .then(res => {
        const data = res.docs.map(productDb => {
          return {id: productDb.id, ...productDb.data()}
        })
        return data
      })
      .catch(error => console.log(error))
  }

const getProductById = (id) => {
    const docRef = doc(db, "products", id)
    return getDoc(docRef)
        .then(res => {
            const data = {id: res.id, ...res.data()}
            return data
        })
        .catch(error => console.log(error))
}

export {getProducts, getProductsByCategory, getProductById}