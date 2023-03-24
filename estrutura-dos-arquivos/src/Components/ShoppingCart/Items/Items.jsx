import { ItemContainer, ButtonAdd } from "./ItemsStyle"

const Items = (props) => {
    console.log(props);

    const diminuirQnt = (prod) => {
        const existeItem = props.cart.find((item) => {
            return item.id === prod.id
            
        })
        console.log(existeItem);
        if (existeItem.amount > 1) {
            const newCart = props.cart.map((item) => {
                if (item.id === existeItem.id) {
                    return { ...item, amount : item.amount - 1 }
                }
                return item
            })
            props.setCart(newCart)
        } else {
            props.setCart(props.cart.slice(0, prod).concat(props.cart.slice(prod = 1)))
        }
    }
  

    return (
        <div>

            <ItemContainer >
                <p>{props.item.amount}x</p>
                <p>{props.item.name}</p>
                <p>{props.currencyBrazil(props.item.value, true)}</p>
                {<ButtonAdd onClick={() => diminuirQnt(props.item) }>remover</ButtonAdd>}
            
            </ItemContainer>
            
            
           

        </div>

    )
}
export default Items
