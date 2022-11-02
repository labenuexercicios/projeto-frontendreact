/////////Bibliotecas//////////////
import styled, { createGlobalStyle } from "styled-components";
import React, {useState} from 'react'

///////////////////components////////////
import { Header } from "./components/Header/Header";
import { Filtros } from "./components/Filtros/Filtros";
import { Centro } from "./components/Centro/Centro";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { Footer } from "./components/Footer/Footer";
/////////////////////////////////////////////////////////////

/////////////////renderização condicional login//////////////////
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import TelaCadastroEndereco from "./components/TelaCadastroEndereco/TelaCadastroEndereco"
//////////////////////////////////////////////////////////////////////////

//////////////////imagens e estilização////////////
import './App.css';
import fundoGalaxia from './midia-geral/panorama-cena-da-galaxia-do-espaco-com-planetas-estrelas-e-galaxias-modelo-de-banner-muitas-nebulosas-e-galaxias-no-espaco-muitos-ano.jpg'
import lupa from "./midia-geral/lupa.png";
import carrinho from "./midia-geral/126510.png";
import lupaBusca from "./midia-geral/lupa.jpg";

import {Container, DivCentro, DivItens, DivSemResultado, BottomMenu, MenuButtonLupa, MenuButtonCarrinho, 
        FilterIcon, CarrinhoIcon, SectionBusca} from './AppStyle'
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
  let [produtos, setProdutos] = useState(
    [ 
      {
        id: 0,
        nome: "Camisa Luas de Saturno",
        preco: 49.99,
        imagemUrl: "https://images.tcdn.com.br/img/img_prod/697287/camiseta_planeta_saturno_sistema_solar_espaco_7241_1_20191112120529.jpg",
        backColor: "white",
        display: "",
        qtd: 0, //qtd para ajudar no carrinho
        categoria: "Calor",
        tamanho: true
      },
      {
        id: 1,
        nome: "Camisa Sistema Solar",
        preco: 49.99,
        imagemUrl: "https://a-static.mlcdn.com.br/800x560/camiseta-planetas-camisa-espaco-galaxias-darkwood/darkwoodshop2/11228651084/98261ab296824e6d69a6e7f6b0c5ee7d.jpeg",
        backColor: "white",
        display: "",
        qtd: 0,
        categoria: "Calor",
        tamanho: true
      },
      {
        id: 2,
        nome: "Regata das Galáxias",
        preco: 39.99,
        imagemUrl:"https://images.tcdn.com.br/img/img_prod/697287/regata_psicodelica_galaxia_espaco_sideral_3799_1_20190807141826.jpg",
        backColor: "white",
        display: "",
        qtd: 0,
        categoria: "Calor",
        tamanho: true
      },
      {
        id: 3,
        nome: "Casaco das Galáxias capuz",
        preco: 199.99,
        imagemUrl:"https://ae01.alicdn.com/kf/HTB1DAYoSpXXXXXwXFXXq6xXFXXXp/2017-Mulheres-Novas-Dos-Homens-Hoodies-Moletom-Espa-o-Gal-xia-3D-Hoody-Casaco-Unsex-Casual.jpg_Q90.jpg_.webp",
        backColor: "white",
        display: "",
        qtd: 0,
        categoria: "Frio",
        tamanho: true
      },
      {
        id: 4,
        nome: "Casaco das Galáxias",
        preco: 189.99,
        imagemUrl:"https://cf.shopee.com.br/file/df384841cb0cc8186520155b1e48cef7",
        backColor: "white",
        display: "",
        qtd: 0,
        categoria: "Frio",
        tamanho: true
      },
      {
        id: 5,
        nome: "Moleton das Galáxias",
        preco: 299.99,
        imagemUrl:"https://img.elo7.com.br/product/original/3AF425D/blusa-moletom-galaxia-casaco-de-frio-moletom.jpg",
        backColor: "white",
        display: "",
        qtd: 0,
        categoria: "Frio",
        tamanho: true
      },
      {
        id: 6,
        nome: "Moleton Sistema Solar",
        preco: 289.99,
        imagemUrl:"https://ae01.alicdn.com/kf/HTB1J0JofqQoBKNjSZJnq6yw9VXaq/Moletom-masculino-estilo-hip-hop-ujwi-planetas-casaco-com-capuz-estampa-3d-de-estrela-espa-osa.jpg_Q90.jpg_.webp",
        backColor: "white",
        display: "",
        qtd: 0,
        categoria: "Frio",
        tamanho: true
      },
      {
        id: 7,
        nome: "Boné das galáxias",
        preco: 29.99,
        imagemUrl:"https://img.ltwebstatic.com/images3_pi/2022/03/09/164681617300b42e8ad6c8eb2745c535272558b729.webp",
        backColor: "rgb(233, 206, 159);",
        display: "",
        qtd: 0,
        categoria: "Acessórios",
        tamanho: false
      },
      {
        id: 8,
        nome: "Colar das Galáxias",
        preco: 39.99,
        imagemUrl:"https://i.pinimg.com/474x/62/00/44/6200447afcbf227a435e1d708d1caea8.jpg",
        backColor: "rgb(233, 206, 159);",
        display: "",
        qtd: 0,
        categoria: "Acessórios",
        tamanho: false
      },
      {
        id: 9,
        nome: "Anel das Galáxias",
        preco: 9.99,
        imagemUrl:"http://images.virgula.com.br/2017/02/i-sew-cute-galaxy-inspired-jewelry-11.jpg",
        backColor: "#e2e2e2",
        display: "",
        qtd: 0,
        categoria: "Acessórios",
        tamanho: false
      },
      {
        id: 10,
        nome: "Pulseira Sistema Solar",
        preco: 15.99,
        imagemUrl:"https://a-static.mlcdn.com.br/800x560/pulseira-sistema-solar-8-planetas-galaxia-fashion-acessorios/jj95acessorios/1ppn/1b8be33fe50c5d6884990b8410224d44.jpeg",
        backColor: "white",
        display: "",
        qtd: 0,
        categoria: "Acessórios",
        tamanho: false
      },
      {
        id: 11,
        nome: "Capa das Galáxias Notebook",
        preco: 59.99,
        imagemUrl:"https://a-static.mlcdn.com.br/800x560/adesivo-protetor-para-notebook-17-cosmos-galaxia-d1-skin-zabom/olistplus/opmjevpxru14daof/62eec662615176175f88aaca725eb8f7.jpeg",
        backColor: "white",
        display: "",
        qtd: 0,
        categoria: "Acessórios",
        tamanho: false
      },
    ]);
  ////////////////////////////////////////////////////////

  ////////variaveis////
  const [carrinhoAtivado, setCarrinhoAtivado] = useState(false) //verifica se o botao carrinho foi ativo no modo mobile (botao flutuante)
  const [displayCarrinho, setDisplayCarrinho] = useState("display: none;") //serve para mostrar ou não a lista do carrinho no modo mobile
  const [telaLoginAtiva, setTelaLoginAtiva] = useState(false)// serve para ir para tela de login
  const [valorCondicional, setValorCondicional] = useState(1) // para mudar de pagina no login
  let [quantidadeNaTela , setQuantidadeNaTela ] = useState([])// quantidade de itens na tela no momento da pesquisa
  const [string, setString] = useState("")//recebe o texto pesquisado nos filtros
  let [valorMinimo, setValorMinimo] = useState("") //parametro pro valor maximo
  let [valorMaximo, setValorMaximo] = useState("") //parametro pro valor minimo
  let [listaCarrinho, setListaCarrinho] = useState([]);  //armazena a lista adicionada ao carrinho de compras
  const [sortABC, setSortABC] = useState("");  //ordenar em ordem alfabética
  const [categoriaFilter, setCategoriaFilter] = useState(""); //filtrar por categoria (calor, frio, acessórios)
  ////////////////////////////////////////

