import './App.css';
import { createGlobalStyle } from 'styled-components';
import Header from './Componentes/Header/Header';
import Aside from './Componentes/Aside/Aside';
import ContainerCard from './Componentes/Containes/Container';


const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif,;
}`

function App() {

  return (
    <>
      <GlobalStyle />
      <Header>
      </Header>
      <Aside>
      </Aside>
      <ContainerCard></ContainerCard>
    </>


  );
}

export default App;
