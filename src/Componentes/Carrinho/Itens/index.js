import { Products } from "../../../assents/productsList"
import { ItensButton, ItensP, ValorP } from "./styled"





export function Itens({ cart, setCart, Products }) {



    const removeItem = () => {

        const copyCart = [...cart]


        const item = copyCart.find((product) => product.id === Products.id)

        if (item.quantity > 1) {
            item.quantity = item.quantity - 1
            setCart(copyCart)
        
            const teste = JSON.stringify(copyCart)
            localStorage.setItem("cart item", teste) }

       

        else {
            const filterRemove = copyCart.filter((product) => product.id !== Products.id)
            
            setCart(filterRemove)      
            const teste = JSON.stringify(filterRemove)
        localStorage.setItem("cart item", teste) 
        }
          

     
      
        
    }




    console.log(cart)
    return (
        <div>

            <ItensP>{Products.quantity}x {Products.name}  </ItensP>
            <ValorP>Preço: {(Products.value * Products.quantity).toFixed(2).replace(".",",")}
                <ItensButton
                    onClick={removeItem}
                ><b>X</b></ItensButton></ValorP>


        </div>




    )



}








