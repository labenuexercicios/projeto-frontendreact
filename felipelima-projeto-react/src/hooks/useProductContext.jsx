import { createContext, useEffect, useState } from "react";

// PRODUTOS
import { db } from "../db/db";

// Varivel de crição do contexto
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading] = useState(false)
  const [searchProducts, setSearchProducts] = useState('')
  const [searchCategory, setSearchCategory] = useState('')
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [order, setOrder] = useState ("order")

  /* USEEFFECT QUE FAZ RENDERIÇÃO DO MEU ARRAY DE PRODUTOS */
  useEffect(() => {
    setProducts(db);
  }, []);

  const handleName = (product) => {
    return product.name.toLowerCase().includes(searchProducts.toLowerCase())
  };

  const filterCategory = (product) => {
    if (searchCategory === 'Foguetes') {
      return product.category === searchCategory;
    } else if (searchCategory === 'Astronaltas') {
      return product.category === searchCategory;
    } else if (searchCategory === 'Planetas') {
      return product.category === searchCategory;
    } else if (searchCategory === 'Robôs') {
      return product.category === searchCategory;
    } else if (searchCategory === 'Monstros') {
      return product.category === searchCategory;
    } else if (searchCategory === 'Carros') {
      return product.category === searchCategory;
    } else {
      return true; 
    }
  };
  const filterItems = () => {
    let filteredProducts = [...products]; 
  
    if (order === "asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
  
    return filteredProducts;
  };
  
  const filteredItems = filterItems();
  const filteredProducts = filteredItems === "order" ? products : filteredItems;

  return (
    <ProductContext.Provider
      value={{ filteredProducts, products, setProducts, setSearchProducts, handleName, loading, searchCategory, setSearchCategory, filterCategory, priceMax, setPriceMax, priceMin, setPriceMin, order, setOrder, filterItems, filteredItems}}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;