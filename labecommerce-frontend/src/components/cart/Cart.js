import { CartContainer } from "./styles"

const Cart = ({ cart, setCart }) => {
    const removeProduct = (product) => {
        const newCart = cart.map((item) =>
            item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item
        ).filter((item) => item.quantity > 0)
        setCart(newCart)
    }
    const total = cart.reduce((acumulator, product) => {
        return acumulator + product.valor * product.quantity
    }, 0)

    return (
        <CartContainer>
            <p>Carrinho</p>
            {cart.map((item) => {
                return (
                    <div key={item.id}>
                        <p>Nome: {item.nome}</p>
                        <p>Quantidade: {item.quantity}</p>
                        <button onClick={() => removeProduct(item)}>Remover</button>
                    </div>
                )
            })}
            <p>Total: {total} </p>
        </CartContainer>
    )
}

export default Cart