// import styled from "styled-components"
import Header from "./Componentes/Header/Header"
import Main from "./styled"
import { useState } from "react"
import todasViagens from "./objetos"
import Cards from "./Componentes/Cards/Cards"

function App(props) {
  
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [query, setQuery] = useState("")
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState("asc")

  return (
    <div>
      <Header
        minPrice = {minPrice}
        setMinPrice = {setMinPrice}
        maxPrice = {maxPrice}
        setMaxPrice = {setMaxPrice}
        query = {query}
        setQuery = {setQuery}
        sortingParameter = {sortingParameter}
        setSortingParameter = {setSortingParameter}
        order = {order}
        setOrder = {setOrder}

      >
      </Header>
      <Main>
        {todasViagens
        .filter((item) => {
          return item.planeta.toLocaleUpperCase().includes(query.toLocaleUpperCase()) 
        })
        .filter((item) => {
          return item.preco >= minPrice || minPrice === ""
        })
        .filter((item) => {
          return item.preco <= maxPrice || maxPrice === ""
        })
        .sort((a, b) => {
          return a.preco - b.preco
        })
        .sort(() => {
          if (order === "asc"){
            return 0
          } else {
            return -1
          }
        })
        .map((planeta)=>{
          return (
            <Cards  
              key={planeta.id}
              planeta={planeta}>
            </Cards>
          )
        })}
      </Main>
    </div>
  );
}

export default App;
