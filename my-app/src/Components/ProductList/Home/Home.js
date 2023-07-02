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
        
          <h4><i class="fa fa-th" aria-hidden="true"></i>Galeria: {quantidade} produtos encontrados</h4>
            <div>
              
              <label>
              <i class="fa fa-sort-amount-asc" aria-hidden="true"></i>Ordernar por:
                <select value={ordination} onChange={HandleOrdem}>
                    <option><p>Selecione</p></option>
                    <option>Maior preço</option>
                    <option>Menor preço</option>
                </select>
              </label>
            </div>
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