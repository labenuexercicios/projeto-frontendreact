import React from "react";
import {ContainerPedido, BoxMeuPedido, ResumoPedido, BoxTitulos, 
BoxProdutos, BoxProdutosItens} from "./styleCarrinho"

const CarrinhoPage = ({carrinho, setCarrinho, mudarTela, }) => {
    
    let precoTotalCarrinho = 0
    let qtdTotalCarrinho = 0
    
    
    
    //Funão para somar valor e quantidade de produto dentro do carrinho
    const somaProduto = ()=>{
        for (let i = 0; i < carrinho.length; i++){
            precoTotalCarrinho += carrinho[i].precototal
            qtdTotalCarrinho += carrinho[i].quantidade
        }
        return
    }

    somaProduto()

    //Função para adicionar o mesmo produto dentro do carrinho
    const addProduto =(produto) =>{
        const carrinhoDois = [...carrinho]

        for(let i = 0; i < carrinhoDois.length; i++){
            if(carrinhoDois[i].id === produto.id){
            carrinhoDois[i].quantidade++
            carrinhoDois[i].precototal = carrinhoDois[i].precototal + carrinhoDois[i].preco
            }  
        }
        setCarrinho(carrinhoDois)
    }

    //Função para excluir o mesmo produto dentro do carrinho
    const excluiProduto =(produto) =>{
        const carrinhoDois  = [...carrinho]
        
        for(let i=0; i < carrinhoDois.length; i++){
            if(carrinhoDois[i].id === produto.id){
            carrinhoDois[i].quantidade--
            carrinhoDois[i].precototal = carrinhoDois[i].precototal - carrinhoDois[i].preco
            }       
        }
        const buscaItem = carrinhoDois.filter((item) => item.quantidade > 0)
        setCarrinho(buscaItem)   
    }

    const frete = precoTotalCarrinho < 200 ? 50 :  0
   
    let totalCompra = (precoTotalCarrinho + frete)  



   
    function finalizaPedido(){
        localStorage.clear()
        setCarrinho([]) 
        mudarTela(3)
    }

    return (
        <>
        <ContainerPedido>
            <BoxMeuPedido>
                <div>
                    <div><h2>Meu Pedido</h2></div>
                    <BoxTitulos>
                        <span>Produto</span><span></span><span>Quantidade</span><span>Preço</span>
                    </BoxTitulos>
                    <div>
                        {carrinho.map((produto,index)=>{
                        return(
                        <BoxProdutos key={index}>
                        <BoxProdutosItens><span><img src={produto.imagem} alt="produto-carrinho"/></span>
                        <span>{produto.nome}</span>
                        <span></span>
                        <span><h4 onClick={()=>excluiProduto(produto)}>-</h4>{produto.quantidade} 
                        <h4 onClick={()=>addProduto(produto)}>+</h4></span><span>
                        <h4>R$ {produto.precototal.toFixed(2)}</h4></span></BoxProdutosItens>
                        </BoxProdutos>
                        )        
                        })}
                    </div>
                    <div>
                        
                        
                       
                    </div>
                </div>
            </BoxMeuPedido>

            <ResumoPedido>
                <div>
                    <div><h2>Resumo Pedido</h2></div>

                    <div><span>{qtdTotalCarrinho} produto</span>
                    <span>R$ {precoTotalCarrinho.toFixed(2)}</span></div>

                    <div><span>Taxa de Entrega</span>
                    <span>R$ {frete}</span></div>

                    <div><span><h3>Total da compra</h3></span>
                    <span><h3>R$ {totalCompra.toFixed(2)}</h3></span></div>

                    <div>
                            <select>
                            <p><h4>Forma de pagamento</h4></p>
                            <option value="">Forma de Pagamento</option>
                            <option value="Boleto">Boleto Bancário</option>
                            <option value="Credito">Cartão de Crédito</option>
                            <option value="Pix">Pix</option>
                            </select>
                        </div>

                        <div>
                            <button onClick={()=>mudarTela(1)}>Adicionar mais produtos</button>
                        </div>

                    <div><button onClick={()=>finalizaPedido()}>Concluir compra</button></div>
                </div>
            </ResumoPedido>

        </ContainerPedido>           
        </>
    )
}

export default CarrinhoPage