//////////////////funcoes////////////////////////////////////
  const mudarParaCarrinho = () =>  //serve para alternar entre lista de produtos e carrinho no mobile
  {
    setCarrinhoAtivado(true)
    setDisplayCarrinho("display: flex;")
  }

  const mudarParaLista = () =>  //serve para alternar entre lista de produtos e carrinho no mobile
  {
    setCarrinhoAtivado(false)
    setDisplayCarrinho("display: none;")
  }

  const mudarParaLogin = () => //serve para mudar para a pagina de login 
  {
    setTelaLoginAtiva(true)
  }

  const voltarParaLista = () => //serve para voltar para a pagina de lista após sair do login
  {
    setTelaLoginAtiva(false)
    setValorCondicional(1)    
  }

/////////////////funcoes de renderização condicional//////////////////////////
  const mudarTela = (valor) => {
    setValorCondicional(valor)
  }

  const renderizaTela = () => {
    if (telaLoginAtiva === true)
    {
      switch (valorCondicional) {
        case 1:
          return <TelaLogin mudarTela={mudarTela} voltarParaLista={voltarParaLista} />;
        case 2:
          return <TelaCadastro mudarTela={mudarTela} />;
        case 3:
          return <TelaCadastroEndereco mudarTela={mudarTela}/>
        default:
          return <TelaUsuarioCadastrado voltarParaLista={voltarParaLista}/>
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
  function pesquisarBotao(str)
  {
    //não retorna nada por enquanto
  }
    
  function adicionarCarrinho(produto) // funcao que adiciona o item selecionado ao carrinho
  {
    let itemRepetido = false  // impede que o mesmo item seja repetido no carrinho, somente a quantidade muda
    let itemCarrinho = {nome:produto.nome, qtd: 1, preco: produto.preco} // transforma o item em um objeto padrão para o carrinho
    for(let i=0; i<listaCarrinho.length; i++)  //loop para verificar se o item já está no carrinho
    {
      if(listaCarrinho[i].nome === itemCarrinho.nome) //se o item já estiver no carrinho, a quantidade eo preço aumentam 1
      {
        listaCarrinho[i].qtd++ 
        listaCarrinho[i].preco += itemCarrinho.preco
        setListaCarrinho([...listaCarrinho])
        itemRepetido = true       //o item não será repetido no carrinho
      }
    }
    if(itemRepetido === false) // se o item não estiver no carrinho, ele será adicionado
    {
      setListaCarrinho([...listaCarrinho, itemCarrinho])
    }
  }
/////////////////////////////////////////////////////////////////

/////////////////////funcao remove do carrinho////////////////////////
  const removeCarrinho = (produto) => 
  {
    listaCarrinho = listaCarrinho.filter((item) => item !== produto);
    setListaCarrinho(listaCarrinho)
  }
/////////////////////////////////////////////////////////////////////////

////////////para reconhecer o texto mesmo com acentos////////////
  function retira_acentos(str) 
  {
    let com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    let sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    let novastr="";
    for(let i=0; i<str.length; i++) 
    {
      let troca=false;
      for (let a=0; a<com_acento.length; a++) 
      {
        if (str.substr(i,1)==com_acento.substr(a,1)) 
        {
          novastr+=sem_acento.substr(a,1);
          troca=true;
          break;
        }
      }
      if (troca==false) 
      {
        novastr+=str.substr(i,1);
      }
    }
    return novastr;
  }       
///////////////////////////////////////////////////////////

  return (
    <>  
    <GlobalStyle />
    <Header mudarParaLogin={mudarParaLogin}/> 

    <BottomMenu>
      <MenuButtonLupa onClick = {mudarParaLista}>
        <FilterIcon > 
          <img src={lupa} />
        </FilterIcon>
      </MenuButtonLupa>

      <MenuButtonCarrinho onClick = {mudarParaCarrinho}> 
        <CarrinhoIcon > 
          <img src={carrinho}/>
        </CarrinhoIcon>
      </MenuButtonCarrinho>
    </BottomMenu>

    {renderizaTela()} {/*chama a tela de login caso seja verdadeiro */}

    {!telaLoginAtiva && //*se a tela de login for verdadeira, não mostra esse conteúdo 
    <Container style={{ backgroundImage: `url(${fundoGalaxia})` }}>
      <Filtros
      string = {string}
      setString = {setString} 
      valorMinimo = {valorMinimo}
      valorMaximo = {valorMaximo}
      setValorMinimo = {setValorMinimo}
      setValorMaximo = {setValorMaximo}
      pesquisarBotao = {pesquisarBotao}
      sortABC={sortABC}
      setSortABC={setSortABC}
      categoriaFilter = {categoriaFilter}
      setCategoriaFilter={setCategoriaFilter}   
      />
      
      {!carrinhoAtivado && //no mobile, não aparece se o carrinho estiver selecionado
      <DivCentro>  
        <DivItens>
        {quantidadeNaTela = produtos //produtos vai passar por uma serie de filtros e map
          .filter((produto) => {
            return retira_acentos(produto.nome.trim().toLowerCase()).includes(retira_acentos(string.trim().toLowerCase()));
          })
          .filter((produto) => {
          return produto.preco >= valorMinimo
          })
          .filter((produto) => {
          return valorMaximo !== "" ? produto.preco <= valorMaximo : produtos
          })
          .sort((a, b) => {
            if(sortABC === "Crescente")
            {
              if(a.nome < b.nome)
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
              if(a.nome < b.nome)
              {
                return 1              
              }
              else
              {
                return -1
              }
            }
          })
          .filter((produto) => {
            return produto.categoria.includes(categoriaFilter) || categoriaFilter === "";
          }).map((produto) => {
          return (
            <Centro
            key={produto.id}
            produto = {produto}
            adicionarCarrinho = {adicionarCarrinho}
            />
          )
        })}

        </DivItens>
        {quantidadeNaTela.length === 0 && //caso não seja encontrado nenhum item
        <DivSemResultado>
          <h3>NÃO FOI POSSÍVEL ENCONTRAR RESULTADOS PARA O TERMO PROCURADO</h3>
          <h5>Verifique se você digitou as palavras corretamente ou tente novamente a busca.
          <h4>DICAS:</h4>
          <p>- Verifique se não há erro de digitação.</p>
          <p>- Tente utilizar uma única palavra.</p>
          <p>- Tente buscar por termos menos específicos.</p>
          <p>- Use os filtros da busca.</p>
          <p>- Procure utilizar sinônimos ao termo desejado.</p></h5>
        </DivSemResultado>}

        <h5>Quantidade de itens: {quantidadeNaTela.length}</h5> {/*tive que usar column-reverse para aparecer primeiro*/}

        <SectionBusca>  {/*só aparece no mobile */}
          <img src={lupaBusca} alt="Buscar..." />
          <input type="text" placeholder="Pesquisar..." value = {string}  onChange={handleSearch}/> {/*onClick={props.pesquisar(props.string)}/> */}
          <button onClick={() => pesquisarBotao(string)}>Buscar</button> 
        </SectionBusca>

      </DivCentro>}

      <Carrinho
        displayCarrinho ={displayCarrinho}
        listaCarrinho = {listaCarrinho}
        removeCarrinho= {removeCarrinho}
      /> 
    </Container>}

    <Footer/>
    </>
  );
}

export default App;
