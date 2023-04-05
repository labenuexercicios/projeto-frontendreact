
import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FilterCart from "./Components/Filters/FilterCart";
import ProductCard from "./Components/ProductList/Home/ProductCard";
import ShoppingCar from "./Components/ShoppingCart/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import AddressRegisterPage from "./Components/AddressRegister/AddressRegister";
import RegisterUserPage from "./Components/RegisterUser/RegisterUser";
import RegisterTextMessage from "./Components/RegisterTextMessage/RegisterTextMessage"
import ContactUs from "./Components/ContactUs/ContactUs";
import Products from "./Components/ProductList/Home/product.json"
import SummaryCart from "./Components/Summary/Summary";
import Finished from "./Components/Finished/Finished";

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
  background-size: contain;
  background-image:url("https://images.pexels.com/photos/1499627/pexels-photo-1499627.jpeg?auto=compress&cs=tinysrgb&w=600");

`;

const ConteinerMain = styled.main`
  width:100%;
  height:80%;
  display:flex;
  padding:5%;  
`

const CardsContainer = styled.div`
 width:100vw;
height:80vh;
  padding:5% 0;
  overflow-y: auto; 
  display:flex;    
  gap:10%;  
  flex-wrap:wrap; 
  justify-content:center;   
`;

const P = styled.h1`
  position:absolute;
  left:23%;
  top:13%;
`;

function App() {

  const [ordenacao, setOrdenacao] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const [complement, setComplement] = useState("")

  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const [query, setQuery] = useState("")
  const [cartItems, setCartItems] = useState([]);  
  const [cards, setCards] = useState(Products)

  const [valueConditional, setValueConditional] = useState(1)

  const changePage = (values) => {
    setValueConditional(values)
  }

  useEffect(() => {
    const listCart = localStorage.getItem("Items")
    if (listCart) {     
      setCartItems(JSON.parse(listCart))
    }
  }, []);

  useEffect(() => {
    if(cartItems.length>0){
      const listCart = JSON.stringify(cartItems)
      localStorage.setItem("Items", listCart)
    }else{
      localStorage.removeItem("Items")
    }   
  },[cartItems])

  function currencyBrazil(value, symbol) {
    if (!value) return null
    if (symbol) {
      return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  const addToCart = (product) => {
    const newProd = cartItems.find((item) => item.id === product.id)
    if (newProd === undefined) {
      setCartItems([...cartItems, product])
    } else {
      const newCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...newProd, amount: newProd.amount + 1 }
        } else {
          return item
        }
      })
      setCartItems(newCart);
    }
  }

  const renderPage = () => {
    switch (valueConditional) {
      case 1:
        return <Header
          changePage={changePage}
          cartItems={cartItems}
          ordenacao={ordenacao}
          setOrdenacao={setOrdenacao}
        />
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
          name={name}
          setName={setName}
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
          name={name}
          email={email}
          address={address}
          number={number}
          complement={complement}
          changePage={changePage}
        />
      case 6:
        return <ContactUs
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          changePage={changePage}
        />
      case 7:
        return <RegisterTextMessage
          name={name}
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
          addToCart={addToCart}  
        />
      case 9:
        return <SummaryCart
          cartItems={cartItems}
          setCartItems={setCartItems}
          changePage={changePage}
          cards={cards}
          setCards={setCards}
          currencyBrazil={currencyBrazil}
          addToCart={addToCart}
        />
      case 10:
        return <Finished
          cartItems={cartItems}
          setCartItems
          name={name}
          changePage={changePage}
        />
    }
  }



  return (
    <>
      <GlobalStyle />
      <Container>
        <Header
          ordenacao={ordenacao}
          setOrdenacao={setOrdenacao}
          cartItems={cartItems}
        />
        {renderPage()}
        <ConteinerMain>
          <FilterCart
            cards={cards}
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            query={query}
            setQuery={setQuery}
            ordenacao={ordenacao}
          />          
          <CardsContainer>
          <P>Aqui Você Encontra seu melhor Trage</P>
            <ProductCard
              addToCart={addToCart}
              cards={cards}
              setCards={setCards}
              cartItems={cartItems}
              setCartItems={setCartItems}
              currencyBrazil={currencyBrazil}
              query={query}
              minValue={minValue}
              maxValue={maxValue}
              ordenacao={ordenacao}              
            />
          </CardsContainer>
        </ConteinerMain>
        <Footer />
      </Container>
    </>
  )
}

export default App

