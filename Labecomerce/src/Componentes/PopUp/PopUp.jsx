import {StyledPopUp} from "./StyledPopUp"


export const PopUp = ({produtos, clickId}) => {

    const clicado = produtos.filter((satelite)=>(satelite.id == clickId))[0]

    return(
        <StyledPopUp>
            <p>{clicado.nome}</p>
            <p>R${clicado.preco}</p>
            <p>{clicado.descricao}</p>
        </StyledPopUp>
    )
}