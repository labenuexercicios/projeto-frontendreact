import { FilterContainer, TitleFilter, StyledLabel, TextLabel, Input} from "./styled";


export function Filter () {
    return(
        <FilterContainer>
            <TitleFilter>Filtrar Produtos</TitleFilter>
            <StyledLabel htmlFor="valor-minimo">
                <TextLabel>Valor mínimo:</TextLabel>
                <Input id="valor-minimo" type="number" />
            </StyledLabel>
            
            <StyledLabel htmlFor="valor-maximo">
                <TextLabel>Valor máximo:</TextLabel>
                <Input id="valor-maximo" type="number" />
            </StyledLabel>
            
            <StyledLabel htmlFor="busca-nome">
                <TextLabel>Busca por nome:</TextLabel>
                <Input id="busca-nome" type="text" />
            </StyledLabel>    
        </FilterContainer>
    )
}