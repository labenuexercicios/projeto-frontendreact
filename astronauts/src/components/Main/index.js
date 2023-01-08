import React from "react";
import { MainContainer } from "./styled";
import { ProductCard } from "../ProductCard";

export function Main({ products, name, order, type, minPrice, maxPrice, addProduct }) {


  return (
    <MainContainer>
      {products
        //filter by search input
        .filter((product) => {
          return product.name.toLowerCase().includes(name.toLowerCase());
        })
        // filter by type select
        .filter((product) => {
          return type ? product.type.includes(type) : product;
        })
        // filter by min price
        .filter((product)=>{
          return product.price >= minPrice
        })
         // filter by max price
         .filter((product)=>{
          return product.price <= maxPrice
        })
        //order by price
        .sort((currentProduct, nextProduct)=>{
          if(order==="asc"){
            return currentProduct.price - nextProduct.price
          }else if(order==="desc"){
            return nextProduct.price-currentProduct.price
          }
        })
        .map((product) => {
          return (
            <ProductCard
              key={product.key}
              product={product}
              addProduct={addProduct}
            />
          );
        })}
    </MainContainer>
  );
}
