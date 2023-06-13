import { Filters, Form } from './FiltersStyle';


function Filter(props) {

    const { searchFilter } = props
    const { minFilter } = props
    const { maxFilter } = props

    const handleSearch = (e) => {
        props.setSearchFilter(e.target.value);
    };

    const handleMin = (e) => {
        props.setMinFilter(e.target.value);
    };

    const handleMax = (e) => {
        props.setMaxFilter(e.target.value);
    };
    
    
  
    return (
        
        <Filters>
            <h1>Filters</h1>
            <Form>
                <label>Valor mínimo:</label>
                <input
                // type="number"
                placeholder="Valor mínimo"
                onChange={handleMin}
                value={minFilter}
                />

                <label>Valor máximo:</label>
                <input
                // type="number"
                placeholder="Valor máximo"
                onChange={handleMax}
                value={maxFilter}
                />

                <label>Busca por nome:</label>
                <input
                type="text"
                placeholder="Busca por nome"
                onChange={handleSearch}
                value={searchFilter}
                />
            </Form>
        </Filters>
    )
}

export default Filter;