import { createContext, useState } from "react";
export const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
  // produtos
  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)

  // estados de filtro
  const [filterName, setFilterName] = useState('')
  const [filterPrice, setFilterPrice] = useState([0, 0]) // min e max
  const [filterSector, setFilterSector] = useState('')
  const [typeSort, setTypeSort] = useState("*")

  const [cart, setCart] = useState([])
  const [viewCart, setViewCart] = useState(false)
  const [itemsCart, setItemsCart] = useState(0)
  const [totalCart, setTotalCart] = useState(0)

  const context = {
    cart,
    setCart,
    filterName,
    setFilterName,
    filterPrice,
    setFilterPrice,
    filterSector,
    setFilterSector,
    itemsCart,
    setItemsCart,
    products,
    setProducts,
    totalCart,
    setTotalCart,
    totalProducts,
    setTotalProducts,
    typeSort,
    setTypeSort,
    viewCart,
    setViewCart
  }
  
  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  )
}