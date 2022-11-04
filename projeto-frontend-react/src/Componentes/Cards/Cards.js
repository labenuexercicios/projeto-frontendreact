import React from "react";
import {Card, ImagemPlanetas} from "./style";

function Cards (props) {
    return  <>
                <Card>
                    <ImagemPlanetas src={props.planeta.imagem} alt="imagem de planeta"/>
                    <p>{`Planeta: ${props.planeta.planeta}`}</p>
                    <p>{`Descrição: ${props.planeta.descricao}`}</p>
                    <p>{`Preço: ${props.planeta.preco}`}</p>
                    <p>{`Tempo de Viagem: ${props.planeta.tempoDeViagem}`}</p>
                </Card>
                
            </>
}

export default Cards