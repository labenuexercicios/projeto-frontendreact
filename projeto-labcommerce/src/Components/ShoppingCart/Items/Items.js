import React from "react";
import { useEffect,useState } from "react";


function Items({cartProducts, removeFromCart}) {
    return (
        <div>
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <b>{product.name}</b>- US${product.totalPrice} - Quantity: {product.quantity}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Items;