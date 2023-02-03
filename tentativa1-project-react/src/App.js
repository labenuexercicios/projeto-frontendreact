import React, { useState } from 'react';
import { Estilodocarrinho, Estilodofiltro, Estilodopesquisar, Estilodositens, Mudadisplaydetudo } from './instyle';
import { Filtro } from './Componentes/Filtro';
import { Carrinho } from './Componentes/Carrinho';
import { Teladeitens } from './Componentes/Teladeitens';
// import logo from './logo.svg';
// import './App.css';

function App() {
  
  let arraydositens = []

  const [item1, setItem1] = useState({
    nome: "Jinko",
    geracao: 450,
    saf: "Sim",
    preco: 14000.00
  })

  const [item2, setItem2] = useState({
    nome: "Canadian",
    geracao: 465,
    saf: "Sim",
    preco: 12500.00
  })

  const [item3, setItem3] = useState({
    nome: "Trina",
    geracao: 565,
    saf: "Não",
    preco: 13500.00
  })

  arraydositens.push(item1, item2, item3);
  console.log(arraydositens)

  const [vlmax, setVlmax] = useState(0)
  const [vlmin, setVlmin] = useState(0)
  const [vlnome, setVlnome] = useState("")
  const [filtromaxTeste, setFiltomaxteste] = useState(0)
  const [filtrominTeste, setFiltominteste]  = useState(0)
  const [adicionacarrinho, setAdicionacarrinho] = useState(0);



  return (
    <Mudadisplaydetudo>

      <Estilodopesquisar>
        fala cumpade titulo
      </Estilodopesquisar>


      <main>
        fala cumpade 2
      </main>


      <Estilodofiltro>
        <Filtro
        filtromaxTeste = { filtromaxTeste}
        filtrominTeste = {filtrominTeste}
        setFiltomaxteste = {setFiltomaxteste}
        setFiltominteste = {setFiltominteste}
        vlmax = {vlmax}
        setVlmax = {setVlmax}
        vlmin = {vlmin}
        setVlmin = {setVlmin}
        vlnome = {vlnome}
        setVlnome = {setVlnome}
        
        />

      </Estilodofiltro>
      
      <Estilodositens>
    {filtromaxTeste === 1 && filtrominTeste === 1  ? (
        <Teladeitens
      item1 = {item1}
      setItem1 = {setItem1}
      item2 = {item2}
      setItem2 = {setItem2}
      item3 = {item3}
      setItem3 = {setItem3}
      adicionacarrinho = {adicionacarrinho}
      setAdicionacarrinho = {setAdicionacarrinho}
      arraydositens = {arraydositens}
        />
      ) : (

        <div></div>
      )}
      </Estilodositens>

      <Estilodocarrinho>
      {/* {adicionacarrinho === 1 ? (
           <Carrinho
           item1 = {item1}
           item2 = {item2}
           item3 = {item3}
           /> 
      ) : (<p></p>)} */}
      </Estilodocarrinho>
    
    
    
    </Mudadisplaydetudo>
  );
}

export default App;
