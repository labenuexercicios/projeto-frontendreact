import React from "react";
import { formatarPreco } from "../formatacaoPreco";
import carrinhoImagem from "../imagem/carrinho-de-compras.png"
import { CarrinhoContainer, ItensCarrinho, SecaoPrecoFinal } from "./styled";

function Carrinho(props) {
    let totalPreco = 0

   const avisarCompraFinalizada = () => {
    if(props.QtdTotalItemCarrinho > 0){

   
    alert("Compra concluida com sucesso!")
    const carrinhoString =JSON.stringify([])
    localStorage.setItem("carr", carrinhoString)
    props.setListaCarrinho([]) 
  }else{
    alert("Carrinho vazinho, adicione um brinquedo!")
  }
  }  
  const voltarTelaPrincipal =() =>{
    props.setGoToCarrinho(1)
}


    return (
        <CarrinhoContainer>
            <div className="posicaoImgCarrinho">
              <img src={carrinhoImagem} alt="" /> 
              <h1>CARRINHO ({props.QtdTotalItemCarrinho})</h1> 
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
                    <div>
                    <button onClick={avisarCompraFinalizada}>Finalizar compra</button>                    
                    <button onClick={()=>voltarTelaPrincipal()}><h4>Continue comprando</h4></button>  
                    </div>
                </SecaoPrecoFinal>
                
            </div>
            
        </CarrinhoContainer>
            )}

export default Carrinho