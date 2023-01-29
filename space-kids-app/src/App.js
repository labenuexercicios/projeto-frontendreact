import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";

//impor components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [screen, setScreen] = useState(1);
  const handleScreen = (screen) => setScreen(screen);

  const showScreen = screen === 1 ? <MainPage /> : <ProductDetails />;

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Sidebar />
      {showScreen}
      <Footer />
    </Container>
  );
};

export default App;
