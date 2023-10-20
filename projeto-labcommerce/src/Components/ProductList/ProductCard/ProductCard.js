import { ProductContainer } from "./ProductCardStyle";
import { useState, useEffect } from "react";

function ProductCard(props) {
  const products = props.product;
  useEffect(() => {
  }, [props.cartProducts]);

  const addToCart = (products) => {
    const existingProduct = props.cartProducts.find((item) => item.id === products.id);
  
    if (existingProduct) {
      // If the product is already in the cart, increase its quantity and update the total price
      const updatedCart = props.cartProducts.map((item) => {
        if (item.id === products.id) {
          item.quantity += 1;
          item.totalPrice = item.value * item.quantity;
        }
        return item;
      });
  
      props.setCartProducts(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity = 1
      const updatedCart = [...props.cartProducts, { ...products, quantity: 1, totalPrice: products.value }];
      props.setCartProducts(updatedCart);
    }
  };

  return (
    <>
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <img alt="image" src={`https://picsum.photos/300/335?a=${product.id}`} />
          <p><b>Product:</b> {product.name}</p>
          <p><b>Price:</b> US${product.value}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </ProductContainer>
      ))}
    </>
  );
}

export default ProductCard;
