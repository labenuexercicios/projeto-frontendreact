import { priceFormatter } from "../../utils/priceFormatter"
import { ProductCardContainer } from "./ProductCard.styled"
  
function ProductCard(props) {
    const {
        product,
        addToCart,
        isOnProductsScreen,
        isOnCartScreen,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart,
        cleanCart
    } = props

    return (
        <ProductCardContainer>
            <img src={product.imageUrl} alt={product.imageAlt} />
            <div>
                <div className="card-header">
                    <h2>{product.name}</h2>
                    <span>{product.rating}</span>
                </div>
                <div className="card-price-and-cart-action">
                    <span>{priceFormatter.format(product.price)}</span>
                    {
                        isOnCartScreen && product.quantity > 1
                        && <button
                                onClick={() => decreaseQuantityInCart(product)}
                        >
                            -
                        </button> 
                    }
                    {
                        isOnCartScreen
                        && <button
                            onClick={() => increaseQuantityInCart(product)}
                        >
                            +
                        </button> 
                    }

                    {
                        isOnProductsScreen
                        && <button className="button-card" onClick={() => addToCart(product)}> Adicionar ao carrinho</button>
                    }
                    {
                        isOnCartScreen
                        && <span>Qtd: {product.quantity}</span>
                    }
                    {
                        isOnCartScreen
                        && <button
                            className="cart-card-delete-btn"
                            onClick={() => deleteFromCart(product)}
                        >
                            Remover item
                        </button>
                    }
                    
                </div>
            </div>
        </ProductCardContainer>
    )
}

export default ProductCard