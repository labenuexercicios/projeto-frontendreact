import React from 'react';
import { CartPageContainer } from './CartPage.styled.js';
// import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'
// import ProductCard from '../../components/ProductCard/ProductsCard';

import { useState } from "react";
import ProductCard from '../../components/ProductCard/ProductsCard.js';


const CartPage = (props) => {
    // const [cart, setCart] = useState([]);
    // const [ search, setSearch ] = React.useState('');

    // Filtra o valor digitado no input e armazena na variavel filteredProducts
    // const searchLowerCase = search.toLocaleLowerCase();
    // const filteredProducts = props.products.filter((product) =>  
    //     product.name.toLowerCase().includes(searchLowerCase)
    // );




    return (
        <CartPageContainer>
            {/* 
            <section>
                {
                    cart.map((product) => {
                        return (
                            <section>
                                <img src={product.imageUrl} />
                                <p>{product.name}</p>
                                <p>Preço: {product.value}</p>
                                <p>Qtd: {product.quantity}</p>
                                <button onClick={() => removeItem(product.id)}>REMOVER ITEM</button>
                            </section>

                        );
                    })
                }
            </section> */}

            <section>
                { // Renderiza na tela o que foi filtrado no input
                    props.filteredProducts &&
                    props.filteredProducts.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                url={product.imageUrl}
                                name={product.name}
                                value={product.value}
                                isCartPage={false}
                            />
                        );
                    })
                }
            </section>


        </CartPageContainer>
    )
}
export default CartPage;    