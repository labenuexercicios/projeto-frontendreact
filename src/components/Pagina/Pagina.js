import Produtos from "../Produtos/Produtos"
import { StylePage } from "./styles"
import { products } from "../../data/data"

const Pagina = () => {

// const [name, setName] =useState("")
// const [image, setImage] =useState("")
// const [imageUrl, setImageUrl] =useState("")
// const [price, setPrice] =useState("")
// const [price1, setPrice1] =useState("")


// const handleInputName = (e) => setName(e.target.value)
// const handleInputImage = (e) => setImage(e.target.value)
// const handleInputImageAlt = (e) => setImageAlt(e.target.value)
// const handleInputPrice = (e) => setPrice(e.target.value)
// const handleInputPrice1 = (e) => setPrice1(e.target.value)
// const filterPage = products.item.filter(item=>{
//   return Object.keys(item).some(key=>
//     item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
//     )
// } )


// const renderList = products.map(card =>( 
  

//   ))

  return (
    <StylePage >

      {products
      // .filter((item)=>{
      //   return item.name.includes(name);
      // })
      // .filter((item)=>{
      //   return item.price >= (price)
      // })
      // .filter((item)=>{
      //   return item.price <= (price1)
      // })
      .map((item,index) => {
        return(
             <Produtos 
          key={index}
          name={item.name}
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt}
          price={item.price}
          item={item}
          />
        )})}
    </StylePage>
  )

}

export default Pagina