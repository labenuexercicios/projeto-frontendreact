import { createContext } from "react";






export const TODOS_PRODUTOS = [
  {
    id: 1,
    name: "produto 1",
    value: 10000.0,
    imageUrl: "https://picsum.photos/300/335?a=1",
  },
  {
    id: 2,
    name: "Exemplo 2",
    value: 5000.0,
    imageUrl: "https://picsum.photos/300/335?a=2",
  },
  {
    id: 3,
    name: "Item 3",
    value: 500.0,
    imageUrl: "https://picsum.photos/300/335?a=3",
  }
];


export const ProdutosContext =  createContext();
export const CarrinhoContext = createContext();
