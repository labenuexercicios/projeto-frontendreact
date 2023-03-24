import React, { useEffect, useState } from "react";
import { HomeContainer, HeadHome, HeadBlock, TextHeadHome, SelectOrder, CardDiv } from "./styled";
import { Product } from "../Product/Product";


export function Home({products, cart, setCart, amount, setAmount }){

    const [ordination, setOrdination]=useState('asc')
    const [orderedProducts, setOrderedProducts]=useState([]);

    useEffect(() => {
        const sortedProducts = [...products].sort(compareProducts);
        setOrderedProducts(sortedProducts);
    }, [ordination, products]);

    function compareProducts(a, b){
        if(ordination === 'asc'){
            return a.value - b.value
        }else{
            return b.value - a.value
        }
    }

    function addToCart(product){
        const index = cart.findIndex((item) => item.id === product.id);
        if(index === -1){
            setCart([...cart, { ...product, quantity: 1}])
        }else{
            const updateCart = [...cart];
            updateCart[index].quantity++;
            setCart(updateCart);
        }
        setAmount(amount + product.value)
    }

    return(
        <HomeContainer>
            <HeadHome>
            <HeadBlock>
                <TextHeadHome>Quantidade de produtos: {products.length}</TextHeadHome>
            </HeadBlock>
            <HeadBlock>
                <TextHeadHome>Ordenação:</TextHeadHome>           
                <SelectOrder size={1} value={ordination} onChange={(e)=>setOrdination(e.target.value)}>
                    <option value='asc'>Crescente</option>
                    <option value='desc'>Decrescente</option>
                </SelectOrder>
            </HeadBlock>               
            </HeadHome>
            <CardDiv>
                {orderedProducts.map((product) => (
                    <Product 
                    key={product.id} 
                    product={product}
                    handleAddToCart={addToCart}
                    />
                ))}  
            </CardDiv>         
        </HomeContainer>
    )
}