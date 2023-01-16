import React from "react";
import Product from "./Product";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove,query,orderParam } = props;
  const {handleInputOrderParam,handleInputQuery}=props
  const itemsPreco = cartItems.reduce((a, c) => a + c.preco * c.qty, 0);
  const taxPreco = itemsPreco * 0.14;
  const totalPreco = itemsPreco + taxPreco ;
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
          <hr/>
          <div className="row">
            <button onClick={()=> alert('Compra efetuada')}>clique para finalizar </button>
          </div>
        </>
      )}
      <hr></hr>
      <div> 
        <h3>busca</h3>
        <input 
        type="text"
        value={query}
        onChange={handleInputQuery}
        />
        <h3>ordenar</h3>
        <select 
        name="" 
        id=""
        value={orderParam}
        onChange={handleInputOrderParam}
        >
          <option value="">selecione</option>
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </select>
        {/* <h3>filtrat preco</h3>
        <input type="text" /> */}
      </div>
    </aside>
   
  );
}
