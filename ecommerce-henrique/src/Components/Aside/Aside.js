import React from "react";
import { Filtros } from "./Style";

export default function Header({
  nameFilter,
  setNameFilter,
  priceFilter,
  setPriceFilter,
  orderFilter,
  setOrderFilter,
  cart,
  setCart,
  addPlusItem,
}) {
  //funcao que captura o nome
  const handleName = (e) => {
    setNameFilter(e.target.value);
  };

  /// funcao que ordena
  const handleOrder = (e) => {
    setOrderFilter(e.target.value);
  };

  //funcao que calcula o valor total do carrinho
  const calcTotal = () => {
    return cart.reduce((acc, item) => acc + item.value * item.quantity, 0);
  };
  //funcao que remove do carrinho
  // const removeCart = (index) => {
  //   setCart((remove) => remove.filter((_, i) => i !== index));
  // };

  const removeCart = (produto) => {
    const listaSemProduto = cart.filter((item) => item !== produto);
    if(produto.quantity > 1){
      produto.quantity -= 1
    }else{setCart(listaSemProduto);}
  };


  // const removeUm = (id) => {
  //   const novoArray = cart.map((item) => {
  //     if (item.id === id) {
  //       item.quantity = item.quantity - 1;
  //     }return item;
  //   }
  //   );
  //   setCart(novoArray);
  // };

  const diminuiUm = (produto,id)=>{
    if(produto.quantity > 1){
      const novoArray = cart.map((item) =>{
        if (item.id === id) {
          item.quantity = item.quantity - 1;
        }return item;
      })
      setCart(novoArray);
    }else{removeCart(produto)}
  }




  const adicionarUm = (id) => {
    const novoArray = cart.map((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
      }
      return item;
    });
    setCart(novoArray);
  };


  return (
    <Filtros>
      <h1>Filters</h1>
      <select onChange={handleOrder} value={orderFilter}>
        <option value="">Order</option>
        <option value="decrescente">Descending</option>
        <option value="crescente">Growing</option>
      </select>
      <input
        type="text"
        placeholder="Search by Name"
        value={nameFilter}
        onChange={handleName}
      />

      <input
        type="number"
        placeholder="Search by Price"
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
      />

      <div className="cart">
        <br />
        <br />
        <h3>Cart:</h3>
        {cart.map((Data, index) => (
          <div key={index}>
            <span>{Data.name}</span>
            <br />
            <span>
              {Data.value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <br />
            <span>Quantidade={Data.quantity}</span>
            <br />
            <button onClick={() => diminuiUm(Data,Data.id)}>Remover</button>
            <button onClick={() => adicionarUm(Data.id)}>Adicionar</button>
          </div>
        ))}
      </div>
      <br />
      <br />
      <span>
        Total:{" "}
        {calcTotal().toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </Filtros>
  );
}
