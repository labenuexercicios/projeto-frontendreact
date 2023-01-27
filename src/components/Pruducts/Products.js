import React from "react";
import styled from "styled-components";
import { ProductsContainer } from "./styles"


function Products (props){
    const { img, name, local, value} = props

    return (
        <ProductsContainer>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{local}</p>
            <h2>{value}</h2>
            <button>Comprar</button>
           
        </ProductsContainer>
    )
}

export default Products;