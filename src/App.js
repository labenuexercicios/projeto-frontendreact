// import styled from "styled-components"
import Header from "./Componentes/Header/Header"
import Main from "./styled"
import { CardContainer } from "./styled"
import { useState } from "react"
import todosProdutos from "./objetos"
import Cards from "./Componentes/Cards/Cards"
import Carrinho from "./Componentes/Carrinho/Carrinho"

function App(props) {
  
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [query, setQuery] = useState("")
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState("asc")
  const [listaCarrinho, setListaCarrinho] = useState([])

  const addProduto = (produto) => {
        setListaCarrinho([...listaCarrinho, produto])
        console.log(produto)
    }
  
  const removeProduto = (produto) => {
    if(window.confirm("Tem certeza que quer remover esta produto?")){
      const novaListaCarrinho = [...listaCarrinho]
      console.log(novaListaCarrinho)

      const index = novaListaCarrinho.indexOf(produto)
      console.log(index)
      console.log(produto)

      if(index > -1){
        novaListaCarrinho.splice(index, 1)
        setListaCarrinho(novaListaCarrinho)
      }
    }  
  }

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
      />
      <Main>
        <CardContainer>
        {todosProdutos
        .filter((item) => {
          return item.produto.toLocaleUpperCase().includes(query.toLocaleUpperCase()) 
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
        .map((produto)=>{
          return (
            <Cards  
              key={produto.id}
              produto={produto}
              addProduto={addProduto}
              >
            </Cards>
          )
        })}
        </CardContainer>
        
        <Carrinho 
          listaCarrinho={listaCarrinho}
          setListaCarrinho={setListaCarrinho}
          todosProdutos={todosProdutos}
          removeProduto={removeProduto}
        >
        </Carrinho>
      </Main>
      
    </div>
  );
}

export default App;
