import { ProductCard, ButtonProducts, ImageProducts, ImageP, ImageCart } from "./styled"
import imageCart from "../cart.png"
import { ImageCard } from "../../Footer/styled";


export function Produtos({setCart, cart, Products}) {

    
    const addItem = () => {
        const copyCart  = [...cart]

        const item = copyCart.find((product)=>product.id === Products.id)
        
        if(!item){
            copyCart.push(Products)
                      
            setCart(copyCart)          
        }

        else{
          
          item.quantity = item.quantity + 1;

          setCart(copyCart)
        
        }
         
        

        const stringChange = JSON.stringify(cart)
        localStorage.setItem("cart item", stringChange)
 
     };

    return (
        <div>
            
            <ProductCard name="item" id="item" htmlFor="item">
            <ImageProducts>{Products.imageUrl}</ImageProducts>
            <ImageP> {Products.name}</ImageP>
                <ImageP><b>Valor:</b> R$ {Products.value.toFixed(2).replace(".",",")}</ImageP>
                <ButtonProducts  onClick={addItem}>Adicionar <ImageCart src={imageCart}/></ButtonProducts>
               
            </ProductCard>

            
            
        </div>
    )
}