import {
    FilterContainer,
    DivCatFilter,
    FilterTitulo,
    CatFilter,
    SliderInput,
    InputPreco,
    LabelFilter,
    InputCatFilter
} from './Filter.styled'

export default function Filter() {
    return (
        <FilterContainer>
            <FilterTitulo>Filtrado por:</FilterTitulo>
            <DivCatFilter>
                <CatFilter>Faixa de preco</CatFilter>
                <SliderInput />//slider
                <LabelFilter>Preço Minimo</LabelFilter>
                <InputPreco />//min
                <LabelFilter>Preço Maximo</LabelFilter>
                <InputPreco />//min
            </DivCatFilter>
            <DivCatFilter>
                <CatFilter>Categoria</CatFilter>
                <LabelFilter>Livros</LabelFilter>
                <InputCatFilter />
                <LabelFilter>Brinquedos</LabelFilter>
                <InputCatFilter />
                <LabelFilter>Roupas</LabelFilter>
                <InputCatFilter />
            </DivCatFilter>
            <DivCatFilter>
                <CatFilter>Subcategoria</CatFilter>
                <LabelFilter>aaaaaa</LabelFilter>
                <InputCatFilter />
                <LabelFilter>b</LabelFilter>
                <InputCatFilter />

            </DivCatFilter>
            <DivCatFilter>
                <CatFilter>Idade</CatFilter>
                <LabelFilter>0 a 2 anos</LabelFilter>
                <InputCatFilter />
                <LabelFilter>1 a 2</LabelFilter>
                <InputCatFilter />
                <LabelFilter>2 a 3</LabelFilter>
                <InputCatFilter />
                <LabelFilter>3 a 4</LabelFilter>
                <InputCatFilter />
            </DivCatFilter>
            <DivCatFilter>
                <CatFilter>Marca</CatFilter>
                <LabelFilter>a</LabelFilter>
                <InputCatFilter />
                <LabelFilter>b</LabelFilter>
                <InputCatFilter />
                <LabelFilter>c</LabelFilter>
                <InputCatFilter />
                <LabelFilter>d</LabelFilter>
                <InputCatFilter />
            </DivCatFilter>

        </FilterContainer>


    )


}