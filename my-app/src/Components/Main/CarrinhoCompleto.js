import {ContainerPedido, BoxPedido, ResumoPedido, BoxPedidoEspaco, BoxPedidoProdutos, BoxPedidoProdutosItens} from "./styledCarrinhoCompleto"
import {useState, useEffect} from "react"

function CarrinhoCompleto(props){

    let totalCarrinho = 0
    let qtdTotalCarrinho = 0
    const cupom_premiado = "@DEVLOVERS"
    const [cupom, setCupom] = useState("")

    function onChangeCupom(event){
        setCupom(event.target.value)
    }

    const somaCarrinho = ()=>{
        for (let i = 0;i<props.carrinho.length;i++){
            totalCarrinho += props.carrinho[i].precototal
            qtdTotalCarrinho += props.carrinho[i].quantidade
        }
        return
    }

    somaCarrinho()

    const aumentaItem =(produto) =>{
        const carrinhoApoio = [...props.carrinho]
        for(let i=0;i<carrinhoApoio.length;i++){
            if(carrinhoApoio[i].id === produto.id){
            carrinhoApoio[i].quantidade = carrinhoApoio[i].quantidade + 1
            carrinhoApoio[i].precototal = carrinhoApoio[i].precototal + carrinhoApoio[i].preco
            }  
        }
        props.setCarrinho(carrinhoApoio)
    }

    const diminuiItem =(produto) =>{
        const carrinhoApoio = [...props.carrinho]
        console.log("Produto", produto)
        console.log("carrinhoApoio",carrinhoApoio)
        for(let i=0;i<carrinhoApoio.length;i++){
            if(carrinhoApoio[i].id === produto.id){
            carrinhoApoio[i].quantidade = carrinhoApoio[i].quantidade - 1
            carrinhoApoio[i].precototal = carrinhoApoio[i].precototal - carrinhoApoio[i].preco
            }       
        }
        const buscaItem = carrinhoApoio.filter((item) => item.quantidade > 0)
        props.setCarrinho(buscaItem)   
    }

    const frete = totalCarrinho < 200 ? 50 :  0
    const desconto =  cupom === cupom_premiado && totalCarrinho > 400 ? 200:0
    let totalCompra = (totalCarrinho + frete) - desconto  

    function finalizaPedido(){
        localStorage.clear()
        props.setCarrinho([]) 
        props.mudarTela(3)
    }

    return (
        <>
        <ContainerPedido>
            <BoxPedido>
                <div>
                    <div><h2>Meu Pedido</h2></div>
                    <BoxPedidoEspaco>
                        <span>Produto</span><span></span><span>Qtd.</span><span>Preço</span>
                    </BoxPedidoEspaco>
                    <div>
                        {props.carrinho.map((produto,index)=>{
                        return(
                        <BoxPedidoProdutos key={index}>
                        <BoxPedidoProdutosItens><span><img src={produto.imagem} alt="produto-carrinho"/></span><span>{produto.nome}</span><span></span><span><h4 onClick={()=>diminuiItem(produto)}>-</h4> {produto.quantidade} <h4 onClick={()=>aumentaItem(produto)}>+</h4></span><span><h4>R$ {produto.precototal.toFixed(2)}</h4></span></BoxPedidoProdutosItens>
                        </BoxPedidoProdutos>
                        )        
                        })}
                    </div>
                    <div>
                        <div>
                            <p><h4>Cupom de Desconto:</h4></p>
                            <input value={cupom} onChange={onChangeCupom} placeholder="Insira seu cupom ou vale desconto"></input>
                        </div>
                        <div>
                            <select>
                            <option value="">Forma de Pagamento</option>
                            <option value="Boleto">Boleto Bancário</option>
                            <option value="Credito">Cartão de Crédito</option>
                            <option value="Pix">Pix</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={()=>props.mudarTela(1)}>Adicionar mais produtos</button>
                        </div>
                    </div>
                </div>
            </BoxPedido>

            <ResumoPedido>
                <div>
                    <div><h2>Resumo Pedido</h2></div>
                    <div><span>x{qtdTotalCarrinho} produto</span><span>R$ {totalCarrinho.toFixed(2)}</span></div>
                    <div><span>Taxa de Entrega</span><span>R$ {frete}</span></div>
                    <div><span>Desconto</span><span>R$ {desconto}</span></div>
                    <div><span><h3>Total</h3></span><span><h3>R$ {totalCompra.toFixed(2)}</h3></span></div>
                    <div><button onClick={()=>finalizaPedido()}>Continuar</button></div>
                </div>
            </ResumoPedido>

        </ContainerPedido>           
        </>
    )
}

export default CarrinhoCompleto