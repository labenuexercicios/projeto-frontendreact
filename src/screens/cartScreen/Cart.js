import { formatter } from "../../uteis/formatterCurrency"
import { ContaninerCart , CardProduct} from "./Cart.styled"

function Cart(props) {
    const { currCart,
        addToCart,
        addQuantityToProductOnCart,
        reduceQuantityToProductOnCart } = props

        let subTotal =( currCart.reduce((acc, product) => (product.quantity * product.priceDiscont + acc), 0)).toFixed(2) 
        let quantitySum =( currCart.reduce((acc, product) => (product.quantity + acc), 0)) 

    return (
        <ContaninerCart>
            <div>
                <h1>Carrinho de compras</h1>
                <div>
                    <span>remover todos</span>
                    <span>Preço</span>

                </div>

                {currCart.map((product) => {
                    const priceDiveded = formatter.format(product.priceDiscont / 5)
                    return (
                        <CardProduct key={product.id}>
                            <hr />
                            <img src={product.image} alt="" />
                            <div>
                                <h2>{product.name}</h2>
                                <p> {product.sold} Vendidos</p>
                                <p>{product.evaluation}</p>
                                <p>{product.numberEvaluation}</p>
                                <img src="https://picsum.photos/20" alt="" />
                                <p>{product.quantity}</p>
                                <img src="https://picsum.photos/20" alt="" />
                                <img src="https://picsum.photos/40/20" alt="" />
                            </div>
                            <div>
                                <p>{formatter.format(product.price)}</p>
                                <p>{formatter.format(product.priceDiscont)}</p>
                                <p>5x de {priceDiveded} sem juros</p>

                            </div>
                        </CardProduct>
                    )
                })

                }
            </div>
            <div>
                <p>subtotal</p>
                <p>{subTotal}</p>
                <p>{quantitySum}</p>

            </div>
        </ContaninerCart>

    )
}
export default Cart