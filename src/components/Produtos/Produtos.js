
import { Card, DadosName, DadosPrice, Imagem } from "./styles.js"
import {useCart} from "react-use-cart"


const Produtos = ({name,imageUrl,imageAlt,price,item }) => {

  const{addItem} = useCart()
  return (
   
      
      <Card>
      <DadosName>{name}</DadosName>
      <Imagem src={imageUrl}alt={imageAlt}/>
      <DadosPrice>R${price}</DadosPrice>
      <button onClick={()=>addItem(item)}>ADICIONAR</button>
      </Card>
  )
}

export default Produtos
