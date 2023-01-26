import React, { useState } from "react";
import {ButtonContainer,CarrinhoContainer,ListaItem,MapContainer } from "./styled";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

export const Carrinho = (props) => {
    const { ListaCarrinho } = props;
    const context = useContext(GlobalContext);
    const { addQuantidade, diminuirQuantidade } = context;
    const [quantidade, setQuantidade] = useState(0);
    
    return (
    <CarrinhoContainer>
        <ButtonContainer>
        <button onClick={() => props.setPagina(1)}>Home</button>
        </ButtonContainer>
        <MapContainer>
            <p>Compro a nave</p>
            ${ListaCarrinho.reduce((acumula , item)=> acumula + item.quantidade * item.preco , 0)}M
           
        
        {ListaCarrinho.map((item) => {
            return (
            <ListaItem>
                key={item.id}
                <img src={item.imagem} />
                {item.id}
                {item.nome}
                {item.modelo}
                ${item.preco}M
                {item.quantidade}
                <div className="button">
                <button onClick={() => setQuantidade(addQuantidade(item.id))}>+</button>
                <button min="0" onClick={() => setQuantidade(diminuirQuantidade(item.id))}>-</button>
                </div>
                
            </ListaItem>
            );
        })}
        </MapContainer>
    </CarrinhoContainer>
    );
};
