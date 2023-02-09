import React, { useState } from "react";
import Product from "./Product";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove,setQuery,orderParam,min,max } = props;
  const itemsPreco = cartItems.reduce((a, c) => a + c.preco * c.qty, 0);
  const taxPreco = itemsPreco * 0.14;
  const totalPreco = itemsPreco + taxPreco;
  const {handleInputOrderParam,onChangeMax,onChangeMin}=props  

  const onChangeProduto = (event) =>{
    setQuery(event.target.value)
  };

  console.log("aqui e max ",max)
  console.log("aqui e min",min)
  
  return (
    <aside className="block col-1">
      <h2>Cart itens</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.id}</div>
          <div className="col-2">{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.preco.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">items preco</div>
            <div className="col-1 text-right">${itemsPreco.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-2">tax preco</div>
            <div className="col-1 text-right">${taxPreco.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>total preco</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPreco.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Compra efetuada")}>clique para finalizar </button>
          </div>
        </>
      )}
      <hr></hr>
      <div>
        <h3>Busca</h3>
        <input 
        type="text" 
        value={props.query} 
        placeholder="Buscar por nome" 
        onChange={(event) => onChangeProduto(event)} />
        <h3>Ordenar</h3>
        <select name="" id="" 
        value={orderParam} 
        onChange={handleInputOrderParam}>

          <option value="ordenar">Ordenar</option>
          <option value="Crescente">A-Z</option>
          <option value="Decrescente">Z-A</option>
          
        </select>

        <h3>filtrat preco</h3>
        <p>Min</p>
        <input type="text"
        value={min}
        onChange={onChangeMin}
        />
        <p>Max</p>
        <input type="text"
        value={max}
        onChange={onChangeMax}
        />
      </div>
    </aside>
  );
}
