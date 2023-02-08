import { StyledCarrinho, StyledItens, StyledButton } from "./StyledCarrinho";

export const Carrinho = ({carrinho, removerCarrinho, setCarrinho, valorTotal}) => {
    
  
    return(
    <StyledCarrinho><p>Carrinho</p>
        {carrinho.map((satelite)=>{
            return(
            <StyledItens id={satelite.id}>
            <div>{satelite.nome}</div>
            <StyledButton id={Date.now()} onClick={()=>removerCarrinho(satelite.id)}>remover</StyledButton>
            </StyledItens>)
        })}
        <p>Valor Total: US${valorTotal}</p>
    </StyledCarrinho>
    )
} 