import { createContext, useEffect, useState } from "react";

//produtos
import data from "../data/data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    setProducts(data);
  }, []);

  // FUNÇÃO QUE BUSCA PRODUTO
  const searchFilterName = (product) => {
    return product.name.toLowerCase().includes(name.toLowerCase());
  };

  // FUNÇÃO DE CATEGORIA

  const searchCategory = (product) => {
    if (category === "Viagem-Solo") {
      return product.category.includes(category);
    } else if (category === "Viagem-Familia") {
      return product.category.includes(category);
    } else {
      return product;
    }
  };

  //FUNÇÃO PARA BUSCAR POR PREÇO

  const searchPrice = (product) => {
    if (preco === 0) {
      return product;
    }

    return preco === "0" || (preco ? product.price <= preco : true);
  };


  

  return (
    <ProductContext.Provider
      value={{
        products,
        searchFilterName,
        name,
        setName,
        category,
        preco,
        setPreco,
        setCategory,
        searchCategory,
        searchPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;