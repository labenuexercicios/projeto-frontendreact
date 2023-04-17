import CardCart from "../../Components/CardCart/CardCart";
import { priceFormatter } from "../../utils/priceFormatter";
import { AppContainer, Checkout, Header, Logo, Main } from "./style";
import Mastercard from '../../assets/mastercard-icon.svg'
import Visa from '../../assets/visa-icon.svg'
import RuPay from '../../assets/rupay-icon.svg'
import Footer from "../../Components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import background from "../../assets/spacebackground.webp"

function CartScreen(props) {

    const { cart, goToMainPage, increaseQuantityInCart, decreaseQuantityInCart, deleteFromCart } = props

    const totalCart = cart.reduce((acc, product) => {
        return product.price * product.quantity + acc
    }, 0)

    return (
        <AppContainer style={{ backgroundImage: `url(${background})` }}>
            <Header>
                <div className="logo-group">
                    <Logo>
                        <h1>Space</h1>
                        <h1>Land</h1>
                    </Logo>
                    <IoRocketSharp size="70px" color="#4299e1" />
                </div>
            </Header>
            <Main>
                <h2 className="shopping-continue" onClick={goToMainPage}><FaArrowLeft />Continuar comprando</h2>
                <section>
                    <div className="cart">
                        <hr />
                        <div className="header-cart-section">
                            <h3>Carrinho</h3>
                            <p>Você tem {cart.length} produtos no carrinho</p>
                        </div>
                        <div className="cart-products">
                            <div className="header-cart-products">
                                <span>Produto</span><span>Preço</span><span>Quantidade</span>
                            </div>
                            <hr />
                            {cart.map((product) => (
                                <CardCart key={product.id} product={product} increaseQuantityInCart={increaseQuantityInCart} decreaseQuantityInCart={decreaseQuantityInCart} deleteFromCart={deleteFromCart} />
                            ))}
                        </div>
                    </div>

                    <div className="total-products">
                        <h2>Resumo</h2>
                        <p>Método de Pagamento</p>
                        <div className="card-type">
                            <img src={Mastercard} alt="master card icon" />
                            <img src={Visa} alt="visa icon" />
                            <img src={RuPay} alt="ruPay icon" />
                        </div>

                        <div>
                            <p>Nome impresso no cartão</p>
                            <input placeholder="Nome" type="text" />
                            <p>Número do cartão</p>
                            <input placeholder="99 99999-9999" type="text" />
                            <span>Data de expiração</span><span>CVV</span>
                            <div className="payment-inputs">
                                <input placeholder="mm/aa" type="month" />
                                <input placeholder="123" type="number" />
                            </div>

                            <hr />

                            <p>Subtotal: {priceFormatter.format(totalCart)}</p>
                            <p>Frete: Grátis</p>
                            <p>Total: {priceFormatter.format(totalCart)}</p>
                            <Checkout>Finalizar comprar</Checkout>
                        </div>
                    </div>
                </section>
            </Main>
            <Footer />
        </AppContainer>
    )
}

export default CartScreen