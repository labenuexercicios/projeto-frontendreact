import Carrinho from './components/Carrinho/Carrinho';
import Header from './components/Header/Header';
import Lista from './components/Lista/Lista';
import Footer from './components/Footer/Footer';
import GlobalStyle from './GlobalStyle';
import Pagina from './components/Pagina/Pagina';
import { AppStyle, InitialStyle } from './styles';
import { products } from './data/data';
import {CartProvider} from "react-use-cart";

function App() {


  return (
    
    <div >
      <GlobalStyle/>
      <Header/>
      <InitialStyle>COMPRE CONOSCO O SEU PACOTE DE VIAGEM IDEAL PELO O SISTEMA SOLAR, TEMOS OS MELHORES GUIAS PARA ACOMPANHÁ-LOS NESSA AVENTURA ESPACIAL!!</InitialStyle>
      <AppStyle>
        <CartProvider>
        <Lista/>
        <Pagina
        products={products}
        />
        <Carrinho/>
        </CartProvider>
      </AppStyle>
      <Footer/>
    </div>
  );
}

export default App;
