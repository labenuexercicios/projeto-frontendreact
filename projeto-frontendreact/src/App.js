/////////Bibliotecas//////////////
import styled, { createGlobalStyle } from "styled-components";
import React, {useState} from 'react'

///////////////////components e json////////////
import { Header } from "./components/Header/Header";
import { Filters } from "./components/Filters/Filters";
import { Main } from "./components/Main/Main";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import  products  from "./products/products.json";
/////////////////////////////////////////////////////////////

/////////////////renderização condicional login//////////////////
import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegisterScreen from "./components/registerScreen/registerScreen";
import LoggedScreen from "./components/LoggedScreen/loggedScreen.js";
import RegisterAddressScreen from "./components/RegisterAddressScreen/RegisterAddressScreen"
//////////////////////////////////////////////////////////////////////////

//////////////////imagens e estilização////////////
import './App.css';
import GalaxyBackground from './assets/panorama-cena-da-galaxia-do-espaco-com-planetas-estrelas-e-galaxias-modelo-de-banner-muitas-nebulosas-e-galaxias-no-espaco-muitos-ano.jpg'
import lupaImg from "./assets/lupa.png";
import cartImg from "./assets/126510.png";
import lupaSearchImg from "./assets/lupa.jpg";

import {Container, DivMain, DivItens, DivNoResults, BottomMenu, MenuButtonLupa, MenuButtonCart, 
        FilterIcon, CartIcon, SectionBusca} from './AppStyle'
