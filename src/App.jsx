import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/product/details/:id" element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
