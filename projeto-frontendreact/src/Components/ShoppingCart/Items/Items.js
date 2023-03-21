import { Button, CartList, ItemsCart} from "./ItemsStyle"

export default function Items(props) {

    const itemTotalValue = props.item.value * props.item.quantity;

    console.log(props.imageUrl)

    return (
        <CartList
            className="cart_list">
            <ItemsCart
                className="cart_item clearfix">
                <div
                    className="cart_item_image">
                    <img src={props.item.imageUrl} alt="" />
                </div>
                <div
                    className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div
                        className="cart_item_name cart_info_col">
                        <div
                            className="cart_item_title">
                            Nome
                        </div>
                        <div
                            className="cart_item_text">
                            {props.item.name}
                        </div>
                    </div>
                    <div
                        className="cart_item_quantity cart_info_col">
                        <div
                            className="cart_item_title">
                            Quantidade
                        </div>
                        <div
                            className="cart_item_text">
                            {props.item.quantity}
                        </div>
                    </div>
                    <div
                        className="cart_item_price cart_info_col">
                        <div
                            className="cart_item_title">
                            Preço
                        </div>
                        <div
                            className="cart_item_text">
                            R${props.item.value}
                        </div>
                    </div>
                    <div
                        className="cart_item_total cart_info_col">
                        <div
                            className="cart_item_title">
                            Total</div>
                        <div
                            className="cart_item_text">
                            R${itemTotalValue}</div>
                    </div>
                    <Button onClick={props.removeOneItem}>Remover</Button>
                    <Button onClick={props.removeItemCart}>Remover Todos</Button>
                </div>
            </ItemsCart>
        </CartList>

    )
}