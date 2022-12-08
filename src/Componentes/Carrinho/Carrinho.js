import React from "react";
import { formatarPreco } from "../../formatacaoPreco";
import { CarrinhoContainer, ItensCarrinho, SecaoPrecoFinal } from "./styled";

function Carrinho(props) {
    let totalPreco = 0

    function avisarCompraFinalizada () {
        alert("Parabéns! Você finalizou a sua compra!")
        props.setListaCarrinho([])
    }

    return (
        <CarrinhoContainer>
            <h1>CARRINHO</h1>
            <div>
                <ItensCarrinho>
                {props.listaCarrinho
                .map((produto) => {
                    {totalPreco += Number(produto.preco)}
                    return(<section>
                        <p>Produto escolhido: {produto.produto}</p>
                        <p>Valor individual: {formatarPreco.format(produto.preco)}</p>
                        <button onClick={() => props.removeProduto(produto)}>Remover</button>
                    </section>)
                })
                }
                </ItensCarrinho>
                <SecaoPrecoFinal>
                    <p>
                        {`Preço total: ${formatarPreco.format(totalPreco)}`}
                    </p>
                    <button onClick={avisarCompraFinalizada}>Finalizar compra</button>
                </SecaoPrecoFinal>
            </div>
        </CarrinhoContainer>
    )
}

export default Carrinho