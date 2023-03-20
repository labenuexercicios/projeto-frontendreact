
import productList from "../assents/productsList"
import { Form } from "./FiltersStyle"

const Filters = (props) => {
    
    
    return (
        
        <Form>
            <h2>Filters</h2>
           <label htmlFor="Valor Minino"> Valor Minimo:
            <br/>
            <input 
            type="number"
            id="Valor Minino" 
            value={props.minFilter}
            onChange={(e)=>props.setMinFilter(e.target.value)}
            ></input>
           </label>
           <br/>
           <label htmlFor="Valor maximo"> Valor Máximo:
            <br/>
            <input 
            type="number" 
            id="Valor maximo"
            value={props.maxFilter}
            onChange={(e)=>props.setMaxFilter(e.target.value)}
            ></input>
           </label>
           <br/>
           <label htmlFor="Busca por nome"> Busca por nome:
            <br/>
            <input 
            type="text"
            id="Busca por nome"
            value={props.searchFilter}
            onChange={(e)=>props.setSearchFilter(e.target.value)}
            ></input>
           </label>

           
        </Form>
        
        

    )
}
export default Filters
