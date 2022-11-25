// import styled from "styled-components"
import Header from "./Componentes/Header/Header"
import Main from "./styled"
import { CardContainer } from "./styled"
import { useEffect, useState } from "react"
import TodosBrinquedos from "./objetos"
import Cards from "./Componentes/Cards/Cards"
import Carrinho from "./Componentes/Carrinho/Carrinho"
import {Footer} from "./Componentes/Footer/Footer"

function App(props) {
  
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [query, setQuery] = useState("")
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState("asc")
  const [listaCarrinho, setListaCarrinho] = useState([])

  const addBrinquedo = (brinquedoToAdd) => {
    const newListaCarrinho = [...listaCarrinho]

    const brinquedoFound = newListaCarrinho.find(
      (brinquedoInCarrinho) => brinquedoInCarrinho.id === brinquedoToAdd.id
    )

    if (!brinquedoFound){
      const newBrinquedo = { ...brinquedoToAdd, quantity:1}
      newListaCarrinho.push(newBrinquedo)      
    }   
    else{
      brinquedoFound.quantity++
    }
    const carrinhoString =JSON.stringify(newListaCarrinho)
    localStorage.setItem("carr", carrinhoString) 
      
      setListaCarrinho(newListaCarrinho)       
    }

      const removeBrinquedo = (id) => {
        const newListaCarrinho = [...listaCarrinho]

        for(let i=0; i <listaCarrinho.length; i++){
          if(newListaCarrinho[i].id === id){
            if(newListaCarrinho[i].quantity>1){
              newListaCarrinho [i].quantity--
              // localStorage.clear
            }else{
              newListaCarrinho.splice(i, 1)
            }
            setListaCarrinho(newListaCarrinho)
          }
        }        
     }
    //  const carrinhoString =JSON.stringify(listaCarrinho )
    //  localStorage.setItem("carr", carrinhoString)

    const guardaCarrinho = () =>{
      const newListaCarrinho = localStorage.getItem("carr")
     const carrinho2 = JSON.parse(newListaCarrinho)
     setListaCarrinho(carrinho2)       
    }
   
    useEffect (()=>{
      guardaCarrinho()
    },[])

     



  
  // const removeBrinquedo = (brinquedo) => {
   
  //     const novaListaCarrinho = [...listaCarrinho]
  //     console.log(novaListaCarrinho)

  //     const index = novaListaCarrinho.indexOf(brinquedo)
  //     console.log(index)
  //     console.log(brinquedo)

  //     if(index > -1){
  //       novaListaCarrinho.splice(index, 1)
  //       setListaCarrinho(novaListaCarrinho)
  //     }
   
  // }

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
        {TodosBrinquedos
        .filter((item) => {
          console.log(item.produto)
          return item.produto.includes(query) 
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
              addBrinquedo={addBrinquedo}
              isOnCarrinho={true}
          
              removeBrinquedo={removeBrinquedo}
              
          
              >
            </Cards>
          )
        })}
        </CardContainer>
        
        <Carrinho 
          listaCarrinho={listaCarrinho}
          setListaCarrinho={setListaCarrinho}
          TodosBrinquedos={TodosBrinquedos}
          removeBrinquedo={removeBrinquedo}         
          // decreaseQuantityInCarrinho={decreaseQuantityInCarrinho}
          // increaseQuantityInCarrinho={increaseQuantityInCarrinho} 
          
        >
        </Carrinho>
      </Main>
      <Footer>

      </Footer>
      
    </div>
  );
}

export default App;
