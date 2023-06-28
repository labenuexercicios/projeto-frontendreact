import React, { useState } from 'react'
import { HomeStyle , HomeHeader, HomeGalery } from './Home.styled'
import { quantidade } from '../../../assets/ProductList'


const Home = ({renderArray}) => {
  
  const [ordination , setOrdination] = useState ('')
  
  const alterarOrdem = (event) => {
    setOrdination(event.target.value) 
  }


  
  return (
      
    <HomeStyle>
      <HomeHeader>
        <h4>Galeria de produtos: {quantidade} produtos</h4>
          <label>
              Ordernar por:
            <select value={ordination} onChange={alterarOrdem}>
                <option>Selecione ordem</option>
                <option>Crescente</option>
                <option>Descrescente</option>
            </select>
          </label>
      </HomeHeader>
      <HomeGalery>
          {renderArray}
      </HomeGalery>
    </HomeStyle> 
  )
}

export default Home