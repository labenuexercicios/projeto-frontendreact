import React from 'react';
import { Estilodocarrinho, Estilodofiltro, Estilodopesquisar, Mudadisplaydetudo } from './instyle';
import { Filtro } from './Componentes/Filtro';
import { Carrinho } from './Componentes/Carrinho';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Mudadisplaydetudo>

      <Estilodopesquisar>
        fala cumpade titulo
      </Estilodopesquisar>


      <main>
        fala cumpade 2
      </main>

      <Estilodofiltro>
        <Filtro/>

      </Estilodofiltro>

      <Estilodocarrinho>
        <Carrinho/>
      </Estilodocarrinho>
    
    
    
    </Mudadisplaydetudo>
  );
}

export default App;
