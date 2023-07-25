import React from 'react';
import styled from 'styled-components'


export const ProductCardContainer = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    
`;

export const ProductImage = styled.img`
    width: 100%;
    max-height: 200px;
    object-fit: cover;

`;

export const ProductName = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;

`;

export const ProductPrice = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export const ProductDescription = styled.h3`
     font-size: 16px;
     font-weight: bold;

`;

export const AddToCartButton = styled.button`
     background-color: #333;
     color: #fff;
     border: none;
     padding: 10px 20px;
     border-radius:4px;
     
     
:hover{
    cursor: pointer;
    color:yellow;
    background-color:#2C5F2D;
} 
`;