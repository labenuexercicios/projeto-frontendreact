import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useState } from "react";
import { CardCarrinho, CardItem } from "./style";

export default function Carrinho({ lista, item }) {
  const context = useContext(GlobalContext);
  const { addQuantidade, diminuirQuantidade } = context;

  console.log("lista", lista);
  const [quantidade, setQuantidade] = useState(0);

  //mudar pagina carrinho

  //valor total
 

  const valorTotal = lista.reduce((a, c) => a + ((c.valor).toFixed(2)) * c.quantidade, 0);

  return (
    <CardCarrinho>
      

      <CardItem>
      <h1>Carrinho</h1>
        {lista.map((item) => {
          console.log(item);
          return (
            <div className="cardcompra">
              
              {item.nome}
              <img src={item.imagem} />
              <h2> R${item.valor} ,00</h2>
              <p>Quantidade {item.quantidade}</p>
              <button onClick={() => addQuantidade(item.id)}>+</button>

              <button min="0" onClick={() => diminuirQuantidade(item.id)}>
                -
              </button>
              
            </div>
          );
        })}
         <div className="valor total"><h1>
          {`Valor Total:   R$   ${valorTotal}`}
       
          </h1>
        </div>

      </CardItem>
     
      
    </CardCarrinho>
  );
}
