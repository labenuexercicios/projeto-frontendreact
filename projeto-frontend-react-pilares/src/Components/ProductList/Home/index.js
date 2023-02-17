import React from 'react'

import {Fragments, useState, Components} from 'react'

import { HomeCtn1, Homecard, CircleDiv , CircleImg, TitleCategory} from './styled.js'




export function Home(){
const img1 = "https://i.ebayimg.com/images/g/jYwAAOSwVFpfcpOo/s-l400.jpg"
    return(


    <Homecard>
        <TitleCategory>TOYS e LEGOS</TitleCategory>

<HomeCtn1>
    <h2>LEGO</h2>

<CircleDiv>
<CircleImg src={img1} alt="img1" />



</CircleDiv>
</HomeCtn1>
<HomeCtn1>
    <h2>LEGO</h2>

<CircleDiv>
<CircleImg src={img1} alt="img1" />

</CircleDiv>
</HomeCtn1>

<HomeCtn1>
    <h2>LEGO</h2>

<CircleDiv>
<CircleImg src={img1} alt="img1" />

</CircleDiv>

    <h2>LEGO</h2>

<CircleDiv>
<CircleImg src={img1} alt="img1" />



</CircleDiv>

    <h2>LEGO</h2>

<CircleDiv>
<CircleImg src={img1} alt="img1" />

</CircleDiv>

    <h2>LEGO</h2>

<CircleDiv>
<CircleImg src={img1} alt="img1" />

</CircleDiv>
</HomeCtn1>
</Homecard>




)
}