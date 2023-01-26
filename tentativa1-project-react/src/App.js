import React, { useState } from 'react';
import { Estilodocarrinho, Estilodofiltro, Estilodopesquisar, Estilodositens, Mudadisplaydetudo } from './instyle';
import { Filtro } from './Componentes/Filtro';
import { Carrinho } from './Componentes/Carrinho';
import { Teladeitens } from './Componentes/Teladeitens';
// import logo from './logo.svg';
// import './App.css';

function App() {

  const [vlmax, setVlmax] = useState(0)
  const [vlmin, setVlmin] = useState(0)
  const [vlnome, setVlnome] = useState("")
  const [filtromaxTeste, setFiltomaxteste] = useState(0)
  const [filtrominTeste, setFiltominteste]  = useState(0)



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

        />
      ) : (

        <div></div>
      )}
      </Estilodositens>

      <Estilodocarrinho>
        <Carrinho/>
      </Estilodocarrinho>
    
    
    
    </Mudadisplaydetudo>
  );
}

export default App;
