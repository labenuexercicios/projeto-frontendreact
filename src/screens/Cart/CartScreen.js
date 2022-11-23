import ProductCard from "../../components/ProductCard/ProductCard"
import { priceFormatter } from "../../utils/priceFormatter"
import { Main } from "./CartScreen.styled"

function CartScreen(props) {
    const {
        cart,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart,
        cleanCart
    } = props

    const total = cart.reduce(
        (acc, product) => product.price * product.quantity + acc,
        0
    )

    return (
        <Main>
            <section >
               
                {cart.map((product) => (
                        <ProductCard
                            product={product}
                            key={product.id}
                            isOnCartScreen={true}
                            increaseQuantityInCart={increaseQuantityInCart}
                            decreaseQuantityInCart={decreaseQuantityInCart}
                            deleteFromCart={deleteFromCart}
                            cleanCart={cleanCart}
                            
                        />
                ))}

                        <div className="TotalCompra">

                        <h1>Total da compra = {priceFormatter.format(total, cleanCart)}</h1> 
                        <button className="clean-btn" onClick={() => alert('Compra concluida com sucesso!') }>
                            Finalizar Compra  
                        </button>
                            
                        <button className="clean-btn" onClick={() => cleanCart()}>
                        Limpar carrinho
                        </button>

                        </div>
               
            </section>
        </Main>
    )
}

export default CartScreen
