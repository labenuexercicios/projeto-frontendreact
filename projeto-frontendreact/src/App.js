import styled, { createGlobalStyle } from "styled-components";
import React, {useState} from 'react'
import './App.css';
import fundoGalaxia from './midia-geral/panorama-cena-da-galaxia-do-espaco-com-planetas-estrelas-e-galaxias-modelo-de-banner-muitas-nebulosas-e-galaxias-no-espaco-muitos-ano.jpg'
import { Header } from "./components/Header/Header";
import { Filtros } from "./components/Filtros/Filtros";
import { Centro } from "./components/Centro/Centro";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { Footer } from "./components/Footer/Footer";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container  = styled.section`
display: grid;
height: 100%;
min-height: 600px;
width: 100vw;
grid-template-columns: 1fr 3fr 1fr;
margin-top: 80px;   
`

const DivCentro = styled.div
`
//background-color: white;
display: flex;
flex-wrap: wrap;
justify-content: center;
`


function App() {
///Produtos///////////////
  let [produtos, setProdutos] = useState(
    [ 
      {
        id: 0,
        nome: "Camisa Luas de Saturno",
        preco: 49.99,
        imagemUrl: "https://images.tcdn.com.br/img/img_prod/697287/camiseta_planeta_saturno_sistema_solar_espaco_7241_1_20191112120529.jpg",
        backColor: "white",
        display: "",
        qtd: 0 //qtd para ajudar no carrinho
      },
      {
        id: 1,
        nome: "Camisa Sistema Solar",
        preco: 49.99,
        imagemUrl: "https://a-static.mlcdn.com.br/800x560/camiseta-planetas-camisa-espaco-galaxias-darkwood/darkwoodshop2/11228651084/98261ab296824e6d69a6e7f6b0c5ee7d.jpeg",
        backColor: "white",
        display: "",
        qtd: 0
      },
      {
        id: 2,
        nome: "Regata das Galáxias",
        preco: 39.99,
        imagemUrl:"https://images.tcdn.com.br/img/img_prod/697287/regata_psicodelica_galaxia_espaco_sideral_3799_1_20190807141826.jpg",
        backColor: "white",
        display: "",
        qtd: 0
      },
      {
        id: 3,
        nome: "Casaco das Galáxias com capuz",
        preco: 199.99,
        imagemUrl:"https://ae01.alicdn.com/kf/HTB1DAYoSpXXXXXwXFXXq6xXFXXXp/2017-Mulheres-Novas-Dos-Homens-Hoodies-Moletom-Espa-o-Gal-xia-3D-Hoody-Casaco-Unsex-Casual.jpg_Q90.jpg_.webp",
        backColor: "white",
        display: "",
        qtd: 0
      },
      {
        id: 4,
        nome: "Casaco das Galáxias",
        preco: 189.99,
        imagemUrl:"https://cf.shopee.com.br/file/df384841cb0cc8186520155b1e48cef7",
        backColor: "white",
        display: "",
        qtd: 0
      },
      {
        id: 5,
        nome: "Moleton das Galáxias",
        preco: 299.99,
        imagemUrl:"https://img.elo7.com.br/product/original/3AF425D/blusa-moletom-galaxia-casaco-de-frio-moletom.jpg",
        backColor: "white",
        display: "",
        qtd: 0
      },
      {
        id: 6,
        nome: "Moleton Sistema Solar",
        preco: 289.99,
        imagemUrl:"https://ae01.alicdn.com/kf/HTB1J0JofqQoBKNjSZJnq6yw9VXaq/Moletom-masculino-estilo-hip-hop-ujwi-planetas-casaco-com-capuz-estampa-3d-de-estrela-espa-osa.jpg_Q90.jpg_.webp",
        backColor: "white",
        display: "",
        qtd: 0
      },
      {
        id: 7,
        nome: "Boné das galáxias",
        preco: 29.99,
        imagemUrl:"https://img.ltwebstatic.com/images3_pi/2022/03/09/164681617300b42e8ad6c8eb2745c535272558b729.webp",
        backColor: "rgb(233, 206, 159);",
        display: "",
        qtd: 0
      },
      {
        id: 8,
        nome: "Colar das Galáxias",
        preco: 39.99,
        imagemUrl:"https://i.pinimg.com/474x/62/00/44/6200447afcbf227a435e1d708d1caea8.jpg",
        backColor: "rgb(233, 206, 159);",
        display: "",
        qtd: 0
      },
      {
        id: 9,
        nome: "Anel das Galáxias",
        preco: 9.99,
        imagemUrl:"http://images.virgula.com.br/2017/02/i-sew-cute-galaxy-inspired-jewelry-11.jpg",
        backColor: "#e2e2e2",
        display: "",
        qtd: 0
      },
      {
        id: 10,
        nome: "Pulseira Sistema Solar",
        preco: 15.99,
        imagemUrl:"https://a-static.mlcdn.com.br/800x560/pulseira-sistema-solar-8-planetas-galaxia-fashion-acessorios/jj95acessorios/1ppn/1b8be33fe50c5d6884990b8410224d44.jpeg",
        backColor: "white",
        display: "",
        qtd: 0
      },
      {
        id: 11,
        nome: "Capa das Galáxias Notebook",
        preco: 59.99,
        imagemUrl:"https://a-static.mlcdn.com.br/800x560/adesivo-protetor-para-notebook-17-cosmos-galaxia-d1-skin-zabom/olistplus/opmjevpxru14daof/62eec662615176175f88aaca725eb8f7.jpeg",
        backColor: "white",
        display: "",
        qtd: 0
      },
    ]);

    //Funçoes
    const [string, setString] = useState("")//recebe o texto pesquisado
    let [valorMinimo, setValorMinimo] = useState()
    let [valorMaximo, setValorMaximo] = useState()

    let alertNaoEncontrado;
    function pesquisar(textoDigitado)
    {
      alertNaoEncontrado = 0
      if(textoDigitado === "")
      {
        for(let i=0; i<produtos.length; i++) 
        {
          produtos[i].display = "";
        }
      }
      else if(alertNaoEncontrado === 0)
      {
        for(let i=0; i<produtos.length; i++) 
        {
          produtos[i].display = "display: none;";
        }
        for(let i=0; i<produtos.length; i++) 
        {    
            if(produtos[i].nome.slice(produtos[i].length, textoDigitado.length).toLowerCase() === textoDigitado.toLowerCase())  //.toLowerCase().trim()
            {
                //console.log("o resultado da pesquisa foi: ", produtos[i].id);
                produtos[i].display = "";
                alertNaoEncontrado = 1
            }
        }
        if(alertNaoEncontrado === 0)
        {
          alertNaoEncontrado = 1
          //alert("ALERT item não encontrado")
          for(let j=0; j<produtos.length; j++) 
          {
            produtos[j].display = "";
          }
        }
      }
    }

    function pesquisarBotao(str)
    {
      //console.log(alertNaoEncontrado, str)
      if(alertNaoEncontrado === 1)
      {
        //alert("ALERT item não encontrado")
      }
    }


    function filtraValor(valorMinimo, valorMaximo)
    {
      for(let i = 0; i <produtos.length; i++)
      {
        if(produtos[i].preco < valorMinimo || produtos[i].preco > valorMaximo)
        {
          produtos[i].display = "display: none;";
        }
      }
    }

    let [listaCarrinho, setListaCarrinho] = useState([]);
    
    function adicionarCarrinho(produto)//, arrayAdicionarCarrinho)
    {
       let itemRepetido = false
       console.log(listaCarrinho)

       let itemCarrinho = {nome:produto.nome, qtd: 1, preco: produto.preco}

       for(let i=0; i<listaCarrinho.length; i++)
       {
          if(listaCarrinho[i].nome === itemCarrinho.nome)
          {
            listaCarrinho[i].qtd++
            listaCarrinho[i].preco += itemCarrinho.preco
            setListaCarrinho([...listaCarrinho])
            itemRepetido = true
          }
       }
       if(itemRepetido === false)
       {
        setListaCarrinho([...listaCarrinho, itemCarrinho])
       }

      //  listaCarrinho[i].filter((item) => {
      //   return itemRepetido = item.nome.includes(produto);
      // })

      // let repetido
      // itemRepetido? repetido = true : setListaCarrinho([...listaCarrinho, produto]);
      // console.log(repetido)
      // if(repetido === true)
      // {
      //   for(let i=0; i<listaCarrinho.length; i++)
      //   {
      //     if(listaCarrinho[i].nome === produto.nome)
      //     {
      //       listaCarrinho[i].qtd++
      //       setListaCarrinho([...listaCarrinho])
      //     }
      //   }
      // }
    }

  
      const removeCarrinho = (produto) => {
      listaCarrinho = listaCarrinho.filter((item) => item !== produto);
      setListaCarrinho(listaCarrinho)
      //return funcaoListaFeita
    };

  return (
    <>  
    <GlobalStyle />
    <Header />
    <Container style={{ backgroundImage: `url(${fundoGalaxia})` }}>
      <Filtros
      string = {string}
      valorMinimo = {valorMinimo}
      valorMaximo = {valorMaximo}
      setString = {setString} 
      setValorMinimo = {setValorMinimo}
      setValorMaximo = {setValorMaximo}
      pesquisar = {pesquisar}
      pesquisarBotao = {pesquisarBotao}
      filtraValor = {filtraValor}/>
      
      <DivCentro >  
        {produtos.map((produto) => {
            return (
              <Centro
              key={produto.id}
              produto = {produto}
              adicionarCarrinho = {adicionarCarrinho}/>
            )
        })}
      </DivCentro>
      <Carrinho
      listaCarrinho = {listaCarrinho}
      removeCarrinho= {removeCarrinho}
      //setArrayAdicionarCarrinho= {setArrayAdicionarCarrinho} 
      /> 
    </Container>
    <Footer/>
    </>
  );
}

export default App;
