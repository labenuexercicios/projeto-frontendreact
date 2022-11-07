/////////Bibliotecas//////////////
import styled, { createGlobalStyle } from "styled-components";
import React, {useState} from 'react'

///////////////////components////////////
import { Header } from "./components/Header/Header";
import { Filters } from "./components/Filters/Filters";
import { Main } from "./components/Main/Main";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
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
  /////////////////////produtos////////////////////////////
  let [products, setProducts] = useState(
    [ 
      {
        id: 0,
        name: "Camisa Luas de Saturno",
        price: 49.99,
        imgUrl: "https://images.tcdn.com.br/img/img_prod/697287/camiseta_planeta_saturno_sistema_solar_espaco_7241_1_20191112120529.jpg",
        backColor: "white",
        display: "",
        qtd: 0, //qtd para ajudar no carrinho
        category: "Calor",
        hasSize: true
      },
      {
        id: 1,
        name: "Camisa Sistema Solar",
        price: 49.99,
        imgUrl: "https://a-static.mlcdn.com.br/800x560/camiseta-planetas-camisa-espaco-galaxias-darkwood/darkwoodshop2/11228651084/98261ab296824e6d69a6e7f6b0c5ee7d.jpeg",
        backColor: "white",
        display: "",
        qtd: 0,
        category: "Calor",
        hasSize: true
      },
      {
        id: 2,
        name: "Regata das Galáxias",
        price: 39.99,
        imgUrl:"https://images.tcdn.com.br/img/img_prod/697287/regata_psicodelica_galaxia_espaco_sideral_3799_1_20190807141826.jpg",
        backColor: "white",
        display: "",
        qtd: 0,
        category: "Calor",
        hasSize: true
      },
      {
        id: 3,
        name: "Casaco das Galáxias capuz",
        price: 199.99,
        imgUrl:"https://ae01.alicdn.com/kf/HTB1DAYoSpXXXXXwXFXXq6xXFXXXp/2017-Mulheres-Novas-Dos-Homens-Hoodies-Moletom-Espa-o-Gal-xia-3D-Hoody-Casaco-Unsex-Casual.jpg_Q90.jpg_.webp",
        backColor: "white",
        display: "",
        qtd: 0,
        category: "Frio",
        hasSize: true
      },
      {
        id: 4,
        name: "Casaco das Galáxias",
        price: 189.99,
        imgUrl:"https://cf.shopee.com.br/file/df384841cb0cc8186520155b1e48cef7",
        backColor: "white",
        display: "",
        qtd: 0,
        category: "Frio",
        hasSize: true
      },
      {
        id: 5,
        name: "Moleton das Galáxias",
        price: 299.99,
        imgUrl:"https://img.elo7.com.br/product/original/3AF425D/blusa-moletom-galaxia-casaco-de-frio-moletom.jpg",
        backColor: "white",
        display: "",
        qtd: 0,
        category: "Frio",
        hasSize: true
      },
      {
        id: 6,
        name: "Moleton Sistema Solar",
        price: 289.99,
        imgUrl:"https://ae01.alicdn.com/kf/HTB1J0JofqQoBKNjSZJnq6yw9VXaq/Moletom-masculino-estilo-hip-hop-ujwi-planetas-casaco-com-capuz-estampa-3d-de-estrela-espa-osa.jpg_Q90.jpg_.webp",
        backColor: "white",
        display: "",
        qtd: 0,
        category: "Frio",
        hasSize: true
      },
      {
        id: 7,
        name: "Boné das galáxias",
        price: 29.99,
        imgUrl:"https://img.ltwebstatic.com/images3_pi/2022/03/09/164681617300b42e8ad6c8eb2745c535272558b729.webp",
        backColor: "rgb(233, 206, 159);",
        display: "",
        qtd: 0,
        category: "Acessórios",
        hasSize: false
      },
      {
        id: 8,
        name: "Colar das Galáxias",
        price: 39.99,
        imgUrl:"https://i.pinimg.com/474x/62/00/44/6200447afcbf227a435e1d708d1caea8.jpg",
        backColor: "rgb(233, 206, 159);",
        display: "",
        qtd: 0,
        category: "Acessórios",
        hasSize: false
      },
      {
        id: 9,
        name: "Anel das Galáxias",
        price: 9.99,
        imgUrl:"http://images.virgula.com.br/2017/02/i-sew-cute-galaxy-inspired-jewelry-11.jpg",
        backColor: "#e2e2e2",
        display: "",
        qtd: 0,
        category: "Acessórios",
        hasSize: false
      },
      {
        id: 10,
        name: "Pulseira Sistema Solar",
        price: 15.99,
        imgUrl:"https://a-static.mlcdn.com.br/800x560/pulseira-sistema-solar-8-planetas-galaxia-fashion-acessorios/jj95acessorios/1ppn/1b8be33fe50c5d6884990b8410224d44.jpeg",
        backColor: "white",
        display: "",
        qtd: 0,
        category: "Acessórios",
        hasSize: false
      },
      {
        id: 11,
        name: "Capa das Galáxias Notebook",
        price: 59.99,
        imgUrl:"https://a-static.mlcdn.com.br/800x560/adesivo-protetor-para-notebook-17-cosmos-galaxia-d1-skin-zabom/olistplus/opmjevpxru14daof/62eec662615176175f88aaca725eb8f7.jpeg",
        backColor: "white",
        display: "",
        qtd: 0,
        category: "Acessórios",
        hasSize: false
      },
    ]);
  ////////////////////////////////////////////////////////

  ////////variaveis////
  const [cartActivated, setCartActivated] = useState(false) //verifica se o botao carrinho foi ativo no modo mobile (botao flutuante)
  const [displayCart, setDisplayCart] = useState("display: none;") //serve para mostrar ou não a lista do carrinho no modo mobile
  const [loginScreenActive, setLoginScreenActive] = useState(false)// serve para ir para tela de login
  const [condicionalValue, setCondicionalValue] = useState(1) // para mudar de pagina no login
  let [amountScreen , setAmountScreen ] = useState([])// quantidade de itens na tela no momento da pesquisa
  const [string, setString] = useState("")//recebe o texto pesquisado nos filtros
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
    setString(e.target.value);
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
        if (str.substr(i,1)==withAccent.substr(a,1)) 
        {
          newStr+=withoutAccent.substr(a,1);
          change=true;
          break;
        }
      }
      if (change==false) 
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
          <img src={lupaImg} />
        </FilterIcon>
      </MenuButtonLupa>

      <MenuButtonCart onClick = {toggleToCart}> 
        <CartIcon > 
          <img src={cartImg}/>
        </CartIcon>
      </MenuButtonCart>
    </BottomMenu>

    {renderScreen()} {/*chama a tela de login caso seja verdadeiro */}

    {!loginScreenActive && //*se a tela de login for verdadeira, não mostra esse conteúdo 
    <Container style={{ backgroundImage: `url(${GalaxyBackground})` }}>
      <Filters
      string = {string}
      setString = {setString} 
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
            return accentRemove(product.name.trim().toLowerCase()).includes(accentRemove(string.trim().toLowerCase()));
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
              if(a.name < b.name)
              {
                return -1              
              }
              else
              {
                return 1
              }
            }
            else if(sortABC === "Decrescente")
            {
              if(a.name < b.name)
              {
                return 1              
              }
              else
              {
                return -1
              }
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
          <input type="text" placeholder="Pesquisar..." value = {string}  onChange={handleSearch}/> {/*onClick={props.pesquisar(props.string)}/> */}
          <button onClick={() => searchButton(string)}>Buscar</button> 
        </SectionBusca>

      </DivMain>}

      <Cart
        displayCart ={displayCart}
        cartList = {cartList}
        removeCart= {removeCart}
      /> 
    </Container>}

    <Footer/>
    </>
  );
}

export default App;
