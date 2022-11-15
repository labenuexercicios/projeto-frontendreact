import React, { useState }  from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { Card } from './components/Card/Card';
import styled from 'styled-components';
import background from './assets/sci-fi-deep-space-background-loop-free-video.jpeg'

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

  const [inputHeader, setInputHeader] = useState("")

  return (
  <>
    <Header
    inputHeader={inputHeader}
    setInputHeader={setInputHeader}
    />
    <CardsContainer>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </CardsContainer>
    <Footer/>
  </>
  );
}

export default App;
