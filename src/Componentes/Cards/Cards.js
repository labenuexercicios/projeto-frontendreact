import React from "react";
import {Card, ImagemProdutos, BotaoCarrinho,TextoCard, PrimeiroBloco, SegundoBloco} from "./style";
// import carrinhoImagem from "../../imagem/imagem-carrinho.svg"
import { formatarPreco } from "../../formatacaoPreco";

function Cards (props) {   
    
    return  (
        <Card>
            { <ImagemProdutos src={props.produto.imagem} alt="imagem de produtos"/> }
            <TextoCard>
            <SegundoBloco>
                    {/* <p>{`Id: ${props.produto.id}`}</p> */}
                    <p>{`Nome: ${props.produto.produto}`}</p>
                    <p>{`Preço: ${formatarPreco.format(props.produto.preco)}`}</p>
                </SegundoBloco>

                <PrimeiroBloco>                    
                    <BotaoCarrinho>
                        <button onClick={() =>props.addBrinquedo(props.produto)}>
                         Adicionar ao carrinho
                        </button>                         
                         {/* isOnCarrinho <span>x{produto.quantity}</span>  */}                     
                    </BotaoCarrinho> 
                </PrimeiroBloco>
                
            </TextoCard>
        </Card>
    )
}

export default Cards