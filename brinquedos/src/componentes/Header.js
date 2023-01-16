import React from 'react';
import Product from './Produtos';
import Produtos from './Produtos';

export default function Header(props) {
  const onChangeFiltro=(Event)=>{
    props.setfiltro(Event.target.value);
  }
  const onChangePesquisa=(event)=>{
    props.setPesquisa(event.target.value);
    console.log(event.target.value)
  }

  
  return (
    <header className="block row center">
      <select onChange={(event) => onChangePesquisa(event)}>
            <option value="ordenado">Ordenado</option>
            <option value="crescente">Crescente</option>
            <option value="decrecente">Decrecente</option>
          </select>
      <input onChange={()=> onChangePesquisa}/>
      <input onChange={()=> onChangeFiltro}/>
      
      <div>
        <a href="#/">
          <h1>STAR WARS KIDS</h1>
        </a>
      </div>
      <div>
        <a href="#/carrinho">
          Carrinho{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/carrinho">Entrar</a>
      </div>
    </header>
  );
  
}