
import { useState } from "react"
import { ButtonAply, ButtonClean, CategoryContainer, FilterContainer, Input, InputContainer, Options, Select, Title1, Title2 } from "./Filter-styled"
import { SwitchButton } from "./SwitchButton/SwitchButton"


export const Filter = (props) => {
    const InputID = ["filmes","series","others"]
    const filtersCategory = [props.setCategoryFilms,props.setCategorySeries,props.setCategoryOthers]

    const [putMaxPrice, setPutMaxPrice] = useState(Infinity)
    const defineMaxPrice = () => {
        props.setMaxPrice (putMaxPrice)
    } 
    const [putMinPrice, setPutMinPrice] = useState(-Infinity)
    const defineMinPrice = () => {
        props.setMinPrice(putMinPrice)
    } 
const [putOrder, setPutOrder] = useState("")
const defineOrder = () => {
    props.setOrder(putOrder)
} 


    

    const clearFilter = () => {
        props.setMaxPrice (putMaxPrice)
        props.setMinPrice(putMinPrice)
        props.setOrder(putOrder)
        setPutMaxPrice(Infinity)
        setPutMinPrice(-Infinity)
        setPutOrder ("Selecione")
       
    }


    return (
        <FilterContainer>
            <Title1>Filtros</Title1>
            <Title2>Categorias</Title2>
            <InputContainer>
            <CategoryContainer>
                {InputID.map((id, index) => {
                    return (
                    <SwitchButton 
                    InputID = {id}
                    key = {index}
                    filter = {filtersCategory[index]}/>)
                     })}

            </CategoryContainer>
            <CategoryContainer>
            <label htmlFor="movies">Filmes</label>
            <label htmlFor="series">Séries</label>
            <label htmlFor="others">Outros</label>
            </CategoryContainer>
            </InputContainer>
          
            <Title2>Preço</Title2>
            
            <InputContainer>
            <label htmlFor="valorMax">Máximo - R$</label>
            <Input type="number" id="valorMax" placeholder="1000"
            value={putMaxPrice} onChange={(e)=>setPutMaxPrice(e.target.value)}/>
            </InputContainer>
            
            <InputContainer>
            <label htmlFor="valorMin">Mínimo - R$</label>
            <Input type="number" id="valorMin" placeholder="0"
            value={putMinPrice} onChange={(e)=>setPutMinPrice(e.target.value)}/>
            </InputContainer>

            <InputContainer>
            <label htmlFor="order">Ordenar por</label>
            <Select
            value={putOrder}
            onChange={(e)=>{setPutOrder(e.target.value)}}>
                <Options>Selecione</Options>
                <Options>A - Z</Options>
                <Options>Min - Máx</Options>
                <Options>Máx - Min</Options>
            </Select>
            </InputContainer>
            
            <ButtonAply
            onClick={()=>{defineMaxPrice(); defineMinPrice(); defineOrder()}}>Aplicar</ButtonAply>
            <ButtonClean
            onClick={()=>{clearFilter()}}>Limpar</ButtonClean>
        </FilterContainer>
    )
}