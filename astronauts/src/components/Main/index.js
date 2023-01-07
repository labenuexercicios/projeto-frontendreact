import React, { useState } from "react";
import { MainContainer, CartContainer } from "./styled";
import { ProductCard } from "../ProductCard";
import { Cart } from "../Cart/index";
import product from "../../data";

export function Main({ products, name, order, type, minPrice, maxPrice }) {

  //Hook that stores the array of products that were inserted in the cart.
  const [cartProducts, setCartProducts] = useState([]);

  // Function that removes itens from the shopping cart.
  const remove = (product) => {
    const cartFiltered = cartProducts.filter((item) => item !== product);
    setCartProducts(cartFiltered);
  };

  //Receives a product and change the quantity
  const changeQty = (findProduct, operation) => {
    const newShoppingCart = cartProducts.map((item) => {
      if ((item === findProduct) & (operation === "sum")) {
        return { ...item, quantity: item.quantity + 1}
      }
      if (
        (item === findProduct) &
        (operation === "dec") &
        (item.quantity > 1)
      ) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartProducts(newShoppingCart);
  };

  //Function that adds items to the cart on click.
  const addProduct = (product) => {
    const findProduct = cartProducts.find((item) => item.key === product.key);
    // if product is already in the shopping cart.
    if (findProduct) {
      changeQty(findProduct, "sum");
    } else {
      //If product is not in the shopping cart.
      const productsAdded = [...cartProducts, { ...product, quantity: 1}];
      setCartProducts(productsAdded);
    }
  };

    const totalCart = cartProducts.reduce((total, current)=>{
      return total+(current.price*current.quantity)
    },0)

  return (
    <MainContainer>
      <CartContainer>
        <h2>Carrinho</h2>
        {cartProducts.map((item) => {
          return (
            <Cart
              key={item.key}
              item={item}
              changeQty={changeQty}
              remove={remove}
              total={item.price*item.quantity}
            />
          );
        })
}
        <h3>Total do carrinho: {totalCart}</h3>       
      </CartContainer>

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
