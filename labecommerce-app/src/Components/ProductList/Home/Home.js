import ProductCard from "../ProductCard/ProductCard";
import { HomeStyle, Header, Container, Select } from './HomeStyle'
import React, { useState } from 'react';

function Home(props) {

    const [ordination, setOrdination] = useState("")

    const { meusProdutos } = props
    const { searchFilter } = props
    const { minFilter } = props
    const { maxFilter } = props
    const { addCart } = props

    

    const handleOrdem = (e) => {
        setOrdination(e.target.value)
    }


    return (
        <HomeStyle>
            <Header>
                <p>Quantidade de produtos: {meusProdutos.lenght}</p>
                
                <label>Ordenação:
                    <Select
                    value={ordination}
                    onChange={handleOrdem}
                    >
                        <option
                        value={"Crescente"}
                        >
                            Crescente
                        </option>
                        <option
                        value={"Decrescente"}
                        >
                            Decrescente
                        </option>
                    </Select>
                </label>
            </Header>      
 

            <Container>
                
            {meusProdutos.sort((produtoA, produtoB) => {
              if(ordination === "Crescente" && produtoA.name < produtoB.name){
                return -1;
              } else if (ordination === "Decrescente" && produtoA.name > produtoB.name){
                return -1;
              } else{
                return 0;
              }
              }).filter((produto) => {
                  return produto.name.toLowerCase().includes(searchFilter.toLowerCase());
                })
                .filter((produto) => {
                      if (produto.value >= minFilter && produto.value <= maxFilter){
                        return (produto.value >= minFilter && produto.value <= maxFilter)

                      } else{
                        return produto
                      }})
                      .map((produto, index) => {
                        return (
                          <ProductCard

                          key={index}
                          addCart={addCart}
                          name={produto.name}
                          valor={produto.value}
                          img={produto.imageUrl}
                          produto={produto}

                          />
                );
          })}
                

            </Container>
        </HomeStyle>
    )
}

export default Home;