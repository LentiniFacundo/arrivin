import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const totalQuantity = () => {
        const total = cart.reduce((total, product) => total + product.quantity, 0)
        return total
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const addProductToCart = (product) => {
        const condition = isInCart(product.id)
        if(condition) {
            const modifiedCart = cart.map(productInCart => {
                if(productInCart.id === product.id) {
                    return {...productInCart, quantity: productInCart.quantity + product.quantity}
                }else{
                    return productInCart
                }
            })
            setCart(modifiedCart)
        }else{
            setCart([...cart, product])
        }
    }

    const clearCart = () => setCart([])

    const deleteProductById = (id) => {
        const updatedCart = cart.filter(product => product.id !== id)
        setCart(updatedCart);
    }

    const finalPrice = () => {
        const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0)
        return total
    }

    return (
        <CartContext.Provider value={{addProductToCart, deleteProductById, cart, totalQuantity, clearCart, finalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}