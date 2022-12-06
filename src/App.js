// import styled from "styled-components"
import Header from "./Componentes/Header/Header"
import Main from "./styled"
import { CardContainer } from "./styled"
import { useEffect, useState } from "react"
import TodosBrinquedos from "./objetos"
import Cards from "./Componentes/Cards/Cards"
import Carrinho from "./PaginaCarrinho/Carrinho"
import {Footer} from "./Componentes/Footer/Footer"

function App(props) {

  const [goToCarrinho, setGoToCarrinho] = useState(1);
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
    // if(){

    // }
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
            //localStore p remover e  quando atualizar continuar removido
            const carrinhoString =JSON.stringify(newListaCarrinho)
            localStorage.setItem("carr", carrinhoString) 
            setListaCarrinho(newListaCarrinho)
          }
        }        
     }

    const guardaCarrinho = () =>{
      
    if (localStorage.getItem("carr")){
    const newListaCarrinho = localStorage.getItem("carr")
    const carrinho2 = JSON.parse(newListaCarrinho)
     setListaCarrinho(carrinho2)       
    }
    
  }

    useEffect (()=>{
      guardaCarrinho()
    },[])



    const QtdTotalItemCarrinho = listaCarrinho.reduce(
      (acc, produto)=>{
          return produto.quantity + acc
      },0
     )


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
        setGoToCarrinho={setGoToCarrinho}
        QtdTotalItemCarrinho={QtdTotalItemCarrinho}
       
      />
      <Main>
        {goToCarrinho === 1?(
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
        </CardContainer>):(
              
        <Carrinho 
          listaCarrinho={listaCarrinho}
          setListaCarrinho={setListaCarrinho}
          TodosBrinquedos={TodosBrinquedos}
          removeBrinquedo={removeBrinquedo} 
          setGoToCarrinho={setGoToCarrinho}
          QtdTotalItemCarrinho={QtdTotalItemCarrinho}
        >
        </Carrinho>
        )}
      </Main>
      <Footer>

      </Footer>
      
    </div>
  );
}

export default App;
