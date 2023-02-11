import { SelectStyled, FiltersStyledContainer, InputStyled, ContainerPriceMinMaxStyled, ButtonCartStyled } from "./FiltersStyled"

export default function Filters({filterByName, setFilterByName, filterSort, setFilterSort, filterPriceMin, setFilterPriceMin, filterPriceMax, setFilterPriceMax, change}) {
    const inputFilterByName = (item) => {
        setFilterByName(item.target.value)
    }

    const selectFilterSort = (item) => {
        setFilterSort(item.target.value)
    }

    const inputFilterPriceMin = (item) => {
        setFilterPriceMin(item.target.value)
    }

    const inputFilterPriceMax = (item) => {
        if (item.target.value === '') {
        setFilterPriceMax(Infinity);
        } else {
        setFilterPriceMax(item.target.value);
        }
        }

    return (
        <FiltersStyledContainer>
            <InputStyled
                type="text"
                placeholder="Search a product"
                onChange={inputFilterByName}
                value={filterByName}
            />
            <SelectStyled value={filterSort} onChange={selectFilterSort}>
                <option value="">Sort</option>
                <option value="crescent">Crescent by Price</option>
                <option value="decrescent">Descending by Price</option>
            </SelectStyled>
            <ContainerPriceMinMaxStyled>
            
            <InputStyled
                type="number"
                placeholder="Minimum price"
                onChange={inputFilterPriceMin}
                value={filterPriceMin}
            />
            
            <InputStyled
                type="number"
                placeholder="Maximum price"
                onChange={inputFilterPriceMax}
                value={filterPriceMax === Infinity ? '' : filterPriceMax}
            />
            <ButtonCartStyled onClick={() => change(2)}>Cart</ButtonCartStyled>
            </ContainerPriceMinMaxStyled>
        </FiltersStyledContainer>
    )
} 