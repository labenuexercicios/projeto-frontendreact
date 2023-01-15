import { FiltersContainer } from "./styled";

export default function FiltersMain (props){
    const { sortingOrder, setSortingOrder } = props
    
    return (
              <FiltersContainer>
                <span>
                  <label for="sortingOrder">Ordenar por: </label>
                  <select
                    name="sortingOrder"
                    value={sortingOrder}
                    onChange={(e) => {setSortingOrder(e.target.value)}}
                >
                   <option value={"asc"}>Crescente</option>
                   <option value={"desc"}>Descrecente</option>  
                  </select>
                </span>
            </FiltersContainer>
    );
}