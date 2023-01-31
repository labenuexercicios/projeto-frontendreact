import { ListStyle } from "./styles"
import { useState } from "react";

const Lista = (props) => {

  // const [name, setName] = useState("")
  // const [price, setPrice] = useState("")
  const [orderAbc, setOrderAbc] = useState("")
  const [orderInverse, setOrderInverse] = useState("")
  const [orderPriceMax, setOrderPriceMax] = useState("")
  const [orderPrice, setOrderPrice] = useState("")
  const [price,setPrice] = useState("");
  const [price1,setPrice1] = useState("")
  const [name,setName] = useState("");
  
  // const handleInputName = (e) => setName(e.target.value)
  // const handleInputImage = (e) => setImageUrl(e.target.value)
  // const handleInputImageAlt = (e) => setImageAlt(e.target.value)
  // const handleInputPrice = (e) => setPrice(e.target.value)
  // const handleInputItem = (e) => setItem(e.target.value)
  const handleOrderAbc = (event)=> setOrderAbc(event.target.value)
  const handleInverse = (event)=> setOrderInverse(event.target.value)
  const handlePriceMax = (event)=> setOrderPriceMax(event.target.value)
  const handlePrice = (event)=> setOrderPrice(event.target.value)



const handleFilterMin = (event)=> setPrice(event.target.value)
const handleFilterMax = (event)=> setPrice1(event.target.value)
const handleFilterName = (event)=> setName(event.target.value)
  return (
    <div>
        <ListStyle>
        <select>
            <option 
            value={orderAbc} 
            onClick={handleOrderAbc}
            >ordernar por a-z
            </option>
            <option 
            value={orderInverse} 
            onClick={handleInverse}
            >ordernar por z-a
            </option>
            <option 
            value={orderPriceMax}
            onClick={handlePriceMax}
            >ordernar por maior preço
            </option>
            <option 
            value={orderPrice}
            onClick={handlePrice}
            >ordernar por menor preço
            </option>
        </select>
        <label >
            Valor mínimo:
            <input 
            type="number" 
            value={price}
            onChange={handleFilterMin}
            />
        </label>
        <label >
            Valor máximo:
            <input 
            onChange={handleFilterMax}
            type="number" 
            value={price1}
            />
        </label>
        <label >
            Busca por nome:
            <input 
            type="text" 
            onChange={handleFilterName}
            value={name}
            />
        </label>
        <button>Pesquisar</button>
        </ListStyle>  
    </div>
  )
}

export default Lista