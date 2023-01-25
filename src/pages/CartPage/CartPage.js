import React from 'react';
import { getItem } from '../../services/LocalStorageFuncs.js';
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

    const [data, setData] = React.useState(getItem('carrinhoYt') || [])
    console.log(data)

    return (
        <CartPageContainer>
            
            <section>
                {
                    data.map((e) => {
                        return (
                            <section>
                               <p>Produto escolhido: {e.name}</p>
                                <p>Preço: {e.value}</p>
                                <p>Qtd: {e.quantity}</p>
                                <button onClick={() => removeItem(e.id)}>Remover ítem</button> 
                            </section>
                        
                        );
                    }) 
                }
            </section> 

            
        </CartPageContainer>
    )
}
export default CartPage;    