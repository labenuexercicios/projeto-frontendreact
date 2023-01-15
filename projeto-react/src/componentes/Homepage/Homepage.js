
import AreaDeFiltros from "../AreaDeFiltros/AreaDeFiltros";
import Carrinho from "../Carrinho/Carrinho";
import ListaDeItens from "../ListaDeItens/ListaDeItens";

import { ContainerHomepage } from "./styles";



export default function Homepage (props){
    

    const{valorMinimo, valorMaximo, buscaNome, ordenacao, ordem ,listaProdutos, carrinho}=props.estados
    const {handleValorMinimo, handleValorMaximo, handleBuscaNome, handleOrdenacao, handleOrdem}=props.handles
    const {adicionarAoCarrinho, deletarDoCarrinho, limpar, valorTotal, quantidadeTotal,trocarPagina}= props.funcoes
    


return(
<ContainerHomepage>
    <ListaDeItens funcoes2={{adicionarAoCarrinho}} estados2={{valorMinimo, valorMaximo, buscaNome, listaProdutos, ordem, ordenacao}}/>
    <Carrinho estados2 = {carrinho} funcoes3={{deletarDoCarrinho, limpar, valorTotal, quantidadeTotal,trocarPagina}} />
    <AreaDeFiltros estados2={{valorMinimo,valorMaximo, buscaNome, ordem, ordenacao, listaProdutos}} handles2={{handleValorMinimo, handleValorMaximo, handleBuscaNome, handleOrdem, handleOrdenacao}}/>    
</ContainerHomepage>

)


}