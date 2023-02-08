import {StyledPopUp, StyledButton} from "./StyledPopUp"


export const PopUp = ({produtos, clickId, adicionarCarrinho}) => {

    const clicado = produtos.filter((satelite)=>(satelite.id == clickId))[0]

    return(
        <StyledPopUp>
            <p>{clicado.nome}</p>
            <p>R${clicado.preco}</p>
            <p>{clicado.descricao}</p>
            <StyledButton onClick={()=>adicionarCarrinho(clicado)}>Adicionar ao Carrinho</StyledButton>
        </StyledPopUp>
    )
}