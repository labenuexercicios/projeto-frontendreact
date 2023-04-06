import { StyledPopUpFilter, StyledButton, StyledButtonSection } from "./styledPopUpFilter"

export const PopUpFilter = ({valorMax, valorMaxHandler, valoresHandler, resetValores, valorMin, valorMinHandler, buscaNome, buscaNomeHandler}) => {
    return (
        <StyledPopUpFilter>
            <p>Filtre os produtos</p>
            <label>Valor Mínimo:</label>
            <input value = {valorMin} onChange = {valorMinHandler} type={"number"}/>
            <label>Valor Máximo:</label>
            <input value = {valorMax} onChange = {valorMaxHandler} type={"number"}/>
            <label>Busca por nome:</label>
            <input value = {buscaNome} onChange = {buscaNomeHandler} type={"text"}/>
            <StyledButtonSection>
            <StyledButton onClick = {valoresHandler}>Filtrar</StyledButton>
            <StyledButton onClick = {resetValores}>Zerar Filtro</StyledButton>
            </StyledButtonSection>
        </StyledPopUpFilter>
    )
}