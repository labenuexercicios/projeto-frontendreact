import { Amount, CartDiv } from "./CartStyle"
import Items from "../Items/Items"

export default function Cart(props) {
    
    const removeItemCart = (index) => {
        const filteredList = props.cart.filter((item, i) => i !== index)
        const totalValue = filteredList.reduce((acc, item) => acc + item.value * item.quantity, 0)
        props.setCart(filteredList);
        props.setAmount(totalValue);
    }

    const removeOneItem = (index) => {
        const updatedCart = [...props.cart];
        updatedCart[index].quantity--;
        if (updatedCart[index].quantity === 0) {
            updatedCart.splice(index, 1)
        }
        const totalValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
        props.setCart(updatedCart);
        props.setAmount(totalValue);
    }

    const totalValue = Number(props.amount)

    const itemsCart = props.cart.map((item, index) => {
        return (
            <Items
                key={index}
                productsList={props.productsList}
                removeItemCart={() => removeItemCart(index)}
                removeOneItem={() => removeOneItem(index)}
                item={item}
                cart={props.cart}
                setCart={props.setCart} />
        )
    })

    const formatedAmount = props.amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


    return (
        <div
            className="cart_section">
            <div
                className="container-fluid">
                <div
                    className="row">
                    <div
                        className="col-lg-10 offset-lg-1">
                        <div
                            className="cart_container">
                            <div
                                className="cart_title">
                                Carrinho<small> ({props.cartQuantity} itens no seu carrinho) </small>
                            </div>
                            <CartDiv
                                className="cart_items">
                                {itemsCart}
                            </CartDiv>
                            <div className="order_total">
                                <div className="order_total_content text-md-right">
                                    <div className="order_total_title">
                                        Total:
                                    </div>
                                    <Amount
                                        className="order_total_amount">
                                        {formatedAmount}
                                    </Amount>
                                </div>
                            </div>
                            <div className="cart_buttons">
                                <button
                                    type="button"
                                    className="button cart_button_clear"
                                    onClick={() => props.changeScreen(1)}>
                                    Continuar comprando
                                </button>
                                <button
                                    type="button"
                                    className="button cart_button_checkout">
                                    Finalizar compra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}