import { StyledFilter, StyledH2, StyledP, StyledInput } from "./FiltersStyle";



export default function Filters() {
    return (
        
        <StyledFilter>
            <StyledH2>Filters</StyledH2>
            
            <StyledP>Valor minímo:</StyledP>
            <StyledInput></StyledInput>

            <StyledP>Valor máximo:</StyledP>
            <StyledInput></StyledInput>

            <StyledP>Busca por nome:</StyledP>
            <StyledInput></StyledInput>

        </StyledFilter>
    );
}