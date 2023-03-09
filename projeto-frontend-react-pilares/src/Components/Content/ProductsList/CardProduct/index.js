import React from 'react';

import {CardContent, SizeBox} from './styled'
export function CardProduct( {product, size}) {

return(

<CardContent> <h2>{product.name}</h2>
            <img src={product.img} alt="termo 1" />           


<p><strong>Preco: </strong>{product.price}</p>

<p>
<strong>Cor: </strong>{product.color}</p>

<p><strong>Tamanhos em STOCK: </strong></p>

    <p>
  <SizeBox size={product.sizeInStock.pp}><strong>PP: {product.sizeInStock.pp}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.p}><strong>P: {product.sizeInStock.p}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.m}><strong>M: {product.sizeInStock.m}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.g}><strong>g: {product.sizeInStock.g}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.gg}><strong>gg: {product.sizeInStock.gg}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.xl}><strong>xl: {product.sizeInStock.xl}</strong></SizeBox>
</p>
</CardContent>

)}