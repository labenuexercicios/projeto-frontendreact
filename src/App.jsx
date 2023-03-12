
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Filter from "./Components/Filters/Filter";
import ShowCard from "./Components/ProductList/ProductCard/ProductCard";
import ShoppingCar from "./Components/ShoppingCart/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import AddressRegisterPage from "./Components/AddressRegister/AddressRegister";
import RegisterUserPage from "./Components/RegisterUser/RegisterUser";
import ContactUs from "./Components/ContactUs/ContactUs";
import Products from "./Components/ProductList/ProductCard/product.json"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:white;  
    font-family:Arial, Helvetica, sans-serif;     
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  height: 100vh;
  width:100vw; 
  background-image:url("https://images.pexels.com/photos/1499627/pexels-photo-1499627.jpeg?auto=compress&cs=tinysrgb&w=600");

`;

const ConteinerMain = styled.main`
  width:100%;
  height:80%;
  display:flex;
  padding:5%;  
`

const CardsContainer = styled.div`
 width:200vw;
height:80vh;
  padding:5% 0;
  overflow-y: auto; 
  display:flex;    
  gap:10%;  
  flex-wrap:wrap; 
  justify-content:center;   
`;

function App() {

  const [minValue, setMinValue] = useState(-Infinity)
  const [maxValue, setMaxValue] = useState(-Infinity)
  const [query, setQuery] = useState("")

  const [cards, setCards] = useState(Products)

  const [valueConditional, setValueConditional] = useState(1)

  const changePage = (values) => {
    setValueConditional(values)
  }
  
  const renderPage = () => {
    switch (valueConditional) {
      case 1:
        return <Header changePage={changePage}/>
      case 2:
        return <LoginPage changePage={changePage}/>
      case 3:
        return <RegisterPage changePage={changePage}/>
      case 4:
        return <AddressRegisterPage changePage={changePage}/>
      case 5:
        return <RegisterUserPage changePage={changePage}/>
      case 6:
        return <ContactUs changePage={changePage}/>
      case 7:
        return <ShoppingCar
          changePage={changePage}          
          cards={cards}
          setCards={setCards} 
          />
    }
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        {renderPage()}
        <ConteinerMain>
          <Filter
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            query={query}
            setQuery={setQuery}
          />
          <CardsContainer>
            {
              Products
                .filter((item) => {
                  return item.title.toLowerCase().includes(query.toLowerCase())
                })
                .filter((item) => {

                  return item ? item.price.includes(minValue) : item
                })
                .filter((item) => {

                  return item ? item.price.includes(maxValue) : item
                })
                .map(cards => (
                  <ShowCard cards={cards}/>
                ))
            }
          </CardsContainer>
        </ConteinerMain>
        <Footer />
      </Container>
    </>
  )
}

export default App

