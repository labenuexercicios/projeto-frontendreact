import React from 'react';
import { CartPageContainer } from './CartPage.styled.js';
// import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'
// import ProductCard from '../../components/ProductCard/ProductsCard';


const CartPage = (props) => {
    // const [ search, setSearch ] = React.useState('');
    
    // Filtra o valor digitado no input e armazena na variavel filteredProducts
    // const searchLowerCase = search.toLocaleLowerCase();
    // const filteredProducts = props.products.filter((product) =>  
    //     product.name.toLowerCase().includes(searchLowerCase)
    // );

    const { cart, removeItem } = props

    return (
        <CartPageContainer>
            
            <section>
                {
                    cart.map((product) => {
                        return (
                            <section>
                               <p>Produto escolhido: {product.name}</p>
                                <p>Preço: {product.value}</p>
                                <p>Qtd: {product.quantity}</p>
                                <button onClick={() => removeItem(product.id)}>Remover ítem</button> 
                            </section>
                        
                        );
                    }) 
                }
            </section> 

            
        </CartPageContainer>
    )
}
export default CartPage;    