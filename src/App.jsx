
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FilterCart from "./Components/Filters/FilterCart";
import ProductCard from "./Components/ProductList/ProductCard/ProductCard";
import ShoppingCar from "./Components/ShoppingCart/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import AddressRegisterPage from "./Components/AddressRegister/AddressRegister";
import RegisterUserPage from "./Components/RegisterUser/RegisterUser";
import RegisterTextMessage from "./Components/RegisterTextMessage/RegisterTextMessage"
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

  const[names, setNames]=useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword]=useState("")
  const[address, setAddress]=useState("")
  const[number, setNumber]=useState("")
  const[complement, setComplement]=useState("")

  const [minValue, setMinValue] = useState()
  const [maxValue, setMaxValue] = useState()
  const [filterItem, setFilterItem] = useState([])
  const [query, setQuery] = useState("")
  const [cartItems, setCartItems] = useState([]);

  const [cards, setCards] = useState(Products)

  const [valueConditional, setValueConditional] = useState(1)

  const changePage = (values) => {
    setValueConditional(values)
  }
  function currencyBrazil(value, symbol) {
    if (!value) return null
    if (symbol) {
      return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  
  const renderPage = () => {
    switch (valueConditional) {
      case 1:
        return <Header        
        changePage={changePage} />
      case 2:
        return <LoginPage        
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        changePage={changePage}        
        />
      case 3:
        return <RegisterPage
        names={names} 
        setNames={setNames}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        changePage={changePage}
        />
      case 4:
        return <AddressRegisterPage
        address={address}
        setAddress={setAddress}
        number={number}
        setNumber={setNumber}
        complement={complement}
        setComplement={setComplement}
        changePage={changePage}
        />
      case 5:
        return <RegisterUserPage 
        names={names}
        email={email}
        address={address}
        number={number}
        complement={complement}
        changePage={changePage}
        />
      case 6:
        return <ContactUs 
        names={names}
        setNames={setNames}
        email={email}
        setEmail={setEmail}
        changePage={changePage}
        />
      case 7:
        return <RegisterTextMessage
        names={names}
        email={email}
        changePage={changePage}
         />
      case 8:
        return <ShoppingCar
          cartItems={cartItems}
          setCartItems={setCartItems}
          changePage={changePage}          
          cards={cards}
          setCards={setCards}
          currencyBrazil={currencyBrazil} 
          /> 
    }
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header
        cartItems={cartItems} 
        />
        {renderPage()}
        <ConteinerMain>
          <FilterCart
            cards={cards}
            minValue={minValue}
            maxValue={maxValue}
            filerItem={filterItem}            
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            setFilterItem={setFilterItem}
            query={query}
            setQuery={setQuery}
          />
          <CardsContainer>
            
            {/*  filterItem
                 .filter((item) => {
                  return item.title.toLowerCase().includes(query.toLowerCase())
                })
                .filter((item) => {

                  return item ? item.price.includes(minValue) : item
                })
                .filter((item) => {

                  return item ? item.price.includes(maxValue) : item
                })  
                */}
                  <ProductCard
                  cards={cards}
                  setCards={setCards}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  currencyBrazil={currencyBrazil}
                  />
          </CardsContainer>
        </ConteinerMain>
        <Footer />
      </Container>
    </>
  )
}

export default App

