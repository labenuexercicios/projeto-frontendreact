import { FilterContainer, TitleFilter, StyledLabel, TextLabel, Input} from "./styled";


export function Filter ({ minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter}) {

    function handleMinFilterChange(event){
        const value = event.target.value.trim() === "" ? null : parseInt(event.target.value);
        if(!isNaN(value) && value != null && value >= 0){
            setMinFilter(value)
        } else {
            setMinFilter(null)
        }
    }
    
    function handleMaxFilterChange(event){
        const value = event.target.value.trim() === "" ? null : parseInt(event.target.value);
        if(!isNaN(value) && value !== null && value >= 0){
            setMaxFilter(value)
        }  else {
            setMaxFilter(null)
        }
    }

    function handleSearchFilter(event){
        setSearchFilter(event.target.value);
    }

    return(
        <FilterContainer>
            <TitleFilter>Filtrar Produtos</TitleFilter>
            <StyledLabel htmlFor="valor-minimo">
                <TextLabel>Valor mínimo:</TextLabel>
                <Input id="valor-minimo" type="text" value={minFilter} onChange={handleMinFilterChange}/>
            </StyledLabel>
            
            <StyledLabel htmlFor="valor-maximo">
                <TextLabel>Valor máximo:</TextLabel>
                <Input id="valor-maximo" type="text" value={maxFilter} onChange={handleMaxFilterChange}/>
            </StyledLabel>
            
            <StyledLabel htmlFor="busca-nome">
                <TextLabel>Busca por nome:</TextLabel>
                <Input id="busca-nome" type="text" value={searchFilter} onChange={handleSearchFilter}/>
            </StyledLabel>    
        </FilterContainer>
    )
}