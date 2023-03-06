import Items from "../Items/Items"
import { CartStyle, Amount } from "./CartStyle"
export default function Cart(props) {


    const removeItemCart = (index) => {
        const filteredList = props.cart.filter((item, i) => i !== index)
      
        const cartValue = filteredList.reduce((acc, item) => acc + item.value * item.quantity, 0)
      
        const totalValue = cartValue
      
        props.setCart(filteredList);
        props.setCartValue(cartValue);
        props.setTotalValue(totalValue);
      }
      
      const removeOneItem = (index) => {
        const updatedCart = [...props.cart];
        updatedCart[index].quantity--;
        if (updatedCart[index].quantity === 0) {
          updatedCart.splice(index, 1)
        }
        const cartValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
        const totalValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
        props.setCart(updatedCart);
        props.setCartValue(cartValue);
        props.setTotalValue(totalValue);
      }

    const itemsCart = props.cart.map((item, index) => {

        const itemTotalValue = item.value * item.quantity;

        return (
            <Items
                key={index}
                productsList={props.productsList}
                removeItemCart={() => removeItemCart(index)}
                removeOneItem={() => removeOneItem(index)}
                item={item}
                cart={props.cart}
                setCart={props.setCart}
                cartValue={props.cartValue}
                setCartValue={props.setCartValue}
                totalValue={props.totalValue}
                setTotalValue={props.setTotalValue} />
        )
    })


    const totalValue = Number(props.totalValue)

    return (
        <CartStyle>
            <h1>Carrinho</h1>
            {itemsCart}
            <Amount>
                Valor total: R${totalValue.toFixed(2)}
            </Amount>
        </CartStyle>
    )

}