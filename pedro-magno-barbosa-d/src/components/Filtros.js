import React from "react";

export default function Filtro(props) {
const resnderList = destiny
.filter(travel => buscarDestino === "" || travel.name.toLowerCase().includes(buscarDestino))
.filter(travel => valorMaximo === "" || travel.value <= (+valorMaximo))
.filter(travel => valorMinimo === "" || travel.value >= (+valorMinimo)) 
.sort((a, b) => cresDec === "" || cresDec === "asc" && a.name > b.name ? 1 : -1)
.sort((a, b) => cresDec === "" || cresDec === "desc" && a.name > b.name ? -1 : 1)
.map(travel => {
    
    return (
        <Products
            img={travel.image}
            name={travel.name}
            local={travel.local}
            value={travel.value}/>
    )


} )


const handleBuscarDestino = (event) => setBuscarDestino(event.target.value)
const handleValorMaximo = (event) => setValorMaximo(event.target.value)
const handleValorMinimo = (event) => setValorMinimo(event.target.value)
const handleCresDec = (event) => setCresDec(event.target.value)





<aside>
            <form>  
          
           <h4>Buscar Pacotes de Turismo</h4>
            <input type="text" onChange={handleBuscarDestino}/>

            <h4>valor Máximo</h4>
            <input type="number" onChange={handleValorMaximo}/>

            <h4>Valor Mínimo</h4>
            <input type="number" onChange={handleValorMinimo}/>

            <h4>Ordenar</h4>
            <select onChange={handleCresDec}>
                <option value="asc">Crescente</option>
                <option value="desc">Decrescente</option>
            </select>
          
            </form>  
 
</aside>