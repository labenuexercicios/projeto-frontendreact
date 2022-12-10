import { MainContainer, TotalPrice, GlobalStyle } from "./CartScreen.styled";

function CartScreen(props) {

  const totalPrice = props.cartList.reduce((acc, product) => (product.price * product.quantity) + acc, 0)
  console.log(totalPrice)

  const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return (
    <createGlobalStyle>
      <GlobalStyle />

      <MainContainer>

        {props.cartList.map((itens) => {

          return (
            <div className="container">
              <div className="card">
                <div className="content" key={itens.id}>
                  <h1>{itens.imageAlt}</h1>
                  <h2>R$ {itens.price},00</h2>
                  <h3>{itens.rating}</h3>
                  <img src={itens.imageUrl} width="150" height="100"></img>
                  <h4>{itens.name}</h4>
                  <button className="remove-to-cart" onClick={() => props.removeProducts(itens)}>Remover Produto</button>
                  <span> x {itens.quantity}</span>
                </div>
              </div>
            </div>

          )
        })}
      </MainContainer>

      <TotalPrice className="total-price">
        PREÇO TOTAL:{priceFormatter.format(totalPrice)}
      </TotalPrice>

    </createGlobalStyle>
  );
}
export default CartScreen