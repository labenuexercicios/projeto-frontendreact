
import Header from '../Header/Header';
import Body from "../Body/Body";
import { useCarrinho } from '../../Hooks/useCarrinho';
import { AppContainer } from './Styled';
import Footer from '../Footer/Footer';
import GlobalStyle from '../../GlobalStyled/GlobalStyles';
import { useOrdenar } from '../../Hooks/useOrdenar';
import { useFiltros } from '../../Hooks/useFiltros';



function App() {
  const sacola = useCarrinho()
  const { ordenar, receberOrdem } = useOrdenar()
  const filtrar = useFiltros()

  return (
    <AppContainer className="App">
      <GlobalStyle />
      <Header sacola={sacola} receberOrdem={receberOrdem} filtrar={filtrar} />
      <Body sacola={sacola} ordenar={ordenar} filtrar={filtrar}/>
      <Footer />
    </AppContainer>
  );
}

export default App;
