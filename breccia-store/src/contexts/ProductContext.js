import { createContext, useState, useEffect } from "react";
import productList from "../products.json";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);

  // useEffect(() => {
  //   setProducts(productList);
  // });

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
