import React from 'react'

import {Fragments, useState, Components} from 'react'

import { HomeCtn1, Homecard, CircleDiv , CircleImg, TitleCategory} from './styled.js'



export function Home({product},{setProduct}){
const img1 = "https://i.ebayimg.com/images/g/jYwAAOSwVFpfcpOo/s-l400.jpg"
console.log(product)
const productFinalPrice = (a, b)=>{
    return Number(a) * Number(b)
}
return(

<div>
<CircleDiv />
<CircleImg src={product.img} alt="img1" />
    <ul>
        <li>{product.name}</li>
        <li>{product.priceBase}</li>
        <li>{productFinalPrice(product.priceBase, product.discountBase)}</li>
    </ul>
</div>



)
}