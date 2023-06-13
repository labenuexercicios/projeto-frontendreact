import ProductCard from "../ProductCard/ProductCard";
import { HomeStyle, Header, Container, Select } from './HomeStyle'
import React, { useState } from 'react';

function Home(props) {

    const [ordination, setOrdination] = useState("")

    const { meusProdutos } = props

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
            }).map((produto) => {
              return (
                <ProductCard
                name={produto.name}
                valor={produto.value}
                img={produto.imageUrl}
                
                />
            );
          })}
                

            </Container>
        </HomeStyle>
    )
}

export default Home;