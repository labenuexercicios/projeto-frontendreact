import { Products } from "../../../assents/productsList"
import { ItensButton, ItensP, ValorP } from "./styled"





export function Itens({ cart, setCart, Products }) {



    const removeItem = () => {

        const copyCart = [...cart]


        const item = copyCart.find((product) => product.id === Products.id)

        if (item.quantity > 1) {
            item.quantity = item.quantity - 1
            setCart(copyCart)}

       

        else {
            const filterRemove = copyCart.filter((product) => product.id !== Products.id)
            
            setCart(filterRemove)      
            
        }
          

     
        const teste = JSON.stringify(cart)
        localStorage.setItem("cart item", teste) 
        
    }




    console.log(cart)
    return (
        <div>

            <ItensP>{Products.quantity}x {Products.name}  </ItensP>
            <ValorP>Preço: {Products.value * Products.quantity},00
                <ItensButton
                    onClick={removeItem}
                ><b>X</b></ItensButton></ValorP>


        </div>




    )



}








