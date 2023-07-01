import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { HomeStyle,} from './homeStyle'
import { useState } from 'react'
import InfoProdutos from '../InfoProdutos/InfoProdutos'
import productsList from '../../../assents/productsList'

const Home = (props) => {
  const [ordination, setOrdination] = useState('');

  const handleOrdinationChange = (event) => {
    setOrdination(event.target.value);
  };
  const {products} = props;
  
  return (
    <>
    
      <HomeStyle>
        {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </HomeStyle>
          
      {/* <InfoProdutos products = {productsList}/> */}
      
      {/* <div> // Fiz a chamada no componente InfoProdutos
        <InfoProdutos ordination={ordination} onOrdinationChange={handleOrdinationChange} />
      </div> */}
    
    </>
    );
    
  // <>
    
  //   <HomeStyle>
      
  //     <ProductCard/>
  //     <ProductCard/>
  //     <ProductCard/>
  //     <ProductCard/>
  //     <ProductCard/>
  //     <ProductCard/>

  //   </HomeStyle>
  // </>
  // )
}

export default Home
