import React, { useState }  from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { Card } from './components/Card/Card';
import styled from 'styled-components';
import background from './assets/sci-fi-deep-space-background-loop-free-video.jpeg';
import camisetas from './camisetas.json';

const CardsContainer = styled.div`
  /* border: 2px solid red; */
  min-height: 86vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 16px;
  background-image: url(${background});
  background-size: cover;
`

function App() {

  const [inputHeader, setInputHeader] = useState("");
  const [inputMinPrice, setInputMinPrice] = useState(-Infinity)
  const [inputMaxPrice, setInputMaxPrice] = useState(Infinity)
  const [sortByPrice, setSortByPrice] = useState("")


  return (
  <>
    <Header
    inputHeader={inputHeader}
    setInputHeader={setInputHeader}
    inputMinPrice = {inputMinPrice}
    setInputMinPrice = {setInputMinPrice}
    inputMaxPrice = {inputMaxPrice}
    setInputMaxPrice = {setInputMaxPrice}    
    sortByPrice = {sortByPrice}
    setSortByPrice = {setSortByPrice}
    />
    <CardsContainer>
            {camisetas
            .filter((camiseta)=>{
              
              return inputHeader ? camiseta.title.includes(inputHeader) : camisetas
            })
            .filter((camiseta)=>{
              console.log(camiseta.price >= inputMinPrice)
              return camiseta.price >= inputMinPrice
              
            })
            .filter ((camiseta) =>{
              return camiseta.price <= inputMaxPrice
            })
            .sort((a, b)=>{
              if (sortByPrice === "crescente"){
                return a.price < b.price ? -1 : 1
              } else{
                return a.price > b.price ? -1 : 1
              }
              
            })
            
            .map ((camiseta) => {
              return <Card key={camiseta.id} camiseta={camiseta} />
            })}
    </CardsContainer>
    <Footer/>
  </>
  );
}

export default App;
