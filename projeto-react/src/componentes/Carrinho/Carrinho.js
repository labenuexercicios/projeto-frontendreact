
import CardCarrinho from "../CardCarrinho/CardCarrinho";

import { ContainerCarrinho, Lista } from "./styles";


export default function Carrinho(props) {

    const carrinho = props.estados2
    const {deletarDoCarrinho, limpar, valorTotal, quantidadeTotal,trocarPagina} = props.funcoes3
   
    
 
    
    const produtosCarrinho = carrinho.map((produto) => {
        return (
            
            <CardCarrinho
                key={produto.id}
                imagem={produto.imagem}
                nome={produto.nome}
                preco={produto.preco}
                quantidade={produto.quantidade}
                deletarDoCarrinho={deletarDoCarrinho}
                produto={produto}
                
            />

        )
    })

    

    return (

        <ContainerCarrinho>

            <h2>Carrinho de compras</h2>
            <Lista>
                {produtosCarrinho}


            </Lista>
            <p>Valor Total: {valorTotal}</p>
            <p>Quantidade Total: {quantidadeTotal}</p>
            
            <button onClick={limpar}> Limpar Carrinho</button>
            <br/>
            
            <button onClick={()=>trocarPagina("paginaDetalhada")}> Finalizar Compar</button>
        </ContainerCarrinho>

    )

}