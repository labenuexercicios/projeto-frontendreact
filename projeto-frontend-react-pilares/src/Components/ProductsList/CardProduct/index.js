import React from 'react';
export function CardProduct( {product}) {

return(

<div>
            <img src={product.img} alt="termo 1" />           
 <h2>{product.name}</h2>

<p><strong>Preco: </strong>{product.price}</p>
<p>{product.description}
</p><p>
<strong>Cor: </strong>{product.color}</p>

<p><strong>Tamanhos em STOCK: </strong></p>
<div>
    <p>
<span><strong>PP: {product.sizeInStock.pp}</strong></span>
  <span><strong>P: {product.sizeInStock.p}</strong></span>
  <span><strong>M: {product.sizeInStock.m}</strong></span>
  <span><strong>PP: {product.sizeInStock.g}</strong></span>
  <span><strong>P: {product.sizeInStock.gg}</strong></span>
  <span><strong>M: {product.sizeInStock.m}</strong></span>
</p>
</div>
</div>
)}