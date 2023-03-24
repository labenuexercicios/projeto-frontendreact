import React, { useState } from "react";
import { CarContainer } from "./styled"
import IconCar from "../img/iconcar.png"
import styled from "styled-components";
import { ProductCard } from "../ListaProdutos/ProductCard/ProductCard";

function Carrinho ({name, value, compra}) {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
      };

    const Text = styled.p`
    width: 100%;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    `
    return (
        <CarContainer>
            <div class="carrin">
                <h2>Carrinho</h2>
                <img src={IconCar} height={30}/>  
            </div>
            <div>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
            </div>
        </CarContainer>
      )  
}
export default Carrinho