import React from "react";
import { ContainerCart } from "./CartStyle";

export const Cart = () => {
  return (
    <ContainerCart>
        <h2>Cart</h2>
        <p>
          Nome do Produto <button>remover</button>
        </p>
        <p>Valor total</p>
        </ContainerCart>
      
    
  );
};
