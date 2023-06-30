import { Inputs, PainelFiltro } from "./styled";

 function Filters(props){
   
return (
    <aside>
    <PainelFiltro >
<h2>Filtro</h2>
<Inputs>
<label htmlFor="">Valor mínimo</label>
<input type='number' value = {props.minFilter}  onChange={(e)=> props.setMinFilter(e.target.value)}/>
</Inputs>
<Inputs>
<label htmlFor="">Valor máximo</label>
<input type="number" value = {props.maxFilter} onChange={(e)=>props.setMaxFilter(e.target.value)} />
</Inputs>

<Inputs>
<label htmlFor="">Busca por Nome</label>
<input type="text" value = {props.searchFilter} onChange={(e)=>props.setSearchFilter(e.target.value)} />
</Inputs>
</PainelFiltro>
</aside>
    


);

}
 export default Filters;