import React from "react";
import { Card } from "../Card/Card";


export function Cart({listaCarrinho, setListaCarrinho, setItem}) {

    const removerDoCarrinho = (produto) => {
        setItem()
        const noCarrinho = listaCarrinho.find((item)=> item.id === produto.id)
        if (noCarrinho.quantidade > 1) {
          const removerProduto = listaCarrinho.map((item)=>{
            if (item.id === produto.id) {
              return {...noCarrinho, quantidade: noCarrinho.quantidade-1}
            } else {
              return item
            }
          })
          setListaCarrinho(removerProduto)
        } 
        else {
          const removerProduto = listaCarrinho.filter((item)=> {
            return item.id !== produto.id
          })
          setListaCarrinho(removerProduto)
          // localStorage.setItem("produto", JSON.stringify({}))
        }
      };    

    let total = 0;

    listaCarrinho.map((item) => {
      total += item.valor*item.quantidade
    });

    console.log(listaCarrinho);

    const renderizarCarrinho = listaCarrinho.map((produto) => {
        return (
            <Card key={produto.id}>
                <img src={produto.img} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p>{produto.valor}</p>
                <p>Quantidade: {produto.quantidade}</p>
                <button onClick={() => removerDoCarrinho(produto)}>Remover</button>
            </Card>
        )
    })

    return (
        <div>
        {renderizarCarrinho}
        <p>Total: R${total.toFixed(2)}</p>
        </div>
    )
}