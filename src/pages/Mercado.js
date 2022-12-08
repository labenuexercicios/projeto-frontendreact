import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleCart } from "../Router/coordinator";
import CardCompras from "../components/CardCompras/CardCompras";
import styled from "styled-components";
import Header from "../../src/components/Header/Header"
import Filtro from "../../src/components/Filtro/Filtro"
import  { createGlobalStyle} from "styled-components";
import { CartButton,Cart } from "../components/Header/styles";


export default function Mercado(props) {
  
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;

}
`;
    const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
  const { carrinho, setCarrinho, compras } = props;
  const [pesquisa, setPesquisa] = useState("");
  const [ordem, setOrdem] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const navigate = useNavigate();

  function comprar(id) {
    const i = carrinho.findIndex((item) => item.id === id);
    if (i !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[i] = {
        ...novoCarrinho[i],
        amount: novoCarrinho[i].amount + 1
      };
      setCarrinho(novoCarrinho);
    } else {
      const frutaEncontrada = compras.find((compra) => compra.id === id);
      const novaFruta = { ...frutaEncontrada, amount: 1 };
      const novaLista = [...carrinho, novaFruta];
      setCarrinho(novaLista);
    }
  }

  return (
   
    <>
    
      <CartButton onClick={() => handleCart(navigate)}>
      <Cart src="https://th.bing.com/th/id/R.3d8f712a76d6b1e9e6e01e8badd42a7d?rik=7DbXMWlhJBVnnA&pid=ImgRaw&r=0" alt=""/>
       </CartButton>
    
      
<GlobalStyle />
<Header/>
<Filtro
       pesquisa={pesquisa}
      setPesquisa={setPesquisa}
      ordem={ordem}
      setOrdem={setOrdem}
    min={min}
    setMin={setMin}
    max={max}
    setMax={setMax}

      />
<CardsContainer>
{compras.filter((compra) => {
            return compra.name.toLowerCase().includes(pesquisa.toLowerCase());
          })


          .filter((compra) => {
            return compra.price >= min || min === ""

            
          }).filter((compra) => {
            return compra.price <= max || max === ""
          })
         
          .sort((a,b) => {
          if (ordem === "Crescente"){
            if(a.name.english < b.name.english){
              return -1
            
            } else {
              return 1
            }

          }else if(ordem === "Decrescente"){
            if(a.name.english < b.name.english){
              return 1
            
            } else {
              return -1
            }

          }
        })

          
.map((compra) => {
            return (
              <CardCompras
                key={compra.id}
                compra={compra} 
                comprar={comprar}/>
         
          
                );
          })}
</CardsContainer>
     
</>
  );
}

/*
App
  Router
    Mercadinho
      CardFrutas
      - estado = frutas
*/
