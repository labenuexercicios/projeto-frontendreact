import React from "react";
import CardProduto from "../CardProduto/CardProduto";
import { ContainerListaItens} from "./styles";

export default function ListaDeItens (props){
    

    const {valorMinimo, valorMaximo, buscaNome, ordenacao, ordem ,listaProdutos}=props.estados2
    const{adicionarAoCarrinho} = props.funcoes2
    

//OBS: da pra encadear varios filter um apos o outro para fazer todos os filtros de uma vez e depois renderizar com o map. Tive um problema onde essa mesma logica não retornava o filtro de valor maximo, só resolveu quando fiz igual no exemplo da videoaula onde o professor colocou -infinity no usestate do valor minimo e infinity no state do valor maximo.
//OBS: retirei o infinity pq na hora de usar o useEffect tava dando problema, então transformei os valores minimo e maximo em number 
const renderizaLista = listaProdutos
    .filter((produto)=>{
        return produto.nome.toLowerCase().includes(buscaNome.toLowerCase())

    })
    .filter((produto)=>{
        return produto.preco >= Number(valorMinimo) || Number(valorMinimo) === Number("")

    })
    .filter((produto)=>{
        return produto.preco <= Number(valorMaximo) || Number(valorMaximo) === Number("")
    })
    .sort((produtoAtual, proximoProduto)=>{
        switch(ordenacao){
            case "preço":
            return produtoAtual.preco - proximoProduto.preco
            default:            
            return produtoAtual.nome.localeCompare(proximoProduto.nome)                      
        }
    })
    .sort(()=>{
        if(ordem === "cres"){
            return 0
        }else{
            return -1
        }

    })    
    .map((produto)=>{
   
        return <CardProduto
            key={produto.id}
            imagem={produto.imagem} 
            nome={produto.nome} 
            preco={produto.preco} 
            adicionarAoCarrinho={adicionarAoCarrinho}
            produto={produto}
            
        />
})  
    
    return(
        <>
        
        <ContainerListaItens>            
            {renderizaLista}
        </ContainerListaItens>
        </>
    )
}



    