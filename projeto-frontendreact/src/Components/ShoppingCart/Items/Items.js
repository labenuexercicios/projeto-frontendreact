import { Button, CartList, ItemsCart } from "./ItemsStyle"

export default function Items(props) {

    const itemTotalValue = props.item.value * props.item.quantity;

    return (
        <CartList>
            <ItemsCart >
                <p>{props.item.quantity}x</p>
                <p>{props.item.name}</p>
                <p>Valor Unitário: {props.item.value}</p>
                <p>Valor Total: {itemTotalValue}</p>
                <Button onClick={props.removeOneItem}>Remover</Button>
                <Button onClick={props.removeItemCart}>Remover Todos</Button>
            </ItemsCart>
        </CartList>
    )
}