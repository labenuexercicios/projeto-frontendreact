import React, { useEffect, useState } from "react";
import Carrinho from "./Componentes/Carrinho/Carrinho";
import { Carrinhostyle } from "./Componentes/Carrinho/Carrinhostyle";
import kits from "./Componentes/Database/Database.json"
import Filtro from "./Componentes/Filtro/Filtro";
import { Filtrostyle } from "./Componentes/Filtro/Filtrostyle";
import Header from "./Componentes/Header/Header";
import { StyleofHeader, Styleofheaderright } from "./Componentes/Header/Headerstyle";
import Main from "./Componentes/Main/Main";
import { Mainstyle, Mainstylebody, Mainstylecontador, Mainstyleordena, Mainstyletitle } from "./Componentes/Main/Mainstyle";

import Maintitle from "./Componentes/Main/Maintitle";
import { StyleOfApp } from "./Styleapp";

function App() {

  //Cria hooks pra manipular os valores
  const [vlmax, setVlmax] = useState(0);
  const [vlmin, setVlmin] = useState(0);
  const [vlnome, setVlnome] = useState("");
  const [vlordena, setVlordena] = useState("");

  const [pegaosvaloresdovetor, setpegaosvaloresdovetor] = useState([]);
  
  const [pegavlcompra, setPegavlcompra] = useState(0);
  // const [contadorcarrinho, setContadorcarrinho] = useState(0);
  // console.log(pegavlcompra)
  
  const [salvaItens, setSalvaitens] = useState([]);
  console.log(salvaItens)

  const [vetorQueguardaositens, setVetorqueguardaositens] = useState([]);
  const [chamaCarrinho, setChamacarrinho] = useState(0)

  const [guardaid, setGuardaid] = useState(0)
  

  useEffect(() =>{
    const listaDeitensstorage = JSON.parse(localStorage.getItem("Lista dos itens"))
    if(listaDeitensstorage){
      setVetorqueguardaositens(listaDeitensstorage)
    }
  }, [])

  //Faz filtro e retornar os itens q vao mostrar na main
  const variavelteste = kits.filter((kit) =>{
            return kit.nome.toLowerCase().includes(vlnome.toLowerCase())
          })
          .filter((kit) =>{
            return vlmin ? kit.preco <= vlmin : kit

          })
          .filter((kit) =>{
            return vlmax ? kit.preco <= vlmax : kit
          })
          .sort((atual, proximo) => {
            if(vlordena === "Crescente"){
              if(atual.nome < proximo.nome){
                return -1;
              }
              else if(atual.nome > proximo.nome){
                return 1;
              }
              else{
                return kits;
              }
            }
            if(vlordena === "Decrescente"){
              if(atual.nome < proximo.nome){
                return 1;
              }
              else if(atual.nome > proximo.nome){
                return -1;
              }
              else{
                return kits;
              }
            }
            else{
              return kits;
            }
          })
          .map((kit) =>{
            return(
              <Main
              vlmax = {vlmax}
              vlmin = {vlmin}
              vlnome = {vlnome}
              kits = {kits}
              kit = {kit}
              pegavlcompra = {pegavlcompra}
              setPegavlcompra = {setPegavlcompra}
              // contadorcarrinho = {contadorcarrinho}
              // setContadorcarrinho = {setContadorcarrinho}
              vetorQueguardaositens = {vetorQueguardaositens}
              setVetorqueguardaositens = {setVetorqueguardaositens}
              chamaCarrinho = {chamaCarrinho}
              setChamacarrinho = {setChamacarrinho}
              pegaosvaloresdovetor = { pegaosvaloresdovetor}
              setpegaosvaloresdovetor = {setpegaosvaloresdovetor}
              guardaid = {guardaid}
              setGuardaid = {setGuardaid}
              salvaItens = {salvaItens}
              setSalvaitens = {setSalvaitens}

              />
            )
          })


  return (
    <div>
      <StyleOfApp>
        <StyleofHeader>
          <Styleofheaderright>
            <div>
                header3
            </div>
          </Styleofheaderright>
          <Header/>
        </StyleofHeader>
        <Filtrostyle>
          <Filtro
          vlmax = {vlmax}
          setVlmax = {setVlmax}
          vlmin = {vlmin}
          setVlmin = {setVlmin}
          vlnome = {vlnome}
          setVlnome = {setVlnome}
          />
        </Filtrostyle>
        <Mainstyle>
          <Mainstyletitle>
            <Mainstylecontador>
              <h3>Contador: {variavelteste.length}</h3>
            </Mainstylecontador>
            <Mainstyleordena>
              <Maintitle
                vlordena = {vlordena}
                setVlordena = {setVlordena}
              />
            </Mainstyleordena>
          </Mainstyletitle>
          <Mainstylebody>
          {variavelteste}
          </Mainstylebody>
        </Mainstyle>
        <Carrinhostyle>

          <Carrinho
            pegavlcompra = {pegavlcompra}
            setPegavlcompra = {setPegavlcompra}
            // contadorcarrinho = {contadorcarrinho}
            chamaCarrinho = {chamaCarrinho}
            setChamacarrinho = {setChamacarrinho}
            vetorQueguardaositens = {vetorQueguardaositens}
            setVetorqueguardaositens = {setVetorqueguardaositens}
            pegaosvaloresdovetor = { pegaosvaloresdovetor}
            setpegaosvaloresdovetor = {setpegaosvaloresdovetor}
            guardaid = {guardaid}
            setGuardaid = {setGuardaid}
            salvaItens = {salvaItens}
            setSalvaitens = {setSalvaitens}
          />
        </Carrinhostyle>
      </StyleOfApp>
    </div>

  );
}

export default App;
