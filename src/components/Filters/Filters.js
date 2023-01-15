
export default function Filters (props){
    const {query, setQuery, minPrice, setMinPrice, 
        maxPrice, setMaxPrice } = props

    return (
        <div class='block col-1'>
            <h3>Filtros</h3>
            <input 
                placeholder="Preço mínimo"
                type="number"
                value={minPrice}
                onChange={(e)=>{setMinPrice(e.target.value)}}
            />
            <input 
                placeholder="Preço máximo"
                type="number"
                value={maxPrice}
                onChange={(e)=>{setMaxPrice(e.target.value)}}
            />
            <input 
                placeholder="Pesquisa"
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}
            />
        </div>
    );
}