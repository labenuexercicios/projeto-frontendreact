import { ItemsContainer, CartItems } from "../Items/style.jsx";
import { Trash2 } from "lucide-react";
export default function Items(props) {
  const { cart, setCart} = props;

function deleteCartItem(product) {
    const deleteProduct = cart.find((item) => item.id === product.id);

    
    
      if (deleteProduct.quantity > 1 ) {
        const newCart = cart.map((item) =>{
          if (item.id === product.id){
        return{ ...deleteProduct, quantity: deleteProduct.quantity - 1 }
          }else{
           return item
          }
        })

        setCart(newCart)
  
    }else {
      const newCart = cart.filter((item) => {
        return item.id !== product.id
      })
      setCart( newCart)
    }

  }
  





  return cart.map((item) => (
    <ItemsContainer key={item.id}>
      <CartItems>
        <p>{item.name}</p>
        <p>Valor:{item.value}</p>
        <p>Qtd:{item.quantity}</p>
        <button onClick={()=>deleteCartItem(item)}>
          <Trash2 />
        </button>
      </CartItems>
    </ItemsContainer>
));
}
