import { Amount, CartDiv } from "./CartStyle"

export default function Cart(props) {

    const totalValue = Number(props.amount)

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
                                {props.itemsCart}
                            </CartDiv>
                            <div className="order_total">
                                <div className="order_total_content text-md-right">
                                    <div className="order_total_title">
                                        Total:
                                    </div>
                                    <Amount
                                        className="order_total_amount">
                                        R${totalValue.toFixed(2)}
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