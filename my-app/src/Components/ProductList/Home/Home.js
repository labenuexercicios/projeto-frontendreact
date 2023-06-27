import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import { HomeStyle , HomeHeader, HomeGalery } from './Home.styled'
import { quantidade } from '../../../assets/ProductList'
import ProductList from '../../../assets/ProductList'

const Home = () => {
  
  // const [ordination , setOrdination] = useState('')
  
  // const alterarOrdem = () => {

  // }

  
  return (
      
    <HomeStyle>
      <HomeHeader>
        <h4>Galeria de produtos: {quantidade} produtos</h4>
          <label>
              Ordernar por:
            <select name="" id="">
                <option value="">Selecione ordem</option>
                <option value="" >Crescente</option>
                <option value="">Descrescente</option>
            </select>
          </label>
      </HomeHeader>
      <HomeGalery>
        {ProductList.map((item) => {
          return (
            <ProductCard 
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}/>
          )
        })}
      </HomeGalery>
    </HomeStyle> 
  )
}

export default Home