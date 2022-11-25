import React from "react";
import { formatarPreco } from "../../formatacaoPreco";
import carrinhoImagem from "../../imagem/carrinho-de-compras.png"
import { CarrinhoContainer, ItensCarrinho, SecaoPrecoFinal } from "./styled";

function Carrinho(props) {
    let totalPreco = 0

   const QtdTotalItemCarrinho = props.listaCarrinho.reduce(
    (acc, produto)=>{
        return produto.quantity + acc
    },0
   )

   const avisarCompraFinalizada = () => {
    if(QtdTotalItemCarrinho>0){

   
    alert("Compra concluida com sucesso!")
    const carrinhoString =JSON.stringify([])
    localStorage.setItem("carr", carrinhoString)
    props.setListaCarrinho([]) 
}else{
    alert("Carrinho vazinho, adicione um brinquedo!")
}
}

    // function avisarCompraFinalizada () {
    //     alert("Compra concluida com sucesso!")
    //     props.setListaCarrinho([])
    // }


    return (
        <CarrinhoContainer>
            <div className="posicaoImgCarrinho">
              <img src={carrinhoImagem} alt="" /> 
              <h1>CARRINHO ({QtdTotalItemCarrinho})</h1> 
              <img src={carrinhoImagem} alt="" />
           </div>

            <div className="posicaoItensCarrinho">
                <ItensCarrinho>
                    { props.listaCarrinho.length === 0? 
                    <p> Carrinho vazio</p> : 
                    props.listaCarrinho
                        .map((produto) => {                            
                            {totalPreco += Number(produto.preco)*(produto.quantity)}
                            return(
                            <section className="botoesCarrinho">
                                <p>Produto escolhido: {produto.produto}</p>
                                <p>Preço: {formatarPreco.format(produto.preco)}</p>
                                <p>Qtd: {produto.quantity}</p>        
                                <button className="removemItem" onClick={() => props.removeBrinquedo(produto.id)}>Remover ítem</button>
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