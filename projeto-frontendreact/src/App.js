import styled, { createGlobalStyle } from "styled-components";
import React, {useState} from 'react'
import './App.css';
import fundoGalaxia from './midia-geral/panorama-cena-da-galaxia-do-espaco-com-planetas-estrelas-e-galaxias-modelo-de-banner-muitas-nebulosas-e-galaxias-no-espaco-muitos-ano.jpg'
import { Header } from "./components/Header/Header";
import { Filtros } from "./components/Filtros/Filtros";
import { Centro } from "./components/Centro/Centro";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { Footer } from "./components/Footer/Footer";

import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import TelaCadastroEndereco from "./components/TelaCadastroEndereco/TelaCadastroEndereco"

import lupa from "./midia-geral/lupa.png";
import carrinho from "./midia-geral/126510.png";
import lupaBusca from "./midia-geral/lupa.jpg";

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
min-height: 700px;
width: 100%;
grid-template-columns: 1fr 3fr 1fr;
margin-top: 80px;   
@media screen and (max-device-width: 1000px) {
  grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (max-device-width: 700px) {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0fr;
}

`

const DivCentro = styled.div
`
background-color: white;
display: flex;
flex-direction: column-reverse;
flex-wrap: wrap;
justify-content: flex-end;
align-items: flex-start;
padding-bottom: 30px;
padding-right: 0px;
@media screen and (max-device-width: 1000px) {
  //flex-direction: column;
  //align-items: center;
}

@media screen and (max-device-width: 700px) {
  justify-content: center;
align-items: center;
min-height: 85vh;
}

`

const DivItens = styled.div
`
display:flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
`

const DivSemResultado = styled.div
`
padding: 30px 30px 30px 30px;
`

const BottomMenu = styled.div
`
position: fixed;
bottom: 0;
left:0;
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
height: 8vh;
background-color: white;
border: 1px solid black;
z-index:1;
@media screen and (min-device-width: 700px) {
  display:none;
}

`
 const MenuButtonLupa = styled.section
 `
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: black;
 `
 const MenuButtonCarrinho = styled.section
 `
 display: flex;
 justify-content: center;
 `

 const ImgLupa = styled.img
 `
 height: 5vh;
 width: auto;
 border-radius: 50px;
 `

 const ImgCarrinho = styled.img
 `
 height: 5vh;
 width: auto;
 `

const FilterIcon = styled.button`
  //padding: 8px 8px 8px 8px;
  background-color: black;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

const CarrinhoIcon = styled.button`
  padding: 8px 8px 8px 8px;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;


////////////////////////busca celular

const SectionBusca = styled.section
`
  display: flex;
  align-items: center;
  margin: 20px 5px 20px 5px;
  background-color: #E0EEEE;
  border: solid 1px #5F9EA0;
  border-radius: 10px;
  width: 18vw;
  height: 41px;
  @media screen and (max-device-width: 1000px) {
    width: 70vw;
}

@media screen and (min-device-width: 700px) {
  display: none;
}

`

const ImgLupaBusca = styled.img
`
border-radius: 10px;
  float: left;
  width: auto;
  height: 40px;
  
`

const Input = styled.input`
    float: left;
    background-color: transparent;
    padding-left: 5px;
    font-size: 12px;
    border: none;
    height: 50px;
    width: 9vw;
    @media screen and (max-device-width: 1000px) {
    width: 40vw;
}
    
`

const BotaoPesquisa = styled.button`
border: none;
float: right;
height: 40px;
border-radius: 10px;
width: 10vw;
font-weight: bold;
background: #5F9EA0;
font-size: 14px;

@media screen and (max-device-width: 1000px) {
    width: 28vw;
}
`

/////////////////////////


function App() {

  ////////muda pagina celular////
  const [carrinhoAtivado, setCarrinhoAtivado] = useState(false)
  const [displayCarrinho, setDisplayCarrinho] = useState("display: none;")

  const [telaLoginAtiva, setTelaLoginAtiva] = useState(false)

  const mudarParaCarrinho = (valor) => {
    setCarrinhoAtivado(true)
    setDisplayCarrinho("display: flex;")
  }

  const mudarParaLista = (valor) => {
    setCarrinhoAtivado(false)
    setDisplayCarrinho("display: none;")
  }

  const mudarParaLogin = (valor) => {
    setTelaLoginAtiva(true)
  }

  const voltarParaLista = (valor) => {
    setTelaLoginAtiva(false)
    setValorCondicional(1)
  }

  ////////////////////login////////////////////
  const [valorCondicional, setValorCondicional] = useState(1)

  const mudarTela = (valor) => {
    setValorCondicional(valor)
  }

  // Resolução do exercício de fixação
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
       

      //case 2:
        //return <TelaCadastro mudarTela={mudarTela} />;
        //default:
       // return <TelaCadastroEndereco mudarTela={mudarTela}/>
    
//////////////////////////////////

  ////////busca celular
  const handleSearch = (e) => {
    setString(e.target.value);
  };
  ////////////////////

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

    //Funçoes
    const [string, setString] = useState("")//recebe o texto pesquisado
    let [valorMinimo, setValorMinimo] = useState("")
    let [valorMaximo, setValorMaximo] = useState("")
    let [listaCarrinho, setListaCarrinho] = useState([]);
    const [sortABC, setSortABC] = useState("");
    const [categoriaFilter, setCategoriaFilter] = useState("");

    let alertNaoEncontrado;

    ////////sem o filter/////////////
    // function pesquisar(textoDigitado)
    // {
    //   alertNaoEncontrado = 0
    //   if(textoDigitado === "")
    //   {
    //     for(let i=0; i<produtos.length; i++) 
    //     {
    //       produtos[i].display = "";
    //     }
    //   }
    //   else if(alertNaoEncontrado === 0)
    //   {
    //     for(let i=0; i<produtos.length; i++) 
    //     {
    //       produtos[i].display = "display: none;";
    //     }
    //     for(let i=0; i<produtos.length; i++) 
    //     {    
    //         if(produtos[i].nome.slice(produtos[i].length, textoDigitado.length).toLowerCase() === textoDigitado.toLowerCase())  //.toLowerCase().trim()
    //         {
    //             //console.log("o resultado da pesquisa foi: ", produtos[i].id);
    //             produtos[i].display = "";
    //             alertNaoEncontrado = 1
    //         }
    //     }
    //     if(alertNaoEncontrado === 0)
    //     {
    //       alertNaoEncontrado = 1
    //       //alert("ALERT item não encontrado")
    //       for(let j=0; j<produtos.length; j++) 
    //       {
    //         produtos[j].display = "";
    //       }
    //     }
    //   }
    // }
    ////////////////////////////////////////
    
    function pesquisarBotao(str)
    {
      //console.log(alertNaoEncontrado, str)
      if(alertNaoEncontrado === 1)
      {
        //alert("ALERT item não encontrado")
      }
    }
    
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
    };

    ////////////para reconhecer o texto mesmo com acentos////////////
    function retira_acentos(str) 
{

    let com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    let sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    let novastr="";
    for(let i=0; i<str.length; i++) {
        let troca=false;
        for (let a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
}       

let [quantidadeNaTela , setQuantidadeNaTela ] = useState([])
  return (

    <>  
    <GlobalStyle />
    <Header mudarParaLogin={mudarParaLogin}/>

    <BottomMenu>
      <MenuButtonLupa onClick = {mudarParaLista}>
      <FilterIcon > 
          <ImgLupa src={lupa} />
      </FilterIcon>
      </MenuButtonLupa>
      <MenuButtonCarrinho onClick = {mudarParaCarrinho}> 
      <CarrinhoIcon > 
          <ImgCarrinho src={carrinho}/>
      </CarrinhoIcon>
      </MenuButtonCarrinho>
    </BottomMenu>

    {renderizaTela()}
    {!telaLoginAtiva &&
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
      
      {!carrinhoAtivado && <DivCentro>  
        <DivItens>
        {quantidadeNaTela = produtos.filter((produto) => {
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
        {quantidadeNaTela.length === 0 && 
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

        <h5>Quantidade de itens: {quantidadeNaTela.length}</h5>
        {/* {listaProdutosnaTela = this.state.produtos} */}

        <SectionBusca>
                <ImgLupaBusca src={lupaBusca} alt="Buscar..." />
                <Input type="text" placeholder="Pesquisar..." value = {string}  onChange={handleSearch}/> {/*onClick={props.pesquisar(props.string)}/> */}
                <BotaoPesquisa onClick={() => pesquisarBotao(string)}>Buscar</BotaoPesquisa> 
        </SectionBusca>

      </DivCentro>}


      {/* {carrinhoAtivado && <Carrinho
      listaCarrinho = {listaCarrinho}
      removeCarrinho= {removeCarrinho}
      //setArrayAdicionarCarrinho= {setArrayAdicionarCarrinho} 
      /> } */}

      <Carrinho
      displayCarrinho ={displayCarrinho}
      listaCarrinho = {listaCarrinho}
      removeCarrinho= {removeCarrinho}
      //setArrayAdicionarCarrinho= {setArrayAdicionarCarrinho} 
      /> 
    </Container>}

    <Footer/>
    </>
  );
}

export default App;
