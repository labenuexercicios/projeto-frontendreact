import React from "react";
import {Card, ImagemPlanetas, BotaoCarrinho, TextoCard, PrimeiroBloco, SegundoBloco, ParagrafoValorPessoa} from "./style";
import carrinhoImagem from "../../imagem/imagem-carrinho.svg"
import { formatarPreco } from "../../formatacaoPreco";

function Cards (props) {
    
    return  (
        <Card>
            <ImagemPlanetas src={props.produto.imagem} alt="imagem do produto"/>
            <TextoCard>
                <PrimeiroBloco>
                    <p>{`Id: ${props.produto.id}`}</p>
                    <BotaoCarrinho>
                        <button onClick={() =>props.addProduto(props.produto)}>
                        <img src={carrinhoImagem} alt="" />
                        </button>
                    </BotaoCarrinho>
                </PrimeiroBloco>
                <SegundoBloco>
                    <p>{`Produto: ${props.produto.produto}`}</p>
                    <p>{`Descrição: ${props.produto.descricao}`}</p>
                    <p>{`Preço: ${formatarPreco.format(props.produto.preco)}`}</p>
                    {/* <span>{priceFormatter.format(product.price)}</span> */}
                    <ParagrafoValorPessoa>*** Única peça em estoque ***</ParagrafoValorPessoa>
                    
                </SegundoBloco>
            </TextoCard>
        </Card>
    )
}

export default Cards