//////////////////////////////////////////////////////////////////

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {

  ////////variaveis////
  const [cartActivated, setCartActivated] = useState(false) //verifica se o botao carrinho foi ativo no modo mobile (botao flutuante)
  const [displayCart, setDisplayCart] = useState("display: none;") //serve para mostrar ou não a lista do carrinho no modo mobile
  const [loginScreenActive, setLoginScreenActive] = useState(false)// serve para ir para tela de login
  const [condicionalValue, setCondicionalValue] = useState(1) // para mudar de pagina no login
  let [amountScreen ] = useState([])// quantidade de itens na tela no momento da pesquisa
  const [stringTyped, setStringTyped] = useState("")//recebe o texto pesquisado nos filtros
  let [minPrice, setMinPrice] = useState("") //parametro pro valor maximo
  let [maxPrice, setMaxPrice] = useState("") //parametro pro valor minimo
  let [cartList, setCartList] = useState([]);  //armazena a lista adicionada ao carrinho de compras
  const [sortABC, setSortABC] = useState("");  //ordenar em ordem alfabética
  const [categoryFilter, setCategoryFilter] = useState(""); //filtrar por categoria (calor, frio, acessórios)
  ////////////////////////////////////////

//////////////////funcoes////////////////////////////////////
  const toggleToCart = () =>  //serve para alternar entre lista de produtos e carrinho no mobile
  {
    setCartActivated(true)
    setDisplayCart("display: flex;")
  }

  const toggleToList = () =>  //serve para alternar entre lista de produtos e carrinho no mobile
  {
    setCartActivated(false)
    setDisplayCart("display: none;")
  }

  const toggleToLogin = () => //serve para mudar para a pagina de login 
  {
    setLoginScreenActive(true)
  }

  const turnBackToList = () => //serve para voltar para a pagina de lista após sair do login
  {
    setLoginScreenActive(false)
    setCondicionalValue(1)    
  }

/////////////////funcoes de renderização condicional//////////////////////////
  const changeScreen = (valor) => {
    setCondicionalValue(valor)
  }

  const renderScreen = () => {
    if (loginScreenActive === true)
    {
      switch (condicionalValue) {
        case 1:
          return <LoginScreen changeScreen={changeScreen} turnBackToList={turnBackToList} />;
        case 2:
          return <RegisterScreen changeScreen={changeScreen} />;
        case 3:
          return <RegisterAddressScreen changeScreen={changeScreen}/>
        default:
          return <LoggedScreen turnBackToList={turnBackToList}/>
      }
    }
  }
 ///////////////////////////////////////////////////////////////////////////////      

  ////////busca no mobile////////////////////////////
  const handleSearch = (e) => 
  {
    setStringTyped(e.target.value);
  };
  ////////////////////////////////////////

  //////////////////funcao do carrinho///////////////////
  function searchButton(str)
  {
    //não retorna nada por enquanto
  }
    
  function addCartFunction(product) // funcao que adiciona o item selecionado ao carrinho
  {
    let repeatedItem = false  // impede que o mesmo item seja repetido no carrinho, somente a quantidade muda
    let cartItem = {name:product.name, qtd: 1, price: product.price} // transforma o item em um objeto padrão para o carrinho
    for(let i=0; i<cartList.length; i++)  //loop para verificar se o item já está no carrinho
    {
      if(cartList[i].name === cartItem.name) //se o item já estiver no carrinho, a quantidade eo preço aumentam 1
      {
        cartList[i].qtd++ 
        cartList[i].price += cartItem.price
        setCartList([...cartList])
        repeatedItem = true       //o item não será repetido no carrinho
      }
    }
    if(repeatedItem === false) // se o item não estiver no carrinho, ele será adicionado
    {
      setCartList([...cartList, cartItem])
    }
  }
/////////////////////////////////////////////////////////////////

/////////////////////funcao remove do carrinho////////////////////////
  const removeCart = (product) => 
  {
    cartList = cartList.filter((item) => item !== product);
    setCartList(cartList)
  }
/////////////////////////////////////////////////////////////////////////

////////////para reconhecer o texto mesmo sem acentos////////////
  function accentRemove(str) 
  {
    let withAccent = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    let withoutAccent = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    let newStr="";
    for(let i=0; i<str.length; i++) 
    {
      let change=false;
      for (let a=0; a<withAccent.length; a++) 
      {
        if (str.substr(i,1)===withAccent.substr(a,1)) 
        {
          newStr+=withoutAccent.substr(a,1);
          change=true;
          break;
        }
      }
      if (change===false) 
      {
        newStr+=str.substr(i,1);
      }
    }
    return newStr;
  }       
///////////////////////////////////////////////////////////

  return (
    <>  
    <GlobalStyle />
    <Header toggleToLogin={toggleToLogin}/> 

    <BottomMenu>
      <MenuButtonLupa onClick = {toggleToList}>
        <FilterIcon > 
          <img alt="" src={lupaImg} />
        </FilterIcon>
      </MenuButtonLupa>

      <MenuButtonCart onClick = {toggleToCart}> 
        <CartIcon > 
          <img alt="" src={cartImg}/>
        </CartIcon>
      </MenuButtonCart>
    </BottomMenu>

    {renderScreen()} {/*chama a tela de login caso seja verdadeiro */}

    {!loginScreenActive && //*se a tela de login for verdadeira, não mostra esse conteúdo 
    <Container style={{ backgroundImage: `url(${GalaxyBackground})` }}>
      <Filters
      stringTyped = {stringTyped}
      setStringTyped = {setStringTyped} 
      minPrice = {minPrice}
      maxPrice = {maxPrice}
      setMinPrice = {setMinPrice}
      setMaxPrice = {setMaxPrice}
      searchButton = {searchButton}
      sortABC={sortABC}
      setSortABC={setSortABC}
      categoryFilter = {categoryFilter}
      setCategoryFilter={setCategoryFilter}   
      />
      
      {!cartActivated && //no mobile, não aparece se o carrinho estiver selecionado
      <DivMain>  
        <DivItens>
        {amountScreen = products //produtos vai passar por uma serie de filtros e map
          .filter((product) => {
            return accentRemove(product.name.trim().toLowerCase()).includes(accentRemove(stringTyped.trim().toLowerCase()));
          })
          .filter((product) => {
            return product.price >= minPrice
          })
          .filter((product) => {
            return maxPrice !== "" ? product.price <= maxPrice : products
          })
          .sort((a, b) => {
            if(sortABC === "Crescente")
            {
              return a.name < b.name? -1 : 1
            }
            else if(sortABC === "Decrescente")
            {
              return a.name < b.name? 1 : -1
            }
          })
          .filter((product) => {
            return product.category.includes(categoryFilter) || categoryFilter === "";
          }).map((product) => {
            return (
              <Main
                key={product.id}
                product = {product}
                addCartFunction = {addCartFunction}
                />
            )
        })}

        </DivItens>
        {amountScreen.length === 0 && //caso não seja encontrado nenhum item
        <DivNoResults>
          <h3>NÃO FOI POSSÍVEL ENCONTRAR RESULTADOS PARA O TERMO PROCURADO</h3>
          <h5>Verifique se você digitou as palavras corretamente ou tente novamente a busca.
          <h4>DICAS:</h4>
          <p>- Verifique se não há erro de digitação.</p>
          <p>- Tente utilizar uma única palavra.</p>
          <p>- Tente buscar por termos menos específicos.</p>
          <p>- Use os filtros da busca.</p>
          <p>- Procure utilizar sinônimos ao termo desejado.</p></h5>
        </DivNoResults>}

        <h5>Quantidade de itens: {amountScreen.length}</h5> {/*tive que usar column-reverse para aparecer primeiro*/}

        <SectionBusca>  {/*só aparece no mobile */}
          <img src={lupaSearchImg} alt="Buscar..." />
          <input type="text" placeholder="Pesquisar..." value = {stringTyped}  onChange={handleSearch}/> {/*onClick={props.pesquisar(props.string)}/> */}
          <button onClick={() => searchButton(stringTyped)}>Buscar</button> 
        </SectionBusca>

      </DivMain>}

      <Cart
        displayCart ={displayCart}
        cartList = {cartList}
        removeCart= {removeCart}
        setCartList={setCartList}
      /> 
    </Container>}

    <Footer/>
    </>
  );
}

export default App;
