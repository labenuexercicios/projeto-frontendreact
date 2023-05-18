import React, { useState } from "react";
import { MainContainer } from './styled'
import  ProductCard  from "../ProductCard/ProductCard";
import { HomePageContainer } from "./styled";

const Home = (props) =>{

    const [name, setName] = useState("")
    const [ordenar, setOrdenar] = useState("")
    const { lista } = props
    const { addToCart } = props
    
    const renderList = lista.map(product => {
        return (
          <ProductCard
                addToCart={addToCart}
                imageUrl={product.imageUrl}
                name={product.name}
                value={product.value}
          />
      )
    })

    return (
        <HomePageContainer>
            
            <div class="busca">
            <p className='qtde'>Quantidade de produtos: {lista.length}</p>
            <select>
              <option value="">Ordenar valor</option>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
            </div>
            <MainContainer>
            {lista.filter((cadaItem)=>{
            if(name){
              return cadaItem.name.includes(name)
            }else{
              return cadaItem
            }

            }).filter((nomeProduto)=>{
              return name ? nomeProduto.name.toLocaleLowerCase().includes(name) : nomeProduto
            })
            
            .sort((a,b)=>{
              if(ordenar==="crescente"){
                return a.name - b.name
              }
              if(ordenar==="decrescente"){
                return b.name - a.name
              }               
            })
            .map((item) => {
              return <ProductCard
                imageUrl={item.imageUrl}
                name={item.name}
                value={item.value}
                item={item}
              />
            })}
            </MainContainer>
        </HomePageContainer>   
    )     
}
export default Home


