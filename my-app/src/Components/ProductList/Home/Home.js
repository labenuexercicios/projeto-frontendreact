import React from 'react'
import { HomeStyle , HomeHeader, HomeGalery } from './Home.styled'
import ProductCard from './ProductCard/ProductCard'

const Home = ({addToCart, ProductList, setOrdination, ordination, filteredProducts, quantidade}) => {
  
  
  const HandleOrdem = (event) => {
    setOrdination(event.target.value) 
  }
  
  return ( 
    <HomeStyle>
      <HomeHeader>
        <h4>Galeria de produtos: {quantidade} produtos</h4>
          <label>
              Ordernar por:
            <select value={ordination} onChange={HandleOrdem}>
                <option>Selecione</option>
                <option>Maior preço</option>
                <option>Menor preço</option>   
            </select>
          </label>
      </HomeHeader>
      <HomeGalery>
          <ProductCard 
          ProductList={ProductList} 
          addToCart={addToCart} 
          filteredProducts={filteredProducts} />
      </HomeGalery>
    </HomeStyle> 
  )
}

export default Home