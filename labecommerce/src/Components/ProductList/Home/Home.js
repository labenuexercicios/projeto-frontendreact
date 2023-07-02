import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { HomeStyle,} from './homeStyle'
import { useState } from 'react'
import InfoProdutos from '../InfoProdutos/InfoProdutos'
import productsList from '../../../assents/productsList'

const Home = ({productsList}) => {
  const [ordination, setOrdination] = useState('');

  const handleOrdinationChange = (event) => {
    setOrdination(event.target.value);
  };
 
  // const {productList} = props;
  
  return (
    <>
    
      <HomeStyle>
      {productsList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </HomeStyle>
          
      
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
