import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./Cart/Cart"
import Checkout from "./Checkout/Checkout"
import { ToastContainer } from "react-toastify"
import Error404 from "./components/404/Error404"

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition: Zoom />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/product/details/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>

    </BrowserRouter>
  )
}

export default App
