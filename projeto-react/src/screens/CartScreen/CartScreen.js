import { useState } from "react";
import CardCart from "../../Components/CardCart/CardCart";
import Header from "../../Components/Header/Header";
import { priceFormatter } from "../../utils/priceFormatter";
import { AppContainer, Checkout, Main } from "./style";
import Mastercard from '../../assets/mastercard-icon.svg'
import Visa from '../../assets/visa-icon.svg'
import RuPay from '../../assets/rupay-icon.svg'
import Footer from "../../Components/Footer/Footer";

function CartScreen(props) {
  const [search, setSearch] = useState("");

  const { cart, goToMainPage, increaseQuantityInCart, decreaseQuantityInCart, deleteFromCart } = props

  const totalCart = cart.reduce((acc, product) => {
    return product.price * product.quantity + acc
  }, 0)

  return (
    <AppContainer>
      <Header search={search} setSearch={setSearch} goToMainPage={goToMainPage} />
      <Main>
        <h2 className="shopping-continue">Carrinho</h2>
        <div className="cart-section">
          <div className="cart-products">
            {cart.map((product) => (
              <CardCart key={product.id} product={product} increaseQuantityInCart={increaseQuantityInCart} decreaseQuantityInCart={decreaseQuantityInCart} deleteFromCart={deleteFromCart} />
            ))}
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
        </div>
      </Main>
      <Footer/>
    </AppContainer>
  )
}

export default CartScreen