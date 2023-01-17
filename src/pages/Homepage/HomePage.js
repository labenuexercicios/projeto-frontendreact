import React from 'react';
import { HomePageContainer } from './HomePage.styled.js';
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductsCard';
import { spaceBackground } from '../../constants/imgURL.js';


const Homepage = (props) => {
    
    const [buscaPrice, setBuscaPrice] = useState("");
    const [ search, setSearch ] = React.useState('');
    const { addToCart, filterText } = props

    // Filtra o valor digitado no input e armazena na variavel filteredProducts
    const searchLowerCase = search.toLocaleLowerCase();
    const filteredProducts = props.products.filter((product) =>  {
        // product.name.toLowerCase().includes(searchLowerCase) &&
         

    }
    );

    // const filteredPrice = props.products.filter((product) =>  
    
    //product.value.toString().includes(buscaPrice)
    // );  

    const onChangePrice = (e) =>{
        props.setBuscaPrice(e.target.value)
    }

    return (
        <HomePageContainer>

            <section>
                <img className='banner' src={spaceBackground} />
            </section>

            <h2> Linha exclusiva :</h2> 

            <div>
                <input
                    placeholder='Busque pelo NOME do produto...'
                    className="search__input" 
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <div>
                <input
                    placeholder='Busque pelo PREÇO do produto...'
                    className="search__input" 
                    type="search"
                    value={props.buscaPrice}
                    onChange={onChangePrice}
                />
            </div>

            <section>
                { // Renderiza na tela o que foi filtrado no input
                    filteredProducts && 
                        filteredProducts.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                url={product.imageUrl}
                                name={product.name}
                                value={product.value}
                                isCartPage={true}
                            />
                        );
                    }) 
                }
            </section> 
            
            <Footer />
        </HomePageContainer>
    )
}
export default Homepage;    