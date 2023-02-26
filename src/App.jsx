
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
  height: 100vh;
  width:100vw; 
  background-image:url("https://images.pexels.com/photos/1499627/pexels-photo-1499627.jpeg?auto=compress&cs=tinysrgb&w=600");
  
`;

const products = [
  {
    image:"https://uploaddeimagens.com.br/images/004/364/123/original/Sk-1.jpg?1677110810",
    code: "001",
    title: " SK-1 ",
    price: "R$1.000.000,00",
    id: 0
  },
  {    image:"https://uploaddeimagens.com.br/images/004/364/124/original/Berkut.jpg?1677110846",
    code: "002",
    title: "Berkut",
    price:"R$2.000.000,00",
    id:1
  },
  {    image:"https://uploaddeimagens.com.br/images/004/364/126/original/gemini.jpg?1677110890",
    code: "003",
    title:"Gemini G4C",
    price: "R$3.000.000,00",
    id:2
  },
  {    image:"https://uploaddeimagens.com.br/images/004/364/125/original/Apollo.jpg?1677110864",
    code: "004",
    title:"Apollo A7L",
    price:"R$5.000.000,00",
    id:3
  },
  {    image:"https://uploaddeimagens.com.br/images/004/364/127/original/EMU.jpg?1677110907",
    code: "005",
    title:"Extravehicular Mobility Unit(EMU)",
    price:"R$7.500.000,00",
    id:4
  },
  {    image:"https://uploaddeimagens.com.br/images/004/364/137/original/Feitian.jpg?1677111312",
    code: "006",
    title:"Feitian ",
    price:"R$8.800.00,00",
    ide:5
  },
  {    image:"https://uploaddeimagens.com.br/images/004/364/128/original/Mark-III.jpg?1677110931",
    code: "007",
    title:"Mark III",
    price:"R$10.000.000,00",
    id:6
  },
  {
    image:"https://uploaddeimagens.com.br/images/004/364/960/original/download_%283%29.jpg?1677171429",
    code: "008",
    title:"Z1",
    price:"R$11.000.000,00",
    id:7
  },
]


function App() {

  const [cards, setCards] = useState(products)

  const [valueConditional, setValueConditional] = useState(1)

  const changePage = (values) => {
    setValueConditional(values)
  }

  const renderPage = () => {
    switch (valueConditional) {
      case 1:
        return <Header changePage={changePage}/>;
      case 2:
        return <LoginPage changePage={changePage} />;
      case 3:
        return <RegisterPage changePage={changePage}/>;
      case 4:
        return <AddressRegisterPage changePage={changePage}/>
      case 5:
        return <RegisterUserPage/>
         
    }
  }
 
  return (
    <>
     <GlobalStyle/>
    <Container>
      <Header/>     
      {renderPage()}      
      <Filter/>      
      <ShowCard cards={cards} setCards={setCards}/>
      <ShoppingCar/>      
      <Footer/>     
    </Container> 
    </>
  )
}

export default App

