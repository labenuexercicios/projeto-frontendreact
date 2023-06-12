import { Filters, Form } from './FiltersStyle';


function Filter() {

  
    
  
    return (
        
        <Filters>
            <h1>Filters</h1>
            <Form>
                <label>Valor mínimo:</label>
                <input/>
                <label>Valor máximo:</label>
                <input/>
                <label>Busca por nome:</label>
                <input/>
            </Form>
        </Filters>
    )
}

export default Filter;