import { createContext, useEffect, useState } from "react";

// PRODUTOS
import  db  from "../db/db";

// Varivel de crição do contexto
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading] = useState(false);
  const [name , setName] = useState("")
  const [category, setCategory] = useState("")
  const [preco, setPreco] = useState("")


  useEffect(() => {
    setProducts(db);
  }, []);

  //DUNÇÃO FILTER

const searchFilterName = (product) => {
  return product.name.toLowerCase().includes(name.toLowerCase())
}

// FUNÇÃO DE CATEGORIA

const searchCategory = (product) => {
  if(category === "Bonecos"){
    return product.category.includes(category)
  }else if(category === "Naves"){
    return product.category.includes(category)
  }else if(category === "Capacete"){
    return product.category.includes(category)
  } else{
    return product
  }
}

//FUNÇÃO PARA BUSCAR POR PREÇO

const searchPrice = (product) => {

  if(preco === 0){
    return product
  } 

  return(
    preco === "0" || (preco ? product.price <= (preco): true) 
  )

}


  // console.log(products);
  return (
    <ProductContext.Provider value={{ products, loading , searchFilterName , name , setName, category, setCategory ,preco, setPreco, searchCategory, searchPrice}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider