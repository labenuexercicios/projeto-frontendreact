import { priceFormatter } from "../utils/priceFormatter"
import { CardProduts } from "./ProductsCard.styled"

function ProductsCards(props) {
    const {
        Product,
        addToCart,
        isOnCartScreen,
        isOnProductsScreen,
        decreaseQuantityInCart,
        increaseQuantityInCart,
    } = props

 
    return (
        <CardProduts>
            <img src={Product.image} alt={Product.image} />
            <div>
                <div className="name-Product-Card">
                    <h2>{Product.name}</h2>
                </div>
                <div className="card-price">
                    <h3>{priceFormatter.format(Product.price)}</h3>

                    {isOnProductsScreen && <button onClick={() => 
                        addToCart(Product)}> Add to Cart </button>}

                    {isOnCartScreen && Product.quantity > 1 && <button onClick={() => 
                        decreaseQuantityInCart(Product)}>-</button>}

                    {isOnCartScreen && <span> {Product.quantity} </span>}
                    
                    {isOnCartScreen && <button onClick={() => 
                        increaseQuantityInCart(Product)}>+</button>}
                </div>
            </div>
        </CardProduts>
    )
}
export default ProductsCards