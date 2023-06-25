import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { HomeStyle } from './homeStyle'

const Home = (props) => {
  const {products} = props;
  return (
    <HomeStyle>
      {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
    </HomeStyle>
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
