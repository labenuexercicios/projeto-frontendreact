import React from "react";
import { Card, CardContainer } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const CardNave = (props) => {
    const context = useContext(GlobalContext);
    const { addNave } = context;

    return (
        <CardContainer>
            <Card>
                <img className="img" src={props.item.imagem} />
                {props.item.id}
                {props.item.nome}
                {props.item.modelo}
                {props.item.descricao}
                ${props.item.preco}M
                <button onClick={() => addNave(props.item)}>comprar</button>
            </Card>
        </CardContainer>
    );
};
