import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleCart} from "../Router/cordinator";
import CardProds from "../components/CardProds";
import mercadorias from '../mercadorias.json';
import styled from "styled-components";


export default function HomePage({carrinho, setCarrinho}) {
    const [mercadoria, setMercadorias] = useState(mercadorias.mercadorias);
    const navigate = useNavigate();

    function comprar(id) {
        const i = carrinho.findIndex((item) => item.id === id);
        console.log(i);
        if (i !== -1) {
          carrinho[i] = { ...carrinho[i], amount: carrinho[i].amount + 1 };
          
        } else {
          const encontrarMercadoria = mercadorias.find((mercadorias) => mercadorias.id === id);
          const novaMercadoria = { ...encontrarMercadoria, amount: 1 };
          const Renderizacao = [...carrinho, (carrinho[1] = novaMercadoria)];
          setCarrinho(Renderizacao);
    }
}

    
    const mercadoriasRenderizados = mercadorias.map((mercadorias)=>{
        return <CardProds 
             key={mercadorias.id} 
                image={mercadorias.image}
                name={mercadorias.name} 
                price={mercadorias.price}
                id={mercadorias.id}
                comprar={comprar}
        >  </CardProds>
    })

return (
    <CardProdutos>
      <br/>
      <br/>
        <button onClick={() => handleCart(navigate)}>Vá para Carrinho </button>
        <br/>
        <MercadoriaContainer>
            {mercadoriasRenderizados}
        </MercadoriaContainer>
    </CardProdutos>
);
}
const MercadoriaContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const CardProdutos = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
