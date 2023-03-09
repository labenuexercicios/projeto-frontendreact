import React, {useState} from 'react';
import styled from 'styled-components';
import {CartItemCtn, CartItemImg} from './styled';


export function CartClient({product}){
    return(
        <CartItemCtn>
            <CartItemImg src={product.img} alt="img produto " />
<h2></h2>
       </CartItemCtn>
    )
}

