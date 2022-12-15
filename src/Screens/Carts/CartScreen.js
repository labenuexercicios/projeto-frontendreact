// import cart from "../../assets/products.json"
import ProductsCard from "../../Components/ProductsCard/ProductsCard"
import { Main } from "./CartScreen.styled"
import { priceFormatter } from "../../Components/utils/priceFormatter"




function CartScreen(props) {
    const {cart, 
        increaseQuantityInCart, 
        decreaseQuantityInCart
    } = props

    const total = cart.reduce(
        (acc, Product) => Product.price * Product.quantity + acc, 
        0
        )
       
    return (
        <Main>
            <section>
                <h1>Cart | Total= {priceFormatter.format(total)}</h1>
                <hr />
                {
                    cart.map((Product) => (
                        <ProductsCard
                            Product={Product}
                            key={Product.id} 
                            isOnCartScreen={true}
                            decreaseQuantityInCart={decreaseQuantityInCart}
                            increaseQuantityInCart={increaseQuantityInCart}
                            />
                    ))

                }
            </section>
        </Main>
    )
}

export default CartScreen